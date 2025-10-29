"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function DataScienceFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. Do you offer marketing contracts or relationships?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      question: "2. What kind of marketing efforts do you specialize ?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      question: "3. Can I use the demos made by Ewebot?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      question: "4. What everybody ought to know about digital marketing?",
      answer:
        "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#011c4f] to-[#000617] py-10 sm:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-gray-700 py-4 sm:py-5 lg:py-6"
          >
            <button
              className="flex justify-between items-center w-full text-left gap-4"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-snug">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FiMinus className="text-lime-400 text-xl sm:text-2xl transition-transform duration-300" />
              ) : (
                <FiPlus className="text-lime-400 text-xl sm:text-2xl transition-transform duration-300" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base leading-relaxed overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
