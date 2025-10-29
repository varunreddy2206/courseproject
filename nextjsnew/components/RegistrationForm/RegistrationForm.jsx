"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThanksCard from "../ThanksCard/ThanksCard";

export default function RegistrationForm() {
  const router = useRouter();

  const courses = [
    "Artificial Intelligence & Machine Learning with Python",
    "Data Science & Analytics with Python",
    "Python for Development & Automation",
    "Full Stack Web Development (MERN / MEAN)",
    "Full Stack Java Development (Spring Boot + React / Angular)",
    "Full Stack Python Development (Django / Flask + React)",
    "Frontend Development (HTML, CSS, JavaScript, React)",
    "Backend Development (Node.js, Express, MongoDB / MySQL)",
    "Flutter App Development",
    "React Native App Development",
    "Swift App Development (iOS)",
    "Kotlin App Development (Android)",
    "DevOps Engineer Program",
    "Cloud Computing Fundamentals",
    "Docker, Kubernetes & CI/CD Tools",
    "Manual & Automation Testing",
    "Selenium & API Testing (Advanced QA)",
    "UI/UX Design Fundamentals (Figma & Adobe XD)",
    "Graphic Design (Photoshop, Illustrator, Canva Pro)",
    "Real-Time Project Internship (Web/App/AI)",
    "Corporate Upskilling (Custom Modules)",
  ];

  const courseImages = [
    "/Course/AI.jpg",
    "/Course/Cloud.jpg",
    "/Course/Devops.jpg",
    "/Course/Java.png",
    "/Course/Devops.jpg",
    "/Course/Python.jpg",
  ];

  // Refs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const courseRef = useRef(null);
  const cityRef = useRef(null);
  const pinRef = useRef(null);
  const termsRef = useRef(null);

  // State
  const [errors, setErrors] = useState({});
  const [showThanks, setShowThanks] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % courseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [courseImages.length]);

  // ✅ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!nameRef.current.value) newErrors.name = "Full name is required";
    if (!emailRef.current.value) newErrors.email = "Email is required";
    if (!contactRef.current.value) newErrors.contact = "Contact number is required";
    if (!courseRef.current.value) newErrors.course = "Please select a course";
    if (!cityRef.current.value) newErrors.city = "City is required";
    if (!pinRef.current.value) newErrors.pin = "Pin code is required";
    if (!termsRef.current.checked) newErrors.terms = "You must accept terms";

    setErrors(newErrors);

    // ✅ If no validation errors → send to Flask backend
    if (Object.keys(newErrors).length === 0) {
      const payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        contact: contactRef.current.value,
        course: courseRef.current.value,
        city: cityRef.current.value,
        pincode: pinRef.current.value,
      };

      fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then(() => {
          console.log("✅ Registration data sent to backend:", payload);

          // ✅ Save both course and student info locally
          localStorage.setItem("selectedCourse", payload.course);
          localStorage.setItem("studentInfo", JSON.stringify(payload));

          setShowThanks(true);
        })
        .catch((err) => console.error("❌ Error sending data:", err));
    }
  };

  // ✅ Handle next step after thank you
  const handleThanksClose = () => {
    setShowThanks(false);
    router.push("/courseform"); // Go to next step (course registration)
  };

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Enroll Now and Shape Your Future in Tech
      </motion.h2>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-7xl mx-auto">
        {/* Left Side (Image) */}
        <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-1/2 h-64 sm:h-80 md:h-[420px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
          <motion.div
            key={currentImage}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={courseImages[currentImage]}
              alt={`Course ${currentImage + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>

        {/* Right Side (Form) */}
        <motion.div
          className="w-full sm:w-[90%] md:w-[80%] lg:w-1/2 max-w-lg bg-[#011c4f] p-6 sm:p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Registration Form
          </motion.h2>

          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                ref={nameRef}
                type="text"
                className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white text-sm sm:text-base focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white text-sm sm:text-base focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Contact */}
            <div>
              <label className="block mb-1 font-medium">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                ref={contactRef}
                type="text"
                className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white text-sm sm:text-base focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your contact number"
              />
              {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
            </div>

            {/* Course */}
            <div>
              <label className="block mb-1 font-medium">
                Preferred Course <span className="text-red-500">*</span>
              </label>
              <select
                ref={courseRef}
                className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white text-sm sm:text-base focus:ring-2 focus:ring-yellow-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
            </div>

            {/* City + Pincode */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 font-medium">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  ref={cityRef}
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white text-sm sm:text-base focus:ring-2 focus:ring-yellow-500"
                  placeholder="City"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 font-medium">
                  Pin code <span className="text-red-500">*</span>
                </label>
                <input
                  ref={pinRef}
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white text-sm sm:text-base focus:ring-2 focus:ring-yellow-500"
                  placeholder="Pin code"
                />
                {errors.pin && <p className="text-red-500 text-sm mt-1">{errors.pin}</p>}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start sm:items-center gap-2">
              <input
                ref={termsRef}
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 sm:mt-0 text-yellow-500 bg-[#000617] border border-gray-600 rounded focus:ring-2 focus:ring-yellow-500"
              />
              <label
                htmlFor="terms"
                className="text-white font-medium flex flex-wrap items-center gap-1 text-sm sm:text-base"
              >
                <span>I agree to the</span>
                <Link
                  href="/termsconditions"
                  className="text-yellow-500 underline"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  Terms & Conditions
                </Link>
                <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 mt-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      {/* ✅ Show Thanks Card */}
      {showThanks && <ThanksCard onClose={handleThanksClose} />}
    </section>
  );
}
