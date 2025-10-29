"use client";

export default function CloudHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/cloud-computing.jpg')" }} // Update image path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Cloud Computing Fundamentals
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Gain a solid foundation in Cloud Computing with Nuhvin Academy. Learn core concepts of cloud infrastructure, virtualization, deployment models, and essential platforms like AWS, Azure, and Google Cloud.
        </p>
      </div>
    </div>
  );
}
