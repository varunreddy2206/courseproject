"use client";
import { useEffect, useState } from "react";

export default function DevopsServiceHeadline() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* 🔹 Service Headline Section */}
      <section className="bg-gradient-to-b from-[#011c4f] to-[#000617] py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <p
            className={`uppercase tracking-wide text-gray-400 font-medium flex items-center gap-2 mb-4 text-sm sm:text-base transition-opacity duration-1000 ease-in-out ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="inline-block w-3 h-3 bg-[#a7ff83] rounded-full animate-pulse"></span>
            Service Details
          </p>

          {/* Heading (Left) + Paragraph (Right) */}
          <div
            className={`flex flex-col md:flex-row md:items-start md:gap-10 transition-opacity duration-1000 ease-in-out delay-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug md:w-1/2 animate-fadeInLeft">
              Course Overview <br /> For Better Learning
            </h1>

            <p className="text-gray-300 md:w-1/2 mt-4 sm:mt-6 md:mt-0 text-sm sm:text-base animate-fadeInRight">
              Gain hands-on experience with real-world projects and expert mentoring.
              Master key skills to become job-ready in Artificial Intelligence, Machine Learning, and Python development.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fadeInLeft {
            animation: fadeInLeft 0.8s ease forwards;
          }
          .animate-fadeInRight {
            animation: fadeInRight 0.8s ease forwards;
          }
        `}</style>
      </section>
    </>
  );
}
