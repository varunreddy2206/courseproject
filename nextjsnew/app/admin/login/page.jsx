"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Static login (you can connect to Flask later)
    if (username === "nuhvintraining" && password === "nuhvin@training") {
      localStorage.setItem("isAdminLoggedIn", "true");
      router.push("/admin"); // Redirect to dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#000617] to-[#011c4f] flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#011c4f] p-10 rounded-2xl shadow-2xl w-full max-w-md border border-yellow-500/20"
      >
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8 text-yellow-400 tracking-wide"
        >
          Admin Login
        </motion.h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block mb-2 font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block mb-2 font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#000617] border border-gray-600 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-2 text-center"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 mt-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition shadow-md"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
