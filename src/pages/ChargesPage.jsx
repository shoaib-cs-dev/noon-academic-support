import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaFileAlt, FaLayerGroup } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ChargesPage = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-500 to-teal-400 mb-6 drop-shadow-sm"
        >
          💰 Pricing Made Simple
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Our rates depend on your project. We offer two flexible options:
        </motion.p>

        {/* Pricing Options */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left"
        >
          {[
            {
              title: "Per Assignment",
              icon: <FaFileAlt className="text-3xl text-green-600" />,
            },
            {
              title: "Full Semester Packages",
              icon: <FaLayerGroup className="text-3xl text-green-600" />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="pt-1">{item.icon}</div>
              <div className="text-lg font-semibold text-gray-800">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <p className="text-xl text-gray-800 font-medium mb-5">
            DM us now to get a quick quote!
          </p>
          <a
            href="https://wa.me/+447465698201"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Click to Discuss Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ChargesPage;
