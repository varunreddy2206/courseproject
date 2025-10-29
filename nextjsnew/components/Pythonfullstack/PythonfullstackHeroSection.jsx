// components/HeroSection.js
"use client";

export default function PythonfullstackHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/')" }} // Update path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
           Full Stack Python Development (Django / Flask + React)
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Become a Full Stack Python Developer with Nuhvin Academy. Learn backend frameworks like Django and Flask, build RESTful APIs, and create interactive frontends using React to deliver complete, production-ready web applications.
        </p>
      </div>
    </div>
  );
}
