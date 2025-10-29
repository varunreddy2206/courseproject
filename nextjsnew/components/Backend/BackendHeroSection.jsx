"use client";

export default function BackendHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/backend.jpg')" }} // Update path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Backend Development (Node.js, Express, MongoDB / MySQL)
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Learn Backend Development with Nuhvin Academy and master server-side programming using Node.js and Express. Build secure REST APIs, work with databases like MongoDB and MySQL, and create scalable backend systems for real-world applications.
        </p>
      </div>
    </div>
  );
}
