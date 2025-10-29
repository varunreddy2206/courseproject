"use client";

export default function DevOpsHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/devops.jpg')" }} // Update image path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          DevOps Engineer Program
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Accelerate your IT career with Nuhvin Academy’s DevOps Engineer Program. Master tools like Git, Docker, Kubernetes, Jenkins, Terraform, and AWS to automate, deploy, and manage scalable applications efficiently.
        </p>
      </div>
    </div>
  );
}
