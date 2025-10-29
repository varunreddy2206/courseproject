"use client";

export default function SwiftHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/swift.jpg')" }} // Update path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Swift App Development (iOS)
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Master Swift App Development with Nuhvin Academy. Learn to design and build native iOS applications using Swift and Xcode, covering UI design, data handling, APIs, and Apple’s modern frameworks for professional mobile app development.
        </p>
      </div>
    </div>
  );
}
