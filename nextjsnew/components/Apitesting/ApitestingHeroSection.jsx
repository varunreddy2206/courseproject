"use client";

export default function ApitestingHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/selenium-api-testing.jpg')" }} // Update image path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Selenium & API Testing (Advanced QA)
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Advance your QA skills with Nuhvin Academy’s Selenium & API Testing course. Learn automated browser testing using Selenium WebDriver, and master REST API testing using Postman, RestAssured, and real-world frameworks.
        </p>
      </div>
    </div>
  );
}
