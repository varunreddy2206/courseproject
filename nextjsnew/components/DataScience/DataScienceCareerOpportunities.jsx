"use client";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DataScienceCareerOpportunities() {
  const roles = [
    "Data Scientist",
    "Data Analyst",
    "Business Intelligence Analyst",
    "Machine Learning Engineer",
    "Data Engineer",
    "Research Analyst",
  ];

  const recruiters =
    "Top recruiters include MNC Companies, IT firms, startups, fintech companies, and research institutions.";

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-[#011c4f] to-[#000617] text-white">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Career Opportunities
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            After completing this course, you can apply for roles such as:
          </motion.p>

          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            {roles.map((role, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 cursor-pointer"
                whileHover={{ y: -4, color: "#A3FF00" }} // Slight lift & green text
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck className="text-lime-400 mt-1 shrink-0" />
                <span>{role}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {recruiters}
          </motion.p>
        </div>

        {/* Right Sidebar (Optional) */}
        <aside className="space-y-6 hidden lg:block">
          {/* You can add related courses, contact info, or image here */}
        </aside>
      </motion.div>
    </section>
  );
}
