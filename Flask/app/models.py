from . import db
from datetime import datetime

class Hero(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    heading = db.Column(db.String(255))
    badge = db.Column(db.String(100))
    features = db.Column(db.Text)

    def to_dict(self):
        return {
            "id": self.id,
            "heading": self.heading,
            "badge": self.badge,
            "features": self.features.split(",") if self.features else []
        }


class StudentRegistration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    contact = db.Column(db.String(15))
    course = db.Column(db.String(150))
    city = db.Column(db.String(100))
    pincode = db.Column(db.String(10))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class CourseRegistration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course = db.Column(db.String(150))
    student_name = db.Column(db.String(100))
    student_email = db.Column(db.String(100))
    mode = db.Column(db.String(50))
    batch = db.Column(db.String(50))
    payment_option = db.Column(db.String(50))
    payment_method = db.Column(db.String(50))
    payment_status = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course = db.Column(db.String(150))
    mode = db.Column(db.String(50))
    batch = db.Column(db.String(50))
    payment_option = db.Column(db.String(50))
    payment_method = db.Column(db.String(50))
    payment_status = db.Column(db.String(20))
    payment_date = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
