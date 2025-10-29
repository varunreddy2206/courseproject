"use client";

import { Lightbulb, Cpu, Briefcase, Code } from "lucide-react"; // Icons from lucide-react
import { motion } from "framer-motion";

export default function CourseForYouSection() {
  const courses = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Newcomer",
      description:
        "No prior AI or technical knowledge required. Ideal for individuals who want to add AI skills to their resume and stay ahead of the curve in their field.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-yellow-400" />,
      title: "Tech-savvy",
      description:
        "The course will delve deeper into the concepts, offering a more challenging and rewarding learning experience. The course will provide practical skills and resources to experiment with AI tools and applications.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      title: "Businessman",
      description:
        "Focus on how AI can be applied to improve business processes, marketing, and decision-making. How AI can transform your organization and gain a competitive edge in the future.",
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: "Developer",
      description:
        "A great starting point to explore different AI specializations and gain a solid foundation, looking to harness the power of AI for your projects.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#000617] to-[#011c4f] py-20 px-6 sm:px-10 lg:px-20 text-center">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12"
      >
        This course is for you
      </motion.h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
        {courses.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111a3a] rounded-2xl p-6 text-left transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Button Animation */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FFC107] hover:bg-[#e0a800] text-black font-medium text-sm sm:text-base px-6 py-3 rounded-md transition-all duration-300"
      >
        Start Learning
      </motion.button>
    </section>
  );
}
