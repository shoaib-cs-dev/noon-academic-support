import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  FaFileAlt,
  FaChartBar,
  FaTasks,
  FaChalkboardTeacher,
  FaLayerGroup,
  FaFlask,
  FaCode,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const services = [
  {
    name: "Assignments",
    icon: <FaFileAlt className="text-2xl text-blue-600" />,
  },
  { name: "Reports", icon: <FaChartBar className="text-2xl text-blue-600" /> },
  {
    name: "Case Studies",
    icon: <FaTasks className="text-2xl text-blue-600" />,
  },
  {
    name: "Presentations",
    icon: <FaChalkboardTeacher className="text-2xl text-blue-600" />,
  },
  {
    name: "Full Semester Support",
    icon: <FaLayerGroup className="text-2xl text-blue-600" />,
  },
  { name: "Lab Reports", icon: <FaFlask className="text-2xl text-blue-600" /> },
  {
    name: "Web & App Development",
    icon: <FaCode className="text-2xl text-blue-600" />,
  },
  {
    name: "Engineering Projects",
    icon: <FaCogs className="text-2xl text-blue-600" />,
  },
  {
    name: "Software-based Projects",
    icon: <FaLaptopCode className="text-2xl text-blue-600" />,
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          <FaTools className="text-3xl sm:text-4xl md:text-5xl text-cyan-500 drop-shadow" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-700 to-cyan-400 drop-shadow-sm">
            Services We Offer
          </h2>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          From a single assignment to your full semester — we’ve got you
          covered. If you’ve got something custom, just message us!
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 p-6 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <div className="text-gray-800 font-semibold text-lg leading-snug">
                {service.name}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-xl text-gray-800 font-semibold mb-4">
            Don’t see your task listed? Let’s talk!
          </p>
          <a
            href="https://wa.me/+447465698201"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Message Us Now <FaArrowRight className="text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
