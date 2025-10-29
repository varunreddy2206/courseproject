"use client";

export default function DockerCertification() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-[#000617] to-[#011c4f] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold animate-fadeInDown">
          Certification
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed animate-fadeInUp">
          After successful completion, you’ll receive an <span className="font-bold">Docker, Kubernetes & CI/CD Tools – Course Completion Certificate
            Internship Training Certificate

          </span> from <span className="font-bold">Nuhvin Global Services Pvt. Ltd.</span> — recognized by startups and IT organizations for career opportunities.
        </p>
        <button
          className="mt-4 px-6 py-3 rounded-lg bg-lime-500 text-[#062522] font-semibold hover:bg-lime-400 transition transform hover:scale-105 duration-300 ease-in-out"
          aria-label="Enroll Now for Certification"
        >
          Enroll Now
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}

