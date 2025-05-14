import React from "react";
import { Typewriter } from "react-simple-typewriter";

const ContentSection = () => {
  return (
    <div className="relative z-10 mt-12 sm:mt-24 px-4">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 -z-10 rounded-3xl shadow-xl blur-sm opacity-80"></div>

      {/* Content */}
      <div className="text-center max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200">
        <div className="text-lg sm:text-2xl font-semibold text-gray-800">
          <Typewriter
            words={[
              "✅ 10,000+ Students Helped",
              "🎯 70%+ Grade Guarantee",
              "💸 Money-Back Promise",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
