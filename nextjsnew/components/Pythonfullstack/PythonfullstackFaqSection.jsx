"use client";
import { useState, useRef, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function PythonfillstackFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

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

  // Animate max-height using refs for smooth expand/collapse
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (openIndex === i) {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = "1";
        el.style.marginTop = "0.75rem"; // mt-3
      } else {
        el.style.maxHeight = "0px";
        el.style.opacity = "0";
        el.style.marginTop = "0";
      }
    });
  }, [openIndex]);

  return (
    <section className="bg-gradient-to-b from-[#011c4f] to-[#000617] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 sm:py-5 lg:py-6"
          >
            <button
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
              className="flex justify-between items-center w-full text-left gap-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-snug">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FiMinus className="text-lime-400 text-xl sm:text-2xl" />
              ) : (
                <FiPlus className="text-lime-400 text-xl sm:text-2xl" />
              )}
            </button>

            <div
              id={`faq-content-${index}`}
              role="region"
              aria-labelledby={`faq-header-${index}`}
              ref={(el) => (contentRefs.current[index] = el)}
              className="transition-max-height duration-500 ease-in-out overflow-hidden text-gray-300 text-sm sm:text-base leading-relaxed"
              style={{ maxHeight: 0, opacity: 0, marginTop: 0 }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
