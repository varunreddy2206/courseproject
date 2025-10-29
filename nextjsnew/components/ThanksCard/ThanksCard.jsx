"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThanksCard({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-[#011c4f] text-white p-8 rounded-xl shadow-lg max-w-md w-full text-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ✅ Intu Mark */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-4xl">
            ✓
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
        <p className="mb-6">You have successfully registered for the course.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <button className="w-full sm:w-auto py-2 px-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
              Go to Dashboard
            </button>
          </Link>
          <Link href="/courseform">
            <button className="w-full sm:w-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
              Course Enroll
            </button>
          </Link>
        </div>

        <button
          className="absolute top-3 right-3 text-white text-lg font-bold"
          onClick={onClose}
        >
          ×
        </button>
      </motion.div>
    </div>
  );
}
