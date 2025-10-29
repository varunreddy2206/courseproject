"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AIDangerQuoteSection() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-black">
      {/* ✅ Responsive Background Image with Smooth Animation */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src="/bg3.png"
            alt="AI Background"
            fill
            priority
            quality={100}
            className="object-cover object-center w-full h-full"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 100vw,
                   100vw"
          />
        </motion.div>

        {/* ✅ Dark Overlay for Contrast */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute inset-0 bg-black/60"
        ></motion.div>
      </div>

      {/* ✅ Content Centered Responsively */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-20 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug"
        >
          By far, the greatest danger of Artificial{" "}
          <br className="hidden sm:block" />
          Intelligence is that{" "}
          <span className="text-[#FFC107]">
            people conclude too early that they understand it.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-gray-300 mt-4 text-sm sm:text-base"
        >
          — Eliezer Yudkowsky
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#FFC107] hover:bg-[#e0a800] text-black font-medium text-sm sm:text-base px-6 py-3 rounded-md transition-all duration-300"
        >
          Start Learning
        </motion.button>
      </div>
    </section>
  );
}
