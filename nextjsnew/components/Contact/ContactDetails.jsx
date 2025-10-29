"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

export default function ContactDetails() {
  const [service, setService] = useState("");

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-gray-200 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-400 text-xl">▶</span>
            <span className="text-green-400 font-semibold">Our Contact</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            let's work together
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
            We denounce with righteous indignation and like men beguiled and
            demoralized by the charms.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#013466]/60 p-4 rounded-full">
                <FaPhoneAlt className="text-green-400 text-2xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call For Inquiry</p>
                <p className="font-bold text-lg text-white">
                  +000 (222) 000 00
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-[#013466]/60 p-4 rounded-full">
                <FaEnvelope className="text-green-400 text-2xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Send Us Email</p>
                <p className="font-bold text-lg text-white">
                  info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#00152e]/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-[#02355f]">
          <h3 className="text-2xl font-bold mb-2 text-white">
            Need Help For Project!
          </h3>
          <p className="text-gray-400 mb-6">
            We are ready to help your next projects, let’s work together
          </p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#001e44]/60 border border-[#02355f] rounded-md px-4 py-3 pl-10 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <FaUser className="absolute left-3 top-4 text-gray-400" />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#001e44]/60 border border-[#02355f] rounded-md px-4 py-3 pl-10 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              </div>
            </div>

            {/* Service Dropdown */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#001e44]/60 border border-[#02355f] rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-green-400"
            >
              <option value="" disabled hidden>
                Choose Our Service
              </option>
              <option className="bg-[#011c4f] text-white" value="web">
                Web Development
              </option>
              <option className="bg-[#011c4f] text-white" value="app">
                App Development
              </option>
              <option className="bg-[#011c4f] text-white" value="ai">
                AI & Automation
              </option>
            </select>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Write a Message"
              className="w-full bg-[#001e44]/60 border border-[#02355f] rounded-md px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-green-400"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:from-green-500 hover:to-green-400 transition duration-200"
            >
              Send Message
              <MdArrowForward className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
