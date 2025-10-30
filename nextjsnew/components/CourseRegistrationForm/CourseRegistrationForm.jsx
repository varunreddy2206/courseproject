"use client";

import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CourseRegistrationForm() {
  const router = useRouter();

  const [course, setCourse] = useState("");
  const [mode, setMode] = useState("");
  const [batch, setBatch] = useState("");
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [paymentOption, setPaymentOption] = useState("");
  const [customAmount, setCustomAmount] = useState(""); // 🆕 for other payment
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [studentInfo, setStudentInfo] = useState(null);

  // ✅ Load Razorpay SDK dynamically
  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => console.log("✅ Razorpay SDK loaded successfully");
      script.onerror = () => alert("❌ Failed to load Razorpay SDK. Check your internet connection.");
      document.body.appendChild(script);
    }
  }, []);

  // ✅ Load student data and selected course from localStorage
  useEffect(() => {
  const savedStudent = localStorage.getItem("studentInfo");
  const selectedCourse = localStorage.getItem("selectedCourse");

  if (!savedStudent) {
    alert("Please complete the student registration form first!");
    router.push("/registrationform");
    return;
  }

  const student = JSON.parse(savedStudent);
  setStudentInfo(student);

  // ✅ Priority: use the course chosen in registration form first
  if (student.course) {
    setCourse(student.course);
  } else if (selectedCourse) {
    setCourse(selectedCourse);
  }
}, [router]);



  // 💰 Course pricing (fixed)
  const coursePricing = {
    "Artificial Intelligence & Machine Learning with Python": { full: 5000, inst1: 2500, inst2: 2500 },
    "Data Science & Analytics with Python": { full: 5000, inst1: 2500, inst2: 2500 },
    "Python for Development & Automation": { full: 5000, inst1: 2500, inst2: 2500 },
    "Full Stack Web Development (MERN / MEAN)": { full: 5000, inst1: 2500, inst2: 2500 },
    "Full Stack Java Development (Spring Boot + React / Angular)": { full: 5000, inst1: 2500, inst2: 2500 },
    "Full Stack Python Development (Django / Flask + React)": { full: 5000, inst1: 2500, inst2: 2500 },
    "Frontend Development (HTML, CSS, JavaScript, React)": { full: 5000, inst1: 2500, inst2: 2500 },
    "Backend Development (Node.js, Express, MongoDB / MySQL)": { full: 5000, inst1: 2500, inst2: 2500 },
    "Flutter App Development": { full: 5000, inst1: 2500, inst2: 2500 },
    "React Native App Development": { full: 5000, inst1: 2500, inst2: 2500 },
    "UI/UX Design Fundamentals (Figma & Adobe XD)": { full: 5000, inst1: 2500, inst2: 2500 },
    "Graphic Design (Photoshop, Illustrator, Canva Pro)": { full: 5000, inst1: 2500, inst2: 2500 },
  };

  const selectedPricing = useMemo(() => course && coursePricing[course], [course]);

  // ✅ Step 1: Register course
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleSubmit.submitting) return;
    handleSubmit.submitting = true;

    const newErrors = {};
    if (!course) newErrors.course = "Please select a course";
    if (!mode) newErrors.mode = "Please select a mode";
    if (!batch) newErrors.batch = "Please select a batch";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const payload = {
        studentName: studentInfo?.name,
        studentEmail: studentInfo?.email,
        course,
        mode,
        batch,
        paymentOption: "Not Selected",
      };

      try {
        const res = await fetch("http://127.0.0.1:5000/api/course-register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          console.log("✅ Course registration saved successfully!");
          setStep(2);
        } else console.error("❌ Failed to save course registration");
      } catch (err) {
        console.error("❌ Error saving course registration:", err);
      }
    }

    setTimeout(() => {
      handleSubmit.submitting = false;
    }, 2000);
  };

  // ✅ Step 2: Razorpay Payment
  const handlePaymentContinue = async () => {
    if (!paymentOption) return alert("Please select a payment option!");
    if (!agreeTerms) {
      setTermsError("You must agree to the terms and conditions to continue.");
      return;
    }

    let amount = 0;

    if (paymentOption === "Registration Fee") amount = 500;
    else if (paymentOption === "Full Payment") amount = selectedPricing?.full || 5000;
    else if (paymentOption === "Installment 1") amount = selectedPricing?.inst1 || 2500;
    else if (paymentOption === "Installment 2") amount = selectedPricing?.inst2 || 2500;
    else if (paymentOption === "Other") {
      const entered = parseInt(customAmount);
      if (isNaN(entered) || entered <= 0) return alert("Please enter a valid amount!");
      if (entered <= 500) return alert("⚠️ Amount must be greater than ₹500 (Registration Fee).");
      if (entered > 5000) return alert("⚠️ Amount cannot exceed ₹5000.");
      amount = entered;
    }

    try {
      const orderRes = await fetch("http://127.0.0.1:5000/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const orderData = await orderRes.json();
      if (!orderData.id) return alert("Error creating payment order!");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: "INR",
        name: "NGS Courses",
        description: `${course} - ${paymentOption}`,
        order_id: orderData.id,
        prefill: {
          name: studentInfo?.name,
          email: studentInfo?.email,
          contact: studentInfo?.contact,
        },
        theme: { color: "#FACC15" },
        handler: async (response) => {
          alert("✅ Payment Successful!");
          await fetch("http://127.0.0.1:5000/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              course,
              mode,
              batch,
              paymentOption,
              paymentMethod: "Razorpay",
              paymentStatus: "Success",
              studentName: studentInfo?.name,
              studentEmail: studentInfo?.email,
              paymentId: response.razorpay_payment_id,
            }),
          });
          router.push("/success");
        },
      };

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded yet! Please wait and try again.");
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        console.error("Payment Failed:", response.error);
        alert("❌ Payment failed! " + response.error.description);
      });

      rzp.open();
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment initiation failed! Please try again.");
    }
  };

  // ✅ Payment Options (added Other)
  const getPaymentOptions = () =>
    selectedPricing
      ? [
        { label: "Registration Fee", price: "₹500" },
        { label: "Full Payment", price: `₹${selectedPricing.full}` },
        { label: "Installment 1", price: `₹${selectedPricing.inst1}` },
        { label: "Installment 2", price: `₹${selectedPricing.inst2}` },
        { label: "Other", price: "Custom" },
      ]
      : [{ label: "Registration Fee", price: "₹500" }];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 sm:px-10 lg:px-24 flex items-center justify-center overflow-hidden">
      {step === 1 && (
        <motion.div className="max-w-2xl w-full bg-[#011c4f] p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-8">Course Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Preferred Course <span className="text-red-500">*</span></label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white"
              >
                <option value="">Select Course</option>
                {Object.keys(coursePricing).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Mode <span className="text-red-500">*</span></label>
              <div className="flex gap-6 mt-2">
                {["Online", "Offline", "Hybrid"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input type="radio" name="mode" value={option} checked={mode === option} onChange={(e) => setMode(e.target.value)} />
                    {option}
                  </label>
                ))}
              </div>
              {errors.mode && <p className="text-red-500 text-sm">{errors.mode}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Batch <span className="text-red-500">*</span></label>
              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white"
              >
                <option value="">Select Batch</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Weekend">Weekend</option>
              </select>
              {errors.batch && <p className="text-red-500 text-sm">{errors.batch}</p>}
            </div>

            <motion.button type="submit" className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
              Continue to Payment
            </motion.button>
          </form>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div className="max-w-2xl w-full bg-[#011c4f] p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">Course Payment</h2>

          <div className="mb-6 space-y-1">
            <p><span className="text-yellow-400 font-semibold">Student:</span> {studentInfo?.name}</p>
            <p><span className="text-yellow-400 font-semibold">Email:</span> {studentInfo?.email}</p>
            <p><span className="text-yellow-400 font-semibold">Course:</span> {course}</p>
            <p><span className="text-yellow-400 font-semibold">Mode:</span> {mode}</p>
            <p><span className="text-yellow-400 font-semibold">Batch:</span> {batch}</p>
          </div>

          <h3 className="text-xl font-medium mb-3">Select Payment Option</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {getPaymentOptions().map(({ label, price }) => (
              <label
                key={label}
                className={`border p-3 rounded-md text-center cursor-pointer ${paymentOption === label ? "bg-yellow-500 text-black font-semibold" : "bg-[#000617] border-gray-600"
                  }`}
                onClick={() => setPaymentOption(label)}
              >
                <p>{label}</p>
                <p className="text-sm text-yellow-400">{price}</p>
              </label>
            ))}
          </div>

          {/* 🆕 Custom amount input */}
          {paymentOption === "Other" && (
            <div className="mt-4">
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter custom amount (₹)"
                className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white"
              />
              <p className="text-xs text-gray-400 mt-1">Min ₹500 — Max ₹5000</p>
            </div>
          )}

          <div className="flex items-center gap-2 mt-6">
            <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
            <label className="text-sm">
              I agree to the{" "}
              <Link href="/paymenttermconditions" target="_blank" className="text-yellow-400 underline">
                Terms & Conditions
              </Link>
            </label>
          </div>
          {termsError && <p className="text-red-500 text-sm">{termsError}</p>}

          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(1)} className="w-1/2 py-3 bg-gray-600 rounded-lg">Back</button>
            <button onClick={handlePaymentContinue} className="w-1/2 py-3 bg-yellow-500 text-black font-semibold rounded-lg">
              Continue
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
