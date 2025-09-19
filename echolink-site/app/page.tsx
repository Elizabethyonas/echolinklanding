"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function EcholinkLanding() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      // Placeholder: replace with real API call (fetch / axios) to your mailing list endpoint
      await new Promise((res) => setTimeout(res, 600));

      console.log("Email submitted:", email);
      setEmail("");
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 text-center">
      {/* Hero Section */}
      {/* Top-left header */}
      <h1 className="absolute top-4 left-4 text-purple-900 text-2xl font-bold font-serif">
        EchoLink
      </h1>

      {/* Hero Image */}
      <motion.img
        src="/images/phone.png"
        alt="EchoLink Hero Illustration"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-lg mb-8 mt-25 border rounded-xl bg-transparent"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-purple-900 text-5xl font-bold font-serif mb-4"
      >
        EchoLink
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 max-w-xl mb-8"
      >
        A smarter way to connect. EchoLink brings you seamless web-based calling
        with clarity and reliability — without the hassle of traditional phone
        lines. Stay connected from anywhere, anytime.
      </motion.p>


      {/* Email Signup */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex w-full max-w-md gap-2"
      >
        <input
          type="email"
          aria-label="Your email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className={`px-6 rounded-xl font-medium shadow-md transition ${
            status === "sending"
              ? "bg-indigo-400 cursor-wait text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {status === "sending" ? "Sending..." : "Sign Up"}
        </button>
      </motion.form>

      {/* Submission feedback */}
      <div className="mt-4">
        {error && <p className="text-sm text-red-600">{error}</p>}
        {status === "success" && (
          <p className="text-sm text-green-600" role="status" aria-live="polite">
            Thanks — we'll notify you when EchoLink is ready.
          </p>
        )}
      </div>

      {/* Features with Images */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl w-full">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-white shadow rounded-2xl flex flex-col items-center"
        >
          <img src="images/setup.png" alt="Instant Setup" className="mb-4 w-20 h-20" />
          <h3 className="font-semibold text-gray-900 mb-2">Instant Setup</h3>
          <p className="text-gray-600 text-sm text-center">
            Get started in minutes. No hardware, no contracts, just simple online
            calling.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-white shadow rounded-2xl flex flex-col items-center"
        >
          <img src="/images/calls.jpeg" alt="Crystal Clear Calls" className="mb-4 w-20 h-20" />
          <h3 className="font-semibold text-gray-900 mb-2">Crystal Clear Calls</h3>
          <p className="text-gray-600 text-sm text-center">
            Experience top-quality voice connections built on reliable VoIP
            technology.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-white shadow rounded-2xl flex flex-col items-center"
        >
          <img src="/images/stay.jpeg" alt="Stay Connected" className="mb-4 w-20 h-20" />
          <h3 className="font-semibold text-gray-900 mb-2">Stay Connected</h3>
          <p className="text-gray-600 text-sm text-center">
            Call and message from anywhere with only your web browser.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} EchoLink. All rights reserved.
      </footer>
    </div>
  );
}
