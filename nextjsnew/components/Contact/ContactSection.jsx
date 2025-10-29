"use client";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services/bg.jpg" // ⬅️ replace with your image path (example: /services/bg.jpg)
          alt="Our Services Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* ✅ Dark Blue Transparent Overlay */}
        <div className="absolute inset-0 bg-[#001b38]/70 z-10"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative z-20 px-6 sm:px-10 md:px-16 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Get in Touch with With Us
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
         We’re here to answer your questions, discuss your needs, and explore opportunities to work together.{" "}
          <br className="hidden sm:block" />
          Reach out to us anytime — our team is ready to support you.
        </p>
      </div>
    </section>
  );
}
