// components/SkillHero.jsx
"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SkillHero() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  return (
    <>
      {/* Header / Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-transparent"
      >
        <nav className="w-full bg-gradient-to-r from-[#141B4D] to-[#1F2A6B] sm:px-12 rounded-full flex justify-between shadow-lg backdrop-blur-md border border-white/10 items-center max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="text-white font-bold text-2xl flex items-center gap-2">
            <div className="w-8 h-1 bg-yellow-500 rounded"></div>
            Edum
          </div>
          <ul className="hidden md:flex gap-6 text-white font-medium">
            {["Home", "Services", "Testimonial", "Instructors", "FAQs"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: "#FACC15" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
          >
            Enroll Now
          </motion.button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bg1.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 z-20">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-sm md:text-base mb-2 tracking-[0.2em]"
          >
            AI ON THE JOB
          </motion.h2>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Boost Your Skills And Get Ahead
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {[
              "Industry connected",
              "Supported Community",
              "Real world skills",
            ].map((label) => (
              <motion.button
                key={label}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#FACC15",
                  color: "#000",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md transition-all"
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
