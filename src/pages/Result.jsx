import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp, FaAward } from "react-icons/fa";
import ahmed from "../clients/ahmed.jpg";
import aisha from "../clients/aisha.jpg";
import chen from "../clients/chen.jpg";
import khalid from "../clients/khalid.jpg";
import maria from "../clients/maria.jpg";
import tania from "../clients/tania.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmed R.",
    title: "Business Undergraduate, Oman",
    image: ahmed,
    feedback:
      "I work night shifts so I couldn’t focus on my reports. These guys really helped me out. Got the assignment in 3 days with Turnitin report and everything. Teacher said my structure improved a lot. 100% recommend!",
  },
  {
    name: "Maria K.",
    title: "Master’s in Healthcare Management, USA",
    image: maria,
    feedback:
      "Honestly I was super nervous at first, but they delivered exactly what I asked for — Harvard style, zero plagiarism, and even matched my writing style. Got 78%! The best part? They replied fast and kept updating me.",
  },
  {
    name: "Tania K.",
    title: "Healthcare Student, Australia",
    image: tania,
    feedback:
      "English isn’t my first language, and I always struggled with writing. They wrote everything in a tone that matched my style and my lecturer loved it. Thank you Noon Academic Support!",
  },
  {
    name: "Khalid M.",
    title: "Business Student, UAE",
    image: khalid,
    feedback:
      "I’ve used other services, but this was the first time I got full Turnitin reports, no plagiarism, and real-time updates. I got a 86% in my final report. Highly recommend!",
  },
  {
    name: "Aisha R.",
    title: "MSc Student, UK",
    image: aisha,
    feedback:
      "I work 30+ hours a week and couldn’t keep up with my coursework. Noon Academic Support helped me pass all my modules — stress-free. They updated me daily and followed all my uni guidelines perfectly!",
  },
  {
    name: "Chen L.",
    title: "IT Student, Canada",
    image: chen,
    feedback:
      "They finished my coding project in 2 days. Explained how everything works too, which helped during my viva. No AI, no plagiarism, and super polite team. I already gave my next task.",
  },
];

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
        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((client, index) => (
              <SwiperSlide key={index} className=" pb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-20 h-20 rounded-full border-4 border-cyan-200 shadow-md mb-4"
                    />
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-cyan-400 mb-1">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      {client.title}
                    </p>
                    <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                      “{client.feedback}”
                    </p>
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-600 opacity-10 rounded-full blur-2xl pointer-events-none"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" text-base font-medium text-gray-700 mb-4 my-10"
        >
          For more results, click the button below
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
          className="mt-16"
        >
          <p className="text-xl font-medium text-gray-800 mb-4">
            Ready to start? Let’s discuss your project.
          </p>
          <a
            href="https://wa.me/+447465698201"
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
