"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const features = [
    "Free",
    "Desktop & mobile",
    "Text style",
    "Color style",
    "100% editable",
    "More",
  ];

  return (
    <section className="relative w-full min-h-screen text-white flex flex-col lg:flex-row items-center justify-center py-16 px-6 lg:py-24 lg:px-16 overflow-hidden">
      {/* ✅ Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Herosection/bg.jpg"
          alt="Background"
          fill
          className="object-cover object-center scale-105 animate-slow-zoom"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-[#0a1447]/90 z-10"></div>
      </div>

      {/* ✅ Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 flex flex-col justify-center items-start max-w-xl w-full mb-12 lg:mb-0 z-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/Herosection/logo.jpg"
            width={200}
            height={80}
            alt="Eduma Logo"
            className="w-36 sm:w-44"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Landing Page For Online & Offline Course
        </motion.h1>

        {/* Badge */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center mb-8 gap-3"
        >
          <span className="bg-white text-[#f7b731] font-bold px-5 py-2 rounded-lg text-lg shadow-md">
            UI Kit
          </span>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {features.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{
                scale: 1.08,
                backgroundColor: "#f7b731",
                color: "#000",
                boxShadow: "0 0 20px rgba(247, 183, 49, 0.7)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 text-white font-medium px-4 py-2 rounded-md text-sm sm:text-base backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* ✅ Right Section (Images) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 relative flex justify-center items-center w-full max-w-3xl z-10"
      >
        {/* Laptop image with subtle float animation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-full"
        >
          <Image
            src="/Herosection/image.png"
            width={884}
            height={501}
            alt="Hero mockup"
            className="rounded-xl shadow-2xl object-cover w-full h-auto"
          />
        </motion.div>

        {/* Floating mobile overlay */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: [0, -10, 0],
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-0 sm:-top-10 right-0 sm:right-16 w-[80px] sm:w-[150px] h-[180px] sm:h-[320px] flex justify-center items-start max-w-full overflow-hidden"
        >
          <div className="relative w-full h-full">
            <Image
              src="/Herosection/image4.jpg"
              width={80}
              height={180}
              alt="Mobile UI"
              className="absolute left-1 sm:left-2 top-0 sm:top-3 w-[80px] sm:w-[139px] h-[180px] sm:h-[303px] rounded-2xl z-10 object-cover"
            />
            <Image
              src="/Herosection/image3.png"
              width={150}
              height={320}
              alt="Mobile Frame"
              className="absolute left-0 top-0 sm:top-0 w-full h-full pointer-events-none z-20"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ✅ Custom animation keyframes for slow background zoom */}
      <style jsx global>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
