"use client";

export default function KotlinHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/kotlin.jpg')" }} // Update path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Kotlin App Development (Android)
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Become an Android Developer with Nuhvin Academy’s Kotlin App Development course. Learn to build modern, high-performance Android applications using Kotlin, Android Studio, Jetpack components, and real-world project-based learning.
        </p>
      </div>
    </div>
  );
}
