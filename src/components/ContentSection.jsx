import React from "react";

const ContentSection = () => {
  return (
    <div className="relative z-10 mt-12 sm:mt-24 px-4">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 -z-10 rounded-3xl shadow-xl blur-sm opacity-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>

      {/* Content */}
      <div className="text-center max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200">
        <ul className="text-lg sm:text-2xl font-semibold text-gray-800 space-y-3 list-none">
          <li>✅ 10,000+ Students Helped</li>
          <li>🎯 70%+ Grade Guarantee</li>
          <li>💸 Money-Back Promise</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentSection;
