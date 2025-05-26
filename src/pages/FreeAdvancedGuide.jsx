import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Typewriter } from "react-simple-typewriter";

import strategyImg from "../images/Strategies.png";
import marksImg from "../images/plusmark.jpeg";
import aiImg from "../images/writefrom.jpeg";

const guideData = [
  {
    title: "Top 4 Study Strategies",
    link: "https://drive.google.com/file/d/13tojYxMb6Qai9RGYYTgTVRp5utAVuNEw/view?usp=share_link",
    image: strategyImg,
  },
  {
    title: "How to get 77% plus marks",
    link: "https://drive.google.com/file/d/12lyE2dhuV4-1yfaoz_BgBiYQqM2FkwTW/view?usp=share_link",
    image: marksImg,
  },
  {
    title: "How to write content from CHATGPT/AI",
    link: "https://drive.google.com/file/d/15gTTORtnTRUBD3c84N1kd5vqg30cPYV5/view?usp=share_link",
    image: aiImg,
  },
];

const Card = ({ guide }) => (
  <div className="bg-white shadow-lg rounded-lg px-6 py-8 relative flex flex-col items-center text-center mx-auto max-w-sm w-full">
    <span className="absolute top-4 right-4 bg-red-500 text-white text-base font-semibold px-2 py-1 rounded-l-lg">
      It's Free
    </span>
    <h3 className="text-black text-lg font-bold mb-4 mt-8 px-2 leading-tight">
      {guide.title}
    </h3>
    <div className="relative w-32 h-32 bg-black rounded-full flex items-center justify-center mb-12 mt-12">
      <img
        src={guide.image}
        alt={guide.title}
        className="h-44 object-contain absolute -top-6"
      />
    </div>
    <a
      href={guide.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-600 text-white font-normal px-6 py-2 rounded-full hover:bg-purple-700 transition"
    >
      Take This Course
    </a>
  </div>
);

const FreeAdvancedGuide = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-center">
      <div>
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-purple-600">FREE</span> ADVANCED GUIDE
        </h2>
        <div className="mb-8 text-base md:text-lg font-[Poppins] text-slate-700 tracking-wide">
          <span className="text-indigo-600 font-semibold">
            <Typewriter
              words={[
                "eBooks, Guides, Templates, Downloads & more to help you succeed",
                "Learn smart. Achieve more.",
                "Premium study tools for academic excellence.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2500}
            />
          </span>
        </div>
      </div>

      {/* Mobile: Swiper */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {guideData.map((guide, index) => (
            <SwiperSlide key={index}>
              <Card guide={guide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Flex Row */}
      <div className="hidden md:flex md:justify-center md:gap-2 md:flex-wrap">
        {guideData.map((guide, index) => (
          <Card key={index} guide={guide} />
        ))}
      </div>
    </section>
  );
};

export default FreeAdvancedGuide;
