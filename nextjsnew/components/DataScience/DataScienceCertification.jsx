"use client";
import { motion } from "framer-motion";

export default function DataScienceCertification() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-[#000617] to-[#011c4f] text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certification
        </motion.h2>
        <motion.p
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          After successful completion, you’ll receive an{" "}
          <span className="font-bold">
            Data Science & Analytics with Python Certification{" "}
          </span>
          from{" "}
          <span className="font-bold">Nuhvin Global Services Pvt. Ltd.</span> — recognized by startups and IT organizations for career opportunities.
        </motion.p>
        <motion.button
          className="mt-4 px-6 py-3 rounded-lg bg-lime-500 text-[#062522] font-semibold hover:bg-lime-400 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Enroll Now
        </motion.button>
      </motion.div>
    </section>
  );
}
