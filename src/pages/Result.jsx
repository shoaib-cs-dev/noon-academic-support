import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

const ResultsPage = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex justify-center items-center gap-3 mb-2">
            <FaAward className="text-3xl sm:text-4xl md:text-5xl text-cyan-500 drop-shadow" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 drop-shadow-sm">
              Our Students' Results
            </h2>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 tracking-tight leading-tight drop-shadow-sm">
            Proof of Performance
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Don’t just take our word for it — see the documented results, top
          grades, and expert feedback our students have received. Real outcomes,
          real proof.
        </motion.p>

        <motion.a
          href="https://drive.google.com/drive/folders/1Xn1MBLpG1vGtHty21nogKDXTJXGNrOeT?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          Click to View Results
          <FaArrowRight className="text-white" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <p className="text-xl font-medium text-gray-800 mb-4">
            Ready to start? Let’s discuss your project.
          </p>
          <a
            href="https://wa.me/your-number" // replace with actual number
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            Get Started with Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsPage;
