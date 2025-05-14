import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { faqs } from "../data/faqs.jsx";
import { FaQuestionCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-2 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-6 px-4 sm:px-0 text-center"
        >
          <FaQuestionCircle className="text-2xl sm:text-3xl md:text-4xl text-cyan-500 drop-shadow" />
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-700 to-cyan-400 leading-snug drop-shadow-s">
            Freq. Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-semibold text-lg tracking-wide hover:bg-gray-50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="text-blue-500 text-xl" />
                  <span>{faq.question}</span>
                </div>
                {expandedIndex === index ? (
                  <FiChevronUp className="text-blue-600 text-2xl" />
                ) : (
                  <FiChevronDown className="text-blue-600 text-2xl" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {expandedIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-5 pb-5"
                  >
                    <div className="relative mt-3 bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 rounded-xl p-5 text-gray-700 shadow-lg overflow-hidden">
                      {/* Icon decoration (optional aesthetic flair) */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 rounded-tl-xl rounded-bl-xl"></div>

                      {/* Content */}
                      <div className="pl-3 text-base leading-relaxed">
                        {typeof faq.answer === "string" ? (
                          <p className="whitespace-pre-wrap">{faq.answer}</p>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
