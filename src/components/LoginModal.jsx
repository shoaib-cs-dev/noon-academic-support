import { useState } from "react";
import { useAuth } from "../context/Context.jsx";

const LoginModal = ({ isOpen, onClose, onSuccess }) => {
  const { setEmail } = useAuth();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async () => {
    const isValid = /\S+@\S+\.\S+/.test(input);
    if (!isValid) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      // Send email to Formspree
      const res = await fetch("https://formspree.io/f/xyzjdbre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: input }),
      });

      const data = await res.json();

      if (res.ok) {
        setEmail(input);
        onSuccess();
        onClose();
      } else {
        alert(data?.message || "Failed to submit email.");
      }
    } catch (error) {
      alert("Submission error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Login to Continue
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4"
          disabled={loading}
        />
        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`${
              loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
            } text-white px-4 py-2 rounded transition`}
          >
            {loading ? "Login..." : "Login"}
          </button>
          <button
            onClick={onClose}
            disabled={loading}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
