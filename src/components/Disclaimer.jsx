import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const Disclaimer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-100 via-white to-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white border-l-4 border-yellow-400 shadow-lg rounded-2xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <FaExclamationTriangle className="text-yellow-500 text-2xl mt-1" />
          <div className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
            <strong className="block text-yellow-700 mb-1 text-base sm:text-lg">
              Disclaimer:
            </strong>
            “All work is provided for guidance and educational support only.
            Students are responsible for how they use the materials.”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
