"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function CourseLearningSection() {
  const courseDetails = [
    // Artificial Intelligence, Data & Automation
    {
      number: "01",
      title: "Artificial Intelligence & Machine Learning with Python",
      subtitle: "6 Months | Online / Offline | ₹35,000–₹45,000",
      desc: "Learn machine learning algorithms, data processing, and model deployment using Python for real-world AI solutions.",
      link: "/services",
    },
    {
      number: "02",
      title: "Data Science & Analytics with Python",
      subtitle: "6 Months | Online / Offline | ₹35,000–₹50,000",
      desc: "Master data analytics, visualization, and predictive modeling techniques using Python, NumPy, and Pandas.",
      link: "/services",
    },
    {
      number: "03",
      title: "Python for Development & Automation",
      subtitle: "4 Months | Online / Offline | ₹25,000–₹35,000",
      desc: "Gain hands-on experience in Python programming for software automation, scripting, and task optimization.",
      link: "/services",
    },

    // Web Development
    {
      number: "04",
      title: "Full Stack Web Development (MERN / MEAN)",
      subtitle: "6 Months | Online / Offline | ₹35,000–₹50,000",
      desc: "Build dynamic web apps using MongoDB, Express, React/Angular, and Node.js from front-end to back-end.",
      link: "/services",
    },
    {
      number: "05",
      title: "Full Stack Java Development (Spring Boot + React / Angular)",
      subtitle: "6 Months | Online / Offline | ₹35,000–₹50,000",
      desc: "Develop scalable enterprise-level web applications using Java, Spring Boot, and modern JavaScript frameworks.",
      link: "/services",
    },
    {
      number: "06",
      title: "Full Stack Python Development (Django / Flask + React)",
      subtitle: "6 Months | Online / Offline | ₹35,000–₹50,000",
      desc: "Create full-stack Python-based web applications combining Django or Flask with modern front-end frameworks.",
      link: "/services",
    },
    {
      number: "07",
      title: "Frontend Development (HTML, CSS, JavaScript, React)",
      subtitle: "3–4 Months | Online / Offline | ₹25,000–₹30,000",
      desc: "Learn to build beautiful, responsive, and interactive user interfaces using modern front-end technologies.",
      link: "/services",
    },
    {
      number: "08",
      title: "Backend Development (Node.js, Express, MongoDB, MySQL)",
      subtitle: "3–4 Months | Online / Offline | ₹25,000–₹30,000",
      desc: "Understand server-side logic, APIs, and databases to develop powerful backend systems.",
      link: "/services",
    },

    // Mobile App Development
    {
      number: "09",
      title: "Flutter App Development",
      subtitle: "5 Months | Online / Offline | ₹30,000–₹45,000",
      desc: "Build cross-platform mobile apps with Flutter and Dart for Android and iOS devices.",
      link: "/services",
    },
    {
      number: "10",
      title: "React Native App Development",
      subtitle: "5 Months | Online / Offline | ₹30,000–₹45,000",
      desc: "Create native mobile apps using React Native, combining JavaScript and native components.",
      link: "/services",
    },
    {
      number: "11",
      title: "Swift App Development (iOS)",
      subtitle: "5 Months | Online / Offline | ₹35,000–₹50,000",
      desc: "Learn iOS app development using Swift and Xcode for Apple devices.",
      link: "/services",
    },
    {
      number: "12",
      title: "Kotlin App Development (Android)",
      subtitle: "5 Months | Online / Offline | ₹35,000–₹50,000",
      desc: "Develop Android applications using Kotlin and Android Studio with hands-on real projects.",
      link: "/services",
    },

    // Cloud, DevOps & Infrastructure
    {
      number: "13",
      title: "DevOps Engineer Program",
      subtitle: "6 Months | Online / Offline | ₹40,000–₹55,000",
      desc: "Master DevOps practices, CI/CD pipelines, automation tools, and infrastructure management.",
      link: "/services",
    },
    {
      number: "14",
      title: "Cloud Computing Fundamentals",
      subtitle: "3 Months | Online / Offline | ₹25,000–₹30,000",
      desc: "Get started with cloud platforms, virtualization, and cloud-based architecture.",
      link: "/services",
    },
    {
      number: "15",
      title: "Docker, Kubernetes & CI/CD Tools",
      subtitle: "3–4 Months | Online / Offline | ₹30,000–₹35,000",
      desc: "Learn containerization, orchestration, and continuous integration workflows.",
      link: "/services",
    },

    // Software Testing & QA
    {
      number: "16",
      title: "Manual & Automation Testing",
      subtitle: "4 Months | Online / Offline | ₹25,000–₹30,000",
      desc: "Understand the fundamentals of software testing, automation tools, and QA practices.",
      link: "/services",
    },
    {
      number: "17",
      title: "Selenium & API Testing (Advanced QA)",
      subtitle: "4 Months | Online / Offline | ₹30,000–₹35,000",
      desc: "Advance your testing skills with Selenium WebDriver, REST API testing, and frameworks.",
      link: "/services",
    },

    // Design & Creative Technologies
    {
      number: "18",
      title: "UI/UX Design Fundamentals (Figma & Adobe XD)",
      subtitle: "3 Months | Online / Offline | ₹20,000–₹25,000",
      desc: "Learn user experience design, prototyping, and interface design using Figma and Adobe XD.",
      link: "/services",
    },
    {
      number: "19",
      title: "Graphic Design (Photoshop, Illustrator, Canva Pro)",
      subtitle: "3 Months | Online / Offline | ₹15,000–₹20,000",
      desc: "Develop graphic design skills and create professional visual content using top design tools.",
      link: "/services",
    },

    // Internship & Corporate Programs
    {
      number: "20",
      title: "Real-Time Project Internship (Web/App/AI)",
      subtitle: "1–2 Months | Offline / Hybrid | ₹10,000–₹15,000",
      desc: "Work on real industry projects with mentorship to gain hands-on experience.",
      link: "/services",
    },
    {
      number: "21",
      title: "Corporate Upskilling (Custom Modules)",
      subtitle: "Flexible | Corporate Mode | As per Requirement",
      desc: "Tailored corporate training programs designed to enhance workforce technical capabilities.",
      link: "/services",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 sm:px-10 lg:px-24">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Available Courses & Programs
        </motion.h2>

        {/* Course List */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {courseDetails.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b border-gray-700 pb-6"
            >
              {/* Left Section */}
              <div className="sm:w-1/2 mb-4 sm:mb-0">
                <div className="flex items-start gap-4">
                  <motion.p
                    className="text-yellow-400 font-semibold text-xl sm:text-2xl"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.number}
                  </motion.p>

                  <div>
                    <Link
                      href={item.link}
                      className="group flex items-center gap-2 text-lg sm:text-xl font-semibold text-white hover:text-yellow-400 transition-colors"
                    >
                      {item.title}
                      <IoIosArrowForward className="transition-transform group-hover:translate-x-1 group-hover:text-yellow-400" />
                    </Link>
                    <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="sm:w-1/2 text-gray-400 text-sm leading-relaxed flex flex-col">
                <p>{item.desc}</p>
                <Link href="/courseform">
                  <button className="mt-4 self-start px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
