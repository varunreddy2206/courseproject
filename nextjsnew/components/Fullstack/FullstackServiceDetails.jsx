"use client";
import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FullstackServiceDetails() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleDesc = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const topics = [
    { num: "01", title: "Introduction to Full Stack Development", desc: "Understanding frontend & backend, MERN vs MEAN, career scope." },
    { num: "02", title: "HTML, CSS & JavaScript", desc: "Core frontend concepts, responsive design, DOM manipulation." },
    { num: "03", title: "Advanced JavaScript & TypeScript", desc: "ES6+, async programming, TypeScript for Angular." },
    { num: "04", title: "Frontend Frameworks", desc: "React.js (MERN) or Angular (MEAN), component-based architecture." },
    { num: "05", title: "Backend Development", desc: "Node.js, Express.js, REST APIs, server-side programming." },
    { num: "06", title: "Database Management", desc: "MongoDB CRUD operations, schema design, backend integration." },
    { num: "07", title: "Authentication & Security", desc: "JWT, OAuth, secure login systems, session handling." },
    { num: "08", title: "Full Stack Project Development", desc: "Building real-world apps, debugging, testing, deployment." },
    { num: "09", title: "Deployment & Cloud", desc: "Hosting applications on AWS, Heroku, Netlify, Docker basics." },
    { num: "10", title: "Career & Internship Guidance", desc: "Resume building, portfolio preparation, interview training." },

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
              Nuhvin Global Services Pvt. Ltd. presents an industry-oriented Full Stack Web Development (MERN / MEAN) course, designed to make you a professional, job-ready web developer.
              Our training emphasizes hands-on learning with real-time projects, live coding sessions, and mentorship from experienced developers. You’ll master MongoDB, Express.js, React.js, Angular, Node.js, and other modern tools to build scalable and responsive web applications.
              With our course, you’ll gain the skills required to develop dynamic websites, web apps, and enterprise solutions while preparing for a career in software development.

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
              Why Choose Nuhvin for Full Stack Web Development Training?
            </h2>
            <ul className="space-y-4 text-sm sm:text-base">
              {[
                "Industry-Driven Curriculum: Learn the latest MERN and MEAN technologies.",
                "Hands-on Learning: 80% coding practice, projects, and live assignments.",
                "Expert Trainers: Mentors with industry experience and full-stack expertise.",
                "Real-World Projects: Develop e-commerce apps, dashboards, social media platforms, and portfolio projects.",
                "Certification: Receive an industry-recognized certificate from Nuhvin Global Services Pvt. Ltd.",
                "Internship Guidance: Dedicated support for live internship opportunities.",
                "Placement Support: Resume building, interview preparation, and job referrals.",
                "Exclusive Enrollment: Only 100 candidates per year for high-quality, focused training."
              ]
                .map((item, i) => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-lg font-bold mb-6 relative pb-2 border-b border-gray-700">
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
                  className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-lime-400 transition"
                >
                  <span>{item}</span>
                  <IoIosArrowForward />
                </li>
              ))}
            </ul>
          </motion.div>
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
