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
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src="/bg1.jpg"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12 z-20">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-xs sm:text-sm md:text-base mb-2 tracking-[0.2em]"
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
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
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
            className="flex flex-wrap gap-3 sm:gap-4 justify-center"
          >
            {["Industry connected", "Supported Community", "Real world skills"].map(
              (label) => (
                <motion.button
                  key={label}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FACC15",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-800 text-white text-sm sm:text-base px-4 sm:px-5 py-2 rounded-lg shadow-md transition-all"
                >
                  {label}
                </motion.button>
              )
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
