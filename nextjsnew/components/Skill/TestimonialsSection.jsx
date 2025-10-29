"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "David",
      age: 32,
      role: "Software Developer",
      image: "/p1.jpg",
      text: "I always knew AI was the future, but I didn’t know where to start. This course gave me the practical skills and knowledge I needed to transition from web development to AI development. I landed my dream job at a top tech company, and I’m using AI to solve real-world problems every day.",
    },
    {
      id: 2,
      name: "David",
      age: 32,
      role: "Software Developer",
      image: "/p2.jpg",
      text: "The impact on my career has been incredible. My clients are blown away by the fresh, innovative designs I’m producing. I’m landing bigger projects, winning awards, and feeling more fulfilled than ever before. This course wasn’t just about learning AI, it was about unlocking my own creative potential.",
    },
    {
      id: 3,
      name: "Maria",
      age: 24,
      role: "Data Analyst",
      image: "/p3.jpg",
      text: "I was stuck in a data analysis rut, just crunching numbers without any real impact. This course showed me how AI can unlock the power of data. Now, I’m using AI to predict customer behavior, optimize business processes, and even identify fraud. My work is finally making a tangible difference, and it’s incredibly rewarding.",
    },
    {
      id: 4,
      name: "Sarah",
      age: 27,
      role: "Marketing Specialist",
      image: "/p4.jpg",
      text: "I love the experience! Before this course, AI was just a buzzword to me. Now, I’m using it to personalize customer experiences, analyze campaign data, and even generate creative content. My boss is blown away by my results, and I’m finally feeling challenged and fulfilled in my work.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] py-20 px-6 sm:px-10 lg:px-20">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12"
      >
        Listen to real people, real results
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            className="bg-[#111a3a] rounded-2xl p-6 text-left flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-[#1c2750]"
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#1e2a55]">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
            </div>

            {/* Text Content */}
            <div>
              {/* Stars Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center mb-3"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </motion.div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {item.text}
              </p>

              <p className="text-white text-sm font-semibold">
                {item.name}, {item.age}, {item.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
