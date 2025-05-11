import { motion } from "framer-motion";
import ContentSection from "../components/ContentSection";
import HeroSection from "../components/HeeroSection";
import TestimonialPage from "./Testimonial";
import ResultsPage from "./Result";
import ServicesPage from "./ServicePage";
import ChargesPage from "./ChargesPage";
import FAQSection from "./FAQSection";

function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Home Section with Animation */}
      <motion.section
        id="home"
        className="px-4 sm:px-6 md:px-16 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <ContentSection />
      </motion.section>

      {/* Testimonials Section with Animation */}
      <motion.section
        id="testimonials"
        className="px-4 sm:px-6 md:px-16 py-12 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <TestimonialPage />
      </motion.section>

      {/* Results Section with Animation */}
      <motion.section
        id="results"
        className="px-4 sm:px-6 md:px-16 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Results</h2>
        <ResultsPage />
      </motion.section>

      {/* Services Section with Animation */}
      <motion.section
        id="services"
        className="px-4 sm:px-6 md:px-16 py-12 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <ServicesPage />
      </motion.section>

      {/* Charges Section with Animation */}
      <motion.section
        id="charges"
        className="px-4 sm:px-6 md:px-16 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Charges</h2>
        <ChargesPage />
      </motion.section>

      {/* FAQs Section with Animation */}
      <motion.section
        id="faqs"
        className="px-4 sm:px-6 md:px-16 py-12 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
        <FAQSection />
      </motion.section>
    </div>
  );
}

export default Home;
