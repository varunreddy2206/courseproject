"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger icons
import Link from "next/link";
import { useRouter } from "next/navigation"; // <-- Import useRouter

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize router

  // Function to handle clicking "Services"
  const handleServiceClick = () => {
    console.log("Services clicked"); // You can add custom logic here
  };

  const handleRegisterClick = () => {
    router.push("/registrationform"); // Navigate to the register page
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/services", onClick: handleServiceClick },
    { name: "Gallery", href: "/ourgallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent"
    >
      <nav className="w-full bg-gradient-to-r from-[#141B4D] to-[#1F2A6B] sm:px-12 rounded-full flex justify-between items-center shadow-lg backdrop-blur-md border border-white/10 max-w-7xl mx-auto px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="text-white font-bold text-2xl flex items-center gap-2">
          <div className="w-8 h-1 bg-yellow-500 rounded"></div>
          EDUMA
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1, color: "#FACC15" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer transition-colors"
            >
              {item.href ? (
                <Link href={item.href} onClick={item.onClick}>
                  {item.name}
                </Link>
              ) : (
                <span onClick={item.onClick}>{item.name}</span>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
          onClick={handleRegisterClick} // <-- Click handler
        >
          Register now
        </motion.button>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gradient-to-r from-[#141B4D] to-[#1F2A6B] text-white shadow-lg rounded-b-2xl border-t border-white/10 px-6 py-4 space-y-4"
        >
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="cursor-pointer hover:text-yellow-400 transition-colors"
            >
              {item.href ? (
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ) : (
                <span onClick={item.onClick}>{item.name}</span>
              )}
            </div>
          ))}

          {/* ✅ Mobile Register Now Button */}
          <button
            className="w-full bg-yellow-500 text-black py-2 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
            onClick={() => {
              setIsOpen(false);
              handleRegisterClick();
            }}
          >
            Register now
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
