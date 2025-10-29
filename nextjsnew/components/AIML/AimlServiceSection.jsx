"use client";
import Image from "next/image";

export default function AimlServiceSection() {
  return (
    <>
      {/* 🔹 Service Headline Section */}
      <section className="bg-gradient-to-b from-[#011c4f] to-[#000617] py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <p className="uppercase tracking-wide text-gray-400 font-medium flex items-center gap-2 mb-4 text-sm sm:text-base">
            <span className="inline-block w-3 h-3 bg-[#a7ff83] rounded-full"></span>
            Service Details
          </p>

          {/* Heading (Left) + Paragraph (Right) */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug md:w-1/2">
              Course Overview <br /> For Better Learning
            </h1>

            <p className="text-gray-300 md:w-1/2 mt-4 sm:mt-6 md:mt-0 text-sm sm:text-base">
              Gain hands-on experience with real-world projects and expert mentoring.
              Master key skills to become job-ready in Artificial Intelligence, Machine Learning, and Python development.

            </p>
          </div>
        </div>
      </section>

    </>
  );
}
