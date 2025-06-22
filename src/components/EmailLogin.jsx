import { useState } from "react";
import { motion } from "framer-motion";

function EmailLogin({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      await fetch("https://formspree.io/f/xyzjdbre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      localStorage.setItem("visitorEmail", email);
      onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-[#e1eaff] to-[#cbd8ff] px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-8"
      >
        {/* Optional Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="Noon Support"
            className="h-12 w-auto"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        <h1 className="text-2xl font-semibold text-center text-indigo-800 mb-2">
          Noon Academic Support
        </h1>
        <p className="text-center text-sm text-gray-700 mb-6">
          Access premium learning resources — log in below
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800 placeholder-gray-400 text-sm transition"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Continue
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-600">
          🔒 Your information is safe with us. No spam.
        </p>
      </motion.div>
    </div>
  );
}

export default EmailLogin;
