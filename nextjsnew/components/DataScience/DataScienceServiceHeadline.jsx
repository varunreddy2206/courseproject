"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DataScienceServiceHeadline() {
  return (
    <>
      {/* 🔹 Service Headline Section */}
      <section className="bg-gradient-to-b from-[#011c4f] to-[#000617] py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <motion.p
            className="uppercase tracking-wide text-gray-400 font-medium flex items-center gap-2 mb-4 text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block w-3 h-3 bg-[#a7ff83] rounded-full"></span>
            Service Details
          </motion.p>

          {/* Heading (Left) + Paragraph (Right) */}
          <motion.div
            className="flex flex-col md:flex-row md:items-start md:gap-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Course Overview <br /> For Better Learning
            </motion.h1>

            <motion.p
              className="text-gray-300 md:w-1/2 mt-4 sm:mt-6 md:mt-0 text-sm sm:text-base"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Gain hands-on experience with real-world projects and expert mentoring.
              Master key skills to become job-ready in Artificial Intelligence, Machine Learning, and Python development.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
