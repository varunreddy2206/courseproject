"use client";

import { Check } from "lucide-react";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ExpectationsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 sm:px-10 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold mb-12"
        >
          What to expect from this course
        </motion.h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Understanding about AI",
              points: [
                "Understand core concepts like machine learning, deep learning, and algorithms in a clear and practical way.",
                "Speak confidently about AI topics with colleagues, friends, and even potential employers.",
              ],
            },
            {
              title: "Take advantage of AI",
              points: [
                "Apply your newly acquired knowledge by creating a simple project like an image classifier or a chatbot.",
                "Identify real-world challenges in your field and explore how AI can be used to address them.",
                "Learn industry-recognized skills to list on your resume and shine out in job applications.",
              ],
            },
            {
              title: "Make more, work less",
              points: [
                "Learn how to use popular AI frameworks and tools like TensorFlow or PyTorch to build more complex projects.",
                "Use AI to automate repetitive tasks and free up valuable time for more strategic work.",
                "Apply AI to enhance your current projects, from marketing to logistics.",
                "Open doors to exciting new positions in the booming AI field.",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#141B4D] rounded-xl p-8 text-left shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                {card.title}
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                {card.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 🔰 Animated Service Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="w-full md:w-[85%] bg-[#060c33] rounded-full flex items-center justify-center py-5 px-6 md:px-12 shadow-inner shadow-black/20">
            <motion.div
              className="flex items-center gap-4 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Animated Icon Circle */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
              >
                <IoArrowForward className="text-[#FFC107] text-xl" />
              </motion.div>

              {/* Text */}
              <motion.p
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-base text-white md:text-lg font-medium"
              >
                We Strive To Lead The Way In The Business{" "}
                <span className="font-semibold underline cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                  Know All Services
                </span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
