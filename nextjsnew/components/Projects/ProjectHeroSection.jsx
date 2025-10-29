"use client";

export default function ProjectpHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/real-time-internship.jpg')" }} // Update image path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Real-Time Project Internship (Web / App / AI)
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Gain hands-on experience with Nuhvin Academy’s Real-Time Internship Program. Work on live Web, Mobile App, and AI projects under expert guidance to build your portfolio and industry-ready skills.
        </p>
      </div>
    </div>
  );
}
