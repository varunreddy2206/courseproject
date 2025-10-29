"use client";

export default function DockerHeroSection() {
  return (
    <div
      className="relative w-full h-[440px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-center"
      style={{ backgroundImage: "url('/devops-tools.jpg')" }} // Update image path if needed
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Docker, Kubernetes & CI/CD Tools
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mt-4">
          Master containerization and automation with Nuhvin Academy. Learn Docker, Kubernetes, Jenkins, Git, and CI/CD pipelines to deploy, manage, and scale applications efficiently in modern DevOps environments.
        </p>
      </div>
    </div>
  );
}
