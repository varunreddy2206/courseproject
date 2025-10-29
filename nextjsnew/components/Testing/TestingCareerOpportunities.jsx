"use client";
import { FaCheck } from "react-icons/fa";

export default function TestingCareerOpportunities() {
  const roles = [
    "Manual Test Engineer",
    "Automation Test Engineer",
    "Quality Assurance Engineer",
    "Software Tester",
    "Selenium Engineer",
    "Test Analyst",
    "API Test Engineer",
    "QA Automation Developer",






  ];

  const recruiters =
    "Top recruiters include MNC Companies, IT firms, startups, fintech companies, and research institutions.";

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-[#011c4f] to-[#000617] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fadeInDown">
            Career Opportunities
          </h2>

          <p className="text-gray-300 mb-4 animate-fadeInUp">
            After completing this course, you can apply for roles such as:
          </p>

          <ul className="space-y-3 text-gray-300 text-sm sm:text-base animate-fadeInUp">
            {roles.map((role, i) => (
              <li
                key={i}
                className="flex items-start gap-3 transform transition duration-300 hover:translate-x-2 hover:text-lime-400 cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
              // Animate fade-in with slight delay for each item
              >
                <FaCheck className="text-lime-400 mt-1 shrink-0" />
                <span>{role}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-400 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
            {recruiters}
          </p>
        </div>

        {/* Right Sidebar (Optional) */}
        <aside className="space-y-6 hidden lg:block">
          {/* Optional content */}
        </aside>

      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
