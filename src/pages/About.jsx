import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SmartVideo from "../components/SmartVideo";

function About() {
  return (
    <div className=" bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center px-2 py-12 sm:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 leading-snug sm:leading-tight px-4 sm:px-0"
      >
        <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent block">
          <Typewriter
            words={["Watch this video to know us"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden bg-white"
      >
        <SmartVideo src="https://res.cloudinary.com/dsh1el8kp/video/upload/v1747196773/noon_vide0_2_cb5all.mp4" />
      </motion.div>
    </div>
  );
}

export default About;
