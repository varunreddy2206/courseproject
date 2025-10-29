"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InstructorBioSection() {
  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left: Instructor Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 flex justify-center w-full lg:w-1/3"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <Image
              src="/main.jpg"
              alt="Jose Callion"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="w-full lg:w-2/3 space-y-10"
        >
          {/* Header */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left text-2xl sm:text-3xl font-semibold"
          >
            Hello, I’m Jose Callion
          </motion.h2>

          {/* My Story */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">My Story</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              My story is one fueled by a deep passion for unraveling the mysteries of AI, leading me to contribute to groundbreaking research and advancements in the industry.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Throughout my career, I’ve been at the forefront of shaping the future of technology, blending theoretical knowledge with practical insights. I am committed to making AI and machine learning accessible to learners at all levels, demystifying complex concepts in an engaging and collaborative learning environment.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Beyond the classroom, I am a thought leader, continually pushing the boundaries of AI research. My dedication to ethical AI development and a forward-thinking approach sets the stage for you not only to understand the technology but also to contribute to its responsible and innovative growth.
            </p>
          </motion.div>

          {/* My Experience */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              My Experience
            </h3>
            <ul className="space-y-3 border-l border-gray-600 pl-6">
              {[
                "1998 — Machine Learning Researcher at XYZ Lab",
                "2005 — Founder Data Science Company",
                "2015 — Teaching at AI Center",
                "2020 — PhD on neural networks",
                "Now — Senior Director at ModernAI",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative text-gray-300 text-sm sm:text-base`}
                >
                  <span
                    className={`absolute -left-[9px] top-1.5 w-2 h-2 rounded-full ${
                      index === 4 ? "bg-yellow-400" : "bg-gray-400"
                    }`}
                  ></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Brands I worked with */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Brands I worked with
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              {["brand1", "brand2", "brand3", "brand4"].map((brand, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.5, duration: 0.6 }}
                >
                  <Image
                    src={`/images/${brand}.png`}
                    alt={brand}
                    width={100}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
