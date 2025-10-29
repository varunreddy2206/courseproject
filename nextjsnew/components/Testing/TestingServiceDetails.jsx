"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export default function TestingServiceDetails() {
  const [openIndex, setOpenIndex] = useState(null);

  const topics = [
    { num: "01", title: "Introduction to Software Testing", desc: "SDLC & STLC overview, QA principles, types of testing." },
    { num: "02", title: "Manual Testing Concepts", desc: "Test cases, test plans, defect life cycle, test execution." },
    { num: "03", title: "Test Management Tools", desc: "Jira, Bugzilla, and TestLink usage." },
    { num: "04", title: "Automation Testing Fundamentals", desc: "Automation frameworks, advantages, and use cases." },
    { num: "05", title: "Selenium WebDriver", desc: "Locators, test scripts, cross-browser testing, and data-driven testing." },
    { num: "06", title: "TestNG & JUnit Frameworks", desc: "Annotations, reporting, assertions, and parallel execution." },
    { num: "07", title: "API Testing", desc: "REST API testing using Postman and automation with RestAssured." },
    { num: "08", title: "Continuous Integration (CI/CD)", desc: "Integrate automation with Jenkins and GitHub." },
    { num: "09", title: "Performance Testing Basics", desc: "Load testing with JMeter (optional advanced module)." },
    { num: "10", title: "Internship Project", desc: "Real-time testing project including manual + automation practices." }
  ];

  const toggleDesc = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] py-12 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Description */}
          <div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Nuhvin Global Services Pvt. Ltd. proudly presents its Manual & Automation Testing Course, designed to train aspiring QA engineers and software testers in both fundamental and advanced testing methodologies.
              This course covers the complete Software Testing Life Cycle (STLC) — from test planning and design to automation using industry tools like Selenium, TestNG, JUnit, Postman, and Jenkins. Learners will gain practical experience through live projects, bug reporting systems, and CI/CD integrations.
              With only 100 students enrolled per year, this program guarantees individual attention, personalized mentoring, and real-world exposure. Upon completion, students receive both a Course Completion Certificate and an Internship Training Certificate, validating their hands-on expertise in QA and automation.




            </p>
          </div>

          {/* What You’ll Learn */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What You’ll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {topics.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#081a3b] p-5 rounded-xl border border-gray-700 hover:border-lime-400 transition-shadow duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer transition-transform duration-300"
                    onClick={() => toggleDesc(i)}
                  >
                    <div>
                      <h3 className="text-lime-400 text-xl sm:text-2xl font-bold">{item.num}</h3>
                      <h4 className="font-semibold text-lg sm:text-xl">{item.title}</h4>
                    </div>
                    <IoIosArrowForward
                      className={`text-lime-400 text-2xl transition-transform duration-300 ${openIndex === i ? "rotate-90" : ""
                        }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 mt-0 opacity-0"
                      }`}
                  >
                    <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Nuhvin */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Why Choose Nuhvin for Manual & Automation Testing?
            </h2>
            <ul className="space-y-4 text-sm sm:text-base">
              {[
                "Comprehensive Curriculum: Learn Manual and Automation Testing with real-time scenarios.",
                "Hands-On Learning: Practice on live applications, bug tracking, and automation frameworks.",
                "Expert Trainers: Learn from certified QA professionals and Testing engineers.",
                "Certification: Receive both Course Completion and Internship Training Certificates from Nuhvin Global Services Pvt. Ltd.",
                "Real-Time Projects: Work on real-time projects, bug reporting systems, and CI/CD integrations.",
                "Placement Support: Resume building, interview preparation, and job mentoring.",
                "Limited Intake: Only 100 students per year to ensure focused attention.",
                "Flexible Learning Options: Available in online, offline, and hybrid formats."









              ].map((item, i) => {
                const [title, ...desc] = item.split(":");
                return (
                  <li key={i} className="flex items-start gap-3 text-gray-300 transition hover:scale-105 hover:text-lime-400 duration-300">
                    <FaCheck className="text-lime-400 mt-1 shrink-0" />
                    <span>
                      <span className="font-bold">{title}:</span> {desc.join(":").trim()}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-8">
          {/* Batch Details */}
          <div className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm transition-transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <h3 className="text-lg sm:text-xl font-bold mb-6 relative pb-2 border-b border-gray-700">
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
                  className={`flex justify-between items-center cursor-pointer transition hover:text-lime-400 hover:scale-105 duration-300`}
                >
                  <span>{item}</span>
                  {/* <IoIosArrowForward /> */}
                </li>
              ))}
            </ul>
          </div>

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
          <div className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm transition-transform hover:scale-105 hover:shadow-lg duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-6 relative pb-2 border-b border-gray-700">
              Contact With Us
              <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-lime-500"></span>
            </h3>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>New South Head Rd, Double Bay</p>
              <p>2028, New York</p>
              <p>contact@fufo.com</p>
              <p className="font-semibold">+1300 877 503</p>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="bg-gradient-to-b from-[#011c4f] to-[#000617] p-5 sm:p-6 rounded-xl shadow-sm transition-transform hover:scale-105 hover:shadow-lg duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-6 relative pb-2 border-b border-gray-700">
              Send Message
              <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-lime-500"></span>
            </h3>
            <form className="space-y-4 text-sm sm:text-base">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
              <textarea
                placeholder="Write a Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-lime-500 text-[#062522] font-semibold hover:bg-lime-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
