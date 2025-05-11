import { useState } from "react";
import { X } from "lucide-react";
import nameicon from "../assets/nameicon.png";
import { Link } from "react-scroll"; // for smooth scroll

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Testimonials",
    "Results",
    "Services",
    "Charges",
    "FAQs",
  ];

  return (
    <nav className="z-50 bg-gray-900 text-white p-4 fixed w-full top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and App Name */}
        <div
          className={`items-center space-x-3 transition-all duration-300 ${
            isMobileMenuOpen ? "hidden" : "flex"
          } md:flex`}
        >
          <img src={nameicon} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">Noon Academic Support</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-purple-400 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} />
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 rounded">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsMobileMenuOpen(false)} // close menu on click
              className="block w-full bg-purple-600 text-white px-4 py-3 rounded shadow hover:bg-purple-700 transition-colors duration-200 "
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
