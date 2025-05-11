import { motion } from "framer-motion";

const sentence =
  "Struggling with deadlines? Balancing work and study? Let us handle your assignments while you focus on building skills and chasing your goals.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.6,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};
const badgeVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
  float: {
    y: [0, -5, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};

function ContentSection() {
  const badgeTexts = [
    "✅ 10,000+ Students Helped",
    "🎯 70%+ Grade Guarantee",
    "💸 Money-Back Promise",
  ];

  return (
    <div className="relative z-10 mt-10 text-center max-w-4xl mx-auto space-y-8">
      {/* Animated Badges with float effect */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
        {badgeTexts.map((text, i) => (
          <motion.div
            custom={i}
            initial="hidden"
            animate={["visible", "float"]}
            variants={badgeVariants}
            key={i}
            className="bg-purple-100 text-purple-700 font-semibold text-sm sm:text-base px-4 py-2 rounded-full shadow-lg cursor-default"
          >
            {text}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-base sm:text-lg md:text-xl text-gray-700 px-4 flex flex-wrap justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {sentence.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default ContentSection;
