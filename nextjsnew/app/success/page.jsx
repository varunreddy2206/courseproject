"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#000617] to-[#011c4f] flex flex-col items-center justify-center text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#011c4f] p-10 rounded-2xl shadow-lg max-w-lg"
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          ✅ Payment Successful!
        </h1>
        <p className="text-lg mb-8">
          Thank you for your payment. You will receive confirmation details soon.
        </p>

        <Link
          href="/"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Go to Home
        </Link>
      </motion.div>
    </section>
  );
}
