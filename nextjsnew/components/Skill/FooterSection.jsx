"use client";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link"; // ✅ Added Link import

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0B1537] to-[#010B2A] flex flex-col justify-center items-center py-20 text-white">
      <div className="bg-[#0E1A3A] bg-opacity-90 rounded-3xl shadow-2xl max-w-6xl w-full mx-4 px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 relative border border-blue-900/30">
        
        {/* Head Office */}
        <div>
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={160}
              height={70}
              className="mb-2"
            />
          </div>
          <h2 className="text-xl font-bold text-white mb-5 border-b border-blue-700 pb-2 inline-block">
            Head Office
          </h2>
          <p className="text-base text-gray-300 mb-3 leading-relaxed">
            2972 Westheimer Rd. Santa Ana,<br />
            Illinois 85486
          </p>
          <div className="mb-2">
            <span className="inline-block px-5 py-2 bg-[#13224E] rounded-xl text-white text-lg font-medium shadow-md shadow-blue-900/40">
              + (123) 456–7890
            </span>
          </div>
          <div>
            <span className="inline-block px-5 py-2 bg-[#13224E] rounded-xl text-gray-200 text-base font-normal shadow-md shadow-blue-900/40">
              Yourcompany@example.com
            </span>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-5 border-b border-blue-700 pb-2 inline-block">
            Quick Links
          </h2>
          <nav className="flex flex-col gap-2 text-gray-300 text-base">
            {/* ✅ Added real Next.js Links */}
            <Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link>
            <Link href="/services" className="hover:text-blue-400 transition duration-300">Courses</Link>
            <Link href="/ourgallery" className="hover:text-blue-400 transition duration-300">Gallery</Link>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact Us</Link>
            <Link href="/termsconditions" className="hover:text-blue-400 transition duration-300">Terms & Conditions</Link>
            <Link href="/termsconditions" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
          </nav>
        </div>

        {/* Our Solutions */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-5 border-b border-blue-700 pb-2 inline-block">
              Our Solutions
            </h2>
            <nav className="flex flex-col gap-2 text-gray-300 text-base">
              <Link href="/solutions/business" className="hover:text-blue-400 transition duration-300">Business Consulting</Link>
              <Link href="/solutions/invest" className="hover:text-blue-400 transition duration-300">Invest Process</Link>
              <Link href="/solutions/it-services" className="hover:text-blue-400 transition duration-300">IT Services</Link>
              <Link href="/solutions/online-training" className="hover:text-blue-400 transition duration-300">Online Training</Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-10 md:mt-0 justify-end">
            {[IoClose, FaFacebookF, FaPinterestP, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 rounded-full bg-[#142550] flex items-center justify-center text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110 shadow-md shadow-blue-900/50"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Rights Reserved */}
      <div className="mt-8 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
