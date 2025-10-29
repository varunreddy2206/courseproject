"use client";

export default function ReactNativeHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/reactnative.jpg')" }} // Update path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          React Native App Development
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Learn React Native App Development with Nuhvin Academy and build cross-platform mobile apps for Android and iOS using JavaScript and React. Master components, navigation, APIs, and performance optimization for real-world mobile solutions.
        </p>
      </div>
    </div>
  );
}
