"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/Gallery/1.jpg",
  "/Gallery/2.jpg",
  "/Gallery/3.jpg",
  "/Gallery/4.jpg",
  "/Gallery/5.jpg",
  "/Gallery/1.jpg",
  "/Gallery/1.jpg",
  "/Gallery/1.jpg",
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function OurGallery() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#011c4f] to-[#000617] text-white overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-20">
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
          Explore moments that showcase creativity, technology, and innovation.
        </p>
      </div>

      {/* Image Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl group border-8 border-white"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Gallery Image ${i + 1}`}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       (max-width: 1024px) 50vw,
                       25vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
