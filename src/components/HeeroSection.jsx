// components/HeroSection.jsx
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import SmartVideo from "./SmartVideo";
import ContentSection from "./ContentSection";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
  // Animation Variants
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
      {/* Top Gradient Background */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="origin-top absolute top-0 left-0 w-full h-60 sm:h-72 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-b-[60px] sm:rounded-b-[100px] z-0"
      />

      {/* Hero Heading */}
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

      <ContentSection />
      {/* === Mobile Section === */}
      <div className="sm:hidden relative z-10 mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Video */}
          <motion.div
            variants={scaleIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full px-4 mb-8"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <SmartVideo
                src="https://res.cloudinary.com/dsh1el8kp/video/upload/v1747044482/noon_video_h36vhf.mp4"
                className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
                controls
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center px-6 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4 bg-gradient-to-r bg-black bg-clip-text text-transparent">
              Struggling with deadlines?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Let our experts handle your assignments while you focus on what
              really matters.
            </p>
          </motion.div>

          {/* Offer Note */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg font-semibold text-center text-gray-900 bg-gradient-to-br from-[#f5f7fa] via-[#c3d0e0] to-[#a6c1ee] py-5 px-6 rounded-xl shadow-xl mb-4 border border-blue-300 backdrop-blur-sm"
          >
            <span className="block mb-1">
              🌍 Deal with <strong>150+ countries</strong> and have local bank
              accounts there…
            </span>
            <span className="font-medium decoration-wavy decoration-blue-600">
              ✨ Feel Free to connect and get <strong>70%+ marks</strong>
            </span>
          </motion.p>

          {/* Animated Urgency Sentence */}
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm sm:text-base font-medium text-center sm:text-left text-white bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 py-4 px-6 rounded-xl shadow-md mb-6 tracking-wide"
          >
            <Typewriter
              words={[
                "🔥 Spots fill fast — message us now to get your assignment started today!",
                "⏳ Only accepting 5 new students per day to maintain quality.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.p>

          {/* CTA Button */}
          <a
            href="https://wa.me/+447465698201"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            Get My Free Quote Now
          </a>
        </motion.div>
      </div>

      {/* === Desktop Section === */}
      <div className="hidden sm:block relative z-10 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-12">
            {/* Left Video */}
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full px-4 mb-8"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <SmartVideo
                  src="https://res.cloudinary.com/dsh1el8kp/video/upload/v1747044482/noon_video_h36vhf.mp4"
                  className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  controls
                />
              </div>
              {/* Animated Urgency Sentence */}
              <motion.p
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-16 text-lg sm:text-lg font-semibold text-center sm:text-left text-white bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 py-5 px-5 rounded-xl shadow-lg mb-6 tracking-wide"
              >
                <Typewriter
                  words={[
                    "🔥 Spots fill fast — message us now to get your assignment started today!",
                    "⏳ Only accepting 5 new students per day to maintain quality.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </motion.p>
            </motion.div>

            {/* Right Content */}
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

              {/* Offer Note */}
              <motion.p
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-base sm:text-lg font-semibold text-center text-gray-900 bg-gradient-to-br from-[#f5f7fa] via-[#c3d0e0] to-[#a6c1ee] py-5 px-6 rounded-xl shadow-xl mb-4 border border-blue-300 backdrop-blur-sm"
              >
                <span className="block mb-1">
                  🌍 Deal with <strong>150+ countries</strong> and have local
                  bank accounts there…
                </span>
                <span className="font-medium decoration-wavy decoration-blue-600">
                  ✨ Feel Free to connect and get <strong>70%+ marks</strong>
                </span>
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* CTA Button */}
                <a
                  href="https://wa.me/+447465698201"
                  className="inline-flex mt-8 items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <FaWhatsapp className="text-xl sm:text-2xl" />
                  Get My Free Quote Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
