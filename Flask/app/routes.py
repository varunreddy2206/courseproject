from flask import Blueprint, jsonify, request, current_app
from .models import Hero, StudentRegistration, CourseRegistration
from . import db
from datetime import datetime
import razorpay
import threading
import os  # ✅ NEW: for environment variables
from dotenv import load_dotenv  # ✅ NEW: load .env file

# ✅ Load environment variables from .env
load_dotenv()

print("✅ routes.py loaded successfully")

bp = Blueprint("routes", __name__)

# ✅ Razorpay client setup (from .env instead of hardcoded)
RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")

if not RAZORPAY_KEY_ID or not RAZORPAY_KEY_SECRET:
    print("⚠️ Warning: Razorpay keys not found in .env file!")

razorpay_client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))


# ✅ Automatically insert default hero data if table empty
@bp.before_app_request
def insert_default_data():
    if not hasattr(insert_default_data, "_done"):
        if not Hero.query.first():
            default_hero = Hero(
                heading="Landing Page For Online & Offline Course",
                badge="UI Kit",
                features="Free, Desktop & mobile, Text style, Color style, 100% editable, More"
            )
            db.session.add(default_hero)
            db.session.commit()
            print("✅ Default hero data inserted successfully!")
        insert_default_data._done = True


# ✅ GET Hero
@bp.route("/hero", methods=["GET"])
def get_hero():
    hero = Hero.query.first()
    if hero:
        return jsonify(hero.to_dict())
    return jsonify({"message": "No hero data found"}), 404


# ✅ POST / Update Hero
@bp.route("/hero", methods=["POST"])
def update_hero():
    data = request.get_json()
    hero = Hero.query.first() or Hero()
    hero.heading = data.get("heading")
    hero.badge = data.get("badge")
    hero.features = ",".join(data.get("features", []))
    db.session.add(hero)
    db.session.commit()
    return jsonify({"message": "Hero data saved successfully!"})


# ✅ Student Registration API
@bp.route("/register", methods=["POST"])
def register_student():
    data = request.get_json()
    new_student = StudentRegistration(
        name=data.get("name"),
        email=data.get("email"),
        contact=data.get("contact"),
        course=data.get("course"),
        city=data.get("city"),
        pincode=data.get("pincode")
    )
    db.session.add(new_student)
    db.session.commit()
    return jsonify({"message": "Student registration saved successfully!"})


# ✅ Course Registration API (Prevents Duplicate Entries)
@bp.route("/course-register", methods=["POST"])
def course_register():
    data = request.get_json()
    print("📥 Received Course Registration Data:", data)

    student_email = data.get("studentEmail")
    course_name = data.get("course")
    payment_option = data.get("paymentOption") or "Not Selected"

    # 🔍 Prevent duplicate registration for same student + same course
    existing = CourseRegistration.query.filter_by(student_email=student_email, course=course_name).first()
    if existing:
        print("⚠️ Duplicate course registration skipped")
        return jsonify({"message": "Already registered for this course"}), 200

    # 🔍 Find student details from registration
    student = StudentRegistration.query.filter_by(email=student_email).order_by(StudentRegistration.id.desc()).first()

    try:
        new_course = CourseRegistration(
            student_name=student.name if student else None,
            student_email=student_email,
            course=course_name,
            mode=data.get("mode"),
            batch=data.get("batch"),
            payment_option=payment_option,
            payment_status="Pending"
        )
        db.session.add(new_course)
        db.session.commit()

        print("✅ Course registration saved successfully!")

        # ⏳ Schedule check for unpaid status after 5 minutes
        app = current_app._get_current_object()
        threading.Timer(300, mark_failed_if_unpaid, args=[app, new_course.id]).start()

        return jsonify({"message": "Course registration saved successfully!"}), 201

    except Exception as e:
        db.session.rollback()
        print("❌ Error saving course:", e)
        return jsonify({"error": str(e)}), 500


# ✅ Function: Auto-mark as Failed if payment still pending
def mark_failed_if_unpaid(app, course_id):
    with app.app_context():
        course = CourseRegistration.query.get(course_id)
        if course and course.payment_status == "Pending":
            course.payment_status = "Failed"
            db.session.commit()
            print(f"⚠️ Auto-marked as FAILED (No payment after 5 minutes): {course.course}")


# ✅ Payment API (Dynamic)
@bp.route("/payment", methods=["POST"])
def save_payment():
    data = request.get_json()
    print("💰 Payment Data Received:", data)

    course_name = data.get("course")
    student_email = data.get("studentEmail")
    payment_method = data.get("paymentMethod")
    payment_option = data.get("paymentOption")
    payment_status = data.get("paymentStatus", "Success")

    course_record = CourseRegistration.query.filter_by(student_email=student_email, course=course_name).order_by(CourseRegistration.id.desc()).first()
    if not course_record:
        return jsonify({"error": "Course not found in registration"}), 404

    course_record.payment_option = payment_option
    course_record.payment_method = payment_method
    course_record.payment_status = payment_status

    db.session.commit()
    print("✅ Payment saved successfully!")
    return jsonify({"message": "Payment saved successfully!"}), 200


# ✅ Razorpay — Create order for payment
@bp.route("/create-order", methods=["POST"])
def create_order():
    try:
        data = request.get_json()
        amount_rupees = int(data.get("amount", 100))

        payment_data = {
            "amount": amount_rupees * 100,  # Razorpay expects amount in paise
            "currency": "INR",
            "payment_capture": 1
        }

        order = razorpay_client.order.create(data=payment_data)
        print("✅ Razorpay order created:", order)
        return jsonify(order)

    except Exception as e:
        print("❌ Razorpay order error:", e)
        return jsonify({"error": str(e)}), 500


# ✅ Admin: Fetch all data
@bp.route("/admin/registrations", methods=["GET"])
def get_all_registrations():
    students = StudentRegistration.query.all()
    courses = CourseRegistration.query.all()
    return jsonify({
        "students": [
            {
                "id": s.id,
                "name": s.name,
                "email": s.email,
                "contact": s.contact,
                "course": s.course,
                "city": s.city,
                "pincode": s.pincode,
                "created_at": s.created_at.strftime("%Y-%m-%d %H:%M")
            }
            for s in students
        ],
        "courses": [
            {
                "id": c.id,
                "student_name": c.student_name,
                "student_email": c.student_email,
                "course": c.course,
                "mode": c.mode,
                "batch": c.batch,
                "payment_option": c.payment_option,
                "payment_method": c.payment_method,
                "payment_status": c.payment_status,
                "created_at": c.created_at.strftime("%Y-%m-%d %H:%M")
            }
            for c in courses
        ]
    })
