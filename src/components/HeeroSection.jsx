// components/HeroSection.jsx
import { motion } from "framer-motion";
import mobileImage from "../images/mobileHome.jpg";
import { FaWhatsapp } from "react-icons/fa";

function HeroSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Purple Gradient Header */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="origin-top absolute top-0 left-0 w-full h-60 sm:h-72 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-b-[60px] sm:rounded-b-[100px] z-0"
      />

      {/* Headline in Purple Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto text-center px-4 py-8 sm:py-12"
      >
        <h1 className="text-xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md uppercase">
          Trusted Academic Help for International Students
          <br />
          Since 2018
        </h1>
      </motion.div>

      {/* Mobile View */}
      <div className="sm:hidden relative z-10 mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Animated Mobile Image */}
          <motion.div
            variants={scaleIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full px-4 mb-8"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={mobileImage}
                alt="Academic Help"
                className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content with staggered animation */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center px-6 mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r bg-black bg-clip-text text-transparent">
              Struggling with deadlines?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Let our experts handle your assignments while you focus on what
              really matters.
            </p>
          </motion.div>

          {/* CTA Button with pulse animation */}
          <a
            href="https://wa.me/your-number" // replace with actual number
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            Get My Free Quote Now
          </a>
        </motion.div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block relative z-10 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-12">
            {/* Left Side Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-1/2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={mobileImage}
                  alt="Academic Help"
                  className="w-full h-auto rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-1/2 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Professional Academic Assistance
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our expert team helps international students achieve academic
                success while balancing work and personal commitments.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.a
                  href="http://wa.me/+447465698201"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-lg"
                >
                  Get My Free Quote Now
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
