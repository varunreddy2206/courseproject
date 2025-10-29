"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MentorShowcaseSection() {
  const mentors = [
    {
      name: "Mentor Thomas Winsley",
      role: "Director at AI Company, Founder of AI Community",
      image: "/m1.jpg",
      type: "image",
    },
    {
      name: "Mentor Kate Green",
      role: "Director at AI Company, Founder of AI Community",
      image: "/m2.jpg",
      type: "text",
      description:
        "Throughout my career, I’ve been at the forefront of shaping the future of technology, blending theoretical knowledge with practical insights. I am committed to making AI and machine learning accessible to learners at all levels, demystifying complex concepts in an engaging and collaborative learning environment.",
    },
    {
      name: "Mentor Thomas Winsley",
      role: "Director at AI Company, Founder of AI Community",
      image: "/m3.jpg",
      type: "image",
    },
  ];

  // Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Our excellent mentors
        </motion.h2>
      </div>

      {/* Mentor Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center"
      >
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
            className={`rounded-2xl overflow-hidden bg-[#0a1026] ${
              mentor.type === "text" ? "p-8" : ""
            } flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            {mentor.type === "image" ? (
              <>
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-semibold mt-2">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">{mentor.role}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left">
                    {mentor.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mt-4">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">{mentor.role}</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
