import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaWhatsapp } from "react-icons/fa";
import madical from "../images/madicaltask.jpg";
import business from "../images/busines.jpg";
import dessertion from "../images/Dissertations.jpg";
import perposal from "../images/perposal.jpg";
import poster from "../images/poster.png";
import presentation from "../images/presentation.jpg";
import reports from "../images/reports.jpg";
import research from "../images/reasearch.jpg";
import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Medical Tasks",
    link: "https://drive.google.com/drive/folders/1MHeB6IAh64tjRpvj0NtAHycOYuTzw7Jo?usp=share_link",
    image: madical,
  },
  {
    title: "Business Tasks",
    link: "https://drive.google.com/drive/folders/1QC-BNNjKpsWDzJqwL6Iy5Zeq-dM1m_hT?usp=share_link",
    image: business,
  },
  {
    title: "Research Papers",
    link: "https://drive.google.com/drive/folders/11t7Cf0gJzRXpYFLg8okY81hpbmbYkPE5?usp=sharing",
    image: research,
  },
  {
    title: "Reports",
    link: "https://drive.google.com/drive/folders/11t7Cf0gJzRXpYFLg8okY81hpbmbYkPE5?usp=sharing",
    image: reports,
  },
  {
    title: "Proposals",
    link: "https://drive.google.com/drive/folders/1cKLkZmTOUcvkZyiNIYtMSwTyNdf2fIph?usp=share_link",
    image: perposal,
  },
  {
    title: "Presentations",
    link: "https://drive.google.com/drive/folders/1ndI6yjYlmbClxCLf59LavQzfn8mAX6nK?usp=share_link",
    image: presentation,
  },
  {
    title: "Dissertations",
    link: "https://drive.google.com/drive/folders/1RjbSFspqhoHAzp4oXnFKHIUgkmlXlzD3?usp=share_link",
    image: dessertion,
  },
  {
    title: "Posters",
    link: "https://drive.google.com/drive/folders/1rrudWOvq5HEk7wE4vvSz1ltPcy7PaNsB?usp=share_link",
    image: poster,
  },
];

const TestimonialPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 mb-6 tracking-tight leading-tight"
        >
          Real Results. Real Work. Real Students.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Dive into a showcase of real academic work — spanning
          <span className="text-indigo-600 font-semibold"> Medicine</span>,
          <span className="text-purple-600 font-semibold"> Business</span>,
          <span className="text-pink-600 font-semibold"> Research</span>, and
          beyond. Each sample reflects the quality and dedication we deliver.
        </motion.p>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105 text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Click to check the samples
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-20 animate-fade-in-up">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Got a unique project in mind?
          </h3>
          <p className="text-md sm:text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
            DM us now —{" "}
            <span className="text-indigo-600 font-medium">
              we love helping students like you!
            </span>
          </p>
          <a
            href="https://wa.me/your-number" // replace with actual number
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            Click to Chat with Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
