"use client";
import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DataScienceServiceDetails() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleDesc = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const topics = [
    { num: "01", title: "Introduction to Data Science", desc: "Understanding data, analytics lifecycle, and business applications." },
    { num: "02", title: "Python for Data Analysis", desc: "Python basics, libraries (NumPy, Pandas, Matplotlib, Seaborn), and data preprocessing." },
    { num: "03", title: "Statistics & Probability", desc: "Descriptive & inferential statistics, hypothesis testing, data distribution." },
    { num: "04", title: "Data Visualization", desc: "Data storytelling, dashboards using Power BI and Tableau." },
    { num: "05", title: "Machine Learning", desc: "Supervised & unsupervised learning, model evaluation, and predictive analytics." },
    { num: "06", title: "Data Wrangling & Cleaning", desc: "Handling missing data, data transformation, and normalization." },
    { num: "07", title: "SQL & Databases", desc: "Working with relational data, queries, and data integration." },
    { num: "08", title: "Big Data & Cloud Analytics (Intro)", desc: "Basics of Spark, AWS, and data pipelines." },
    { num: "09", title: "Capstone Project", desc: "End-to-end project using real datasets with mentor evaluation." },
    { num: "10", title: "Career Guidance & Internship", desc: "Resume building, LinkedIn optimization, and mock interviews." },
  ];

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] py-12 px-4 sm:px-6 lg:px-20 text-white min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

        {/* Left Content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              At Nuhvin Global Services Pvt. Ltd., we offer an exclusive Data Science & Analytics with Python training program designed for serious learners who aim to master the art of data-driven decision-making.
              This course combines the power of Python programming, data analytics, and machine learning to help you turn raw data into actionable insights.
              With a limit of only 100 candidates per year, we ensure personalized mentorship, real-time project exposure, and direct guidance from our expert trainers.
              Join the next generation of data professionals and become career-ready for roles in AI, Business Intelligence, and Analytics.
            </p>
          </motion.div>

          {/* What You'll Learn */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">What You’ll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {topics.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#081a3b] p-5 rounded-xl border border-gray-700 hover:border-lime-400 transition-shadow duration-300 shadow-sm"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleDesc(i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`desc-${i}`}
                    id={`topic-${i}`}
                  >
                    <div>
                      <h3 className="text-lime-400 text-xl sm:text-2xl font-bold">{item.num}</h3>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>
                    <IoIosArrowForward
                      className={`text-lime-400 text-2xl transform transition-transform duration-300 ${openIndex === i ? "rotate-90" : ""}`}
                    />
                  </div>
                  <motion.div
                    id={`desc-${i}`}
                    role="region"
                    aria-labelledby={`topic-${i}`}
                    ref={(el) => (contentRefs.current[i] = el)}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden text-gray-300 text-sm sm:text-base mt-3 border-t border-gray-700 pt-3"
                  >
                    <p>{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Nuhvin */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              Why Choose Nuhvin for Data Science Training?
            </h2>
            <ul className="space-y-4 text-sm sm:text-base">
              {[
                "Industry-Standard Curriculum: Covers all key areas — Python, ML, Data Visualization, SQL, and Cloud Analytics.",
                "Hands-On Projects: Real datasets from industries like finance, healthcare, and marketing.",
                "Expert Trainers: Learn from professional data scientists and analytics engineers.",
                "Internship Opportunities: Option to work on live projects under Nuhvin and Pinkmoon Technologies Pvt. Ltd.",
                "Recognized Certification: Industry-recognized certificate from Nuhvin Global Services Pvt. Ltd.",
                "Career & Placement Support: Resume, portfolio, and interview preparation for top IT companies.",
                "Flexible Learning Options: Online, offline, and hybrid batches available.",
                "Exclusive Enrollment: Only 100 candidates per year for high-quality, focused training.",
                "Affordable Fee: Easy installment plans and student discounts."
              ].map((item, i) => {
                const [title, ...desc] = item.split(":");
                return (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-300 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -4, color: "#A3FF00" }} // Lift and green on hover
                  >
                    <FaCheck className="text-lime-400 mt-1 shrink-0" />
                    <span>
                      <span className="font-bold">{title}:</span> {desc.join(":").trim()}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

        </div>

        {/* Right Sidebar */}
        <motion.aside
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Batch Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-bold mb-6 relative pb-2 border-b border-gray-700">
              Batch Details
              <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-lime-500"></span>
            </h3>
            <ul className="space-y-4 mb-6 text-sm sm:text-base">
              {[
                "Next Batch: November 2025",
                "Total Seats: 100 (Strictly Limited)",
                "Duration: 6 Months/Fast-track",
                "Mode: Online / Offline / Hybrid",
                "Location: Hyderabad, Kakinada",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 cursor-pointer transform transition-all duration-300 hover:text-lime-400 hover:translate-x-2"
                >
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>

          {/* More Services */}
          <div className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm transition-transform hover:scale-105 hover:shadow-lg duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-6 relative pb-2 border-b border-gray-700">
              More Services
              <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-lime-500"></span>
            </h3>
            <ul className="space-y-4 mb-6 text-sm sm:text-base">
              {[
                "Web Development",
                "UI/UX Design",
                "Digital Marketing",
                "Product Design",
                "Branding & Illustration",
                "Mobile Solutions",
                "App Development",
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex justify-between items-center cursor-pointer transition hover:text-lime-400 hover:scale-105 duration-300`}
                >
                  <span>{item}</span>
                  <IoIosArrowForward />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-lg font-bold mb-6 relative pb-2 border-b border-gray-700">
              Contact With Us
              <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-lime-500"></span>
            </h3>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>New South Head Rd, Double Bay</p>
              <p>2028, New York</p>
              <p>contact@fufo.com</p>
              <p className="font-semibold">+1300 877 503</p>
            </div>
          </motion.div>

          {/* Send Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-lg font-bold mb-6 relative pb-2 border-b border-gray-700">
              Send Message
              <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-lime-500"></span>
            </h3>
            <form className="space-y-4 text-sm sm:text-base">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-400" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-400" />
              <textarea placeholder="Write a Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-400"></textarea>
              <button type="submit" className="w-full py-3 rounded-lg bg-lime-500 text-[#062522] font-semibold hover:bg-lime-400 transition">Send Message</button>
            </form>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
