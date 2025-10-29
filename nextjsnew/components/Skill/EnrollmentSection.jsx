"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EnrollmentSection() {
  return (
    <>
      {/* ========== ENROLLMENT SECTION ========== */}
      <section className="bg-gradient-to-r from-[#0a1026] to-[#021b49] text-white py-20 px-6 sm:px-10 lg:px-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Now opening</h2>

          <div className="flex flex-col sm:flex-row sm:space-x-10 mt-6 sm:mt-0 text-sm sm:text-base">
            <div>
              <p className="text-gray-400">Starting at</p>
              <p className="font-semibold">Feb 15 2024</p>
            </div>
            <div>
              <p className="text-gray-400">Price</p>
              <p className="font-semibold">$150</p>
            </div>
            <div>
              <p className="text-gray-400">Early bird discount</p>
              <p className="font-semibold">
                10% off for register before Feb 05 2024
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: step * 0.3, duration: 0.8, ease: "easeOut" }}
              className="bg-[#141b3a] p-8 rounded-2xl shadow-lg"
            >
              {step === 1 && (
                <>
                  <h3 className="text-yellow-400 font-semibold mb-2">Step 1</h3>
                  <h4 className="text-lg font-semibold mb-6">
                    Enrollment form
                  </h4>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1026] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1026] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1026] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <textarea
                      placeholder="Subject / Message"
                      rows="3"
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1026] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                    <Link href="/courseform" passHref>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-30 bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-all"
                      >
                        Enroll Now
                      </motion.button>
                    </Link>
                  </form>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-yellow-400 font-semibold mb-2">Step 2</h3>
                  <h4 className="text-lg font-semibold mb-6">Payment</h4>
                  <div className="space-y-6 text-sm sm:text-base">
                    <div>
                      <h5 className="font-semibold mb-2">Pay via bank</h5>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Account number: 12348765</li>
                        <li>• Account name: Jose Callion</li>
                        <li>• Bank name: HSBC Bank Canada</li>
                        <li>• Bank address: 789 EML Street Vancouver</li>
                        <li>• SWIFT: BKBKHNVXHAN</li>
                      </ul>
                      <div className="flex justify-start mt-4">
                        <Image
                          src="/qr1.jpg"
                          alt="Bank QR"
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Pay via PayPal</h5>
                      <div className="flex items-center gap-2 mb-2">
                        <button className="bg-white text-black font-semibold px-3 py-1 rounded flex items-center gap-1">
                          <Image
                            src="/images/paypal-icon.png"
                            alt="PayPal"
                            width={20}
                            height={20}
                          />
                          PayPal
                        </button>
                      </div>
                      <p className="text-gray-300">
                        • Email: josecallion@gmail.com
                      </p>
                      <div className="flex justify-start mt-4">
                        <Image
                          src="/qr2.jpg"
                          alt="PayPal QR"
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-yellow-400 font-semibold mb-2">Step 3</h3>
                  <h4 className="text-lg font-semibold mb-6">
                    Please check our email for enrollment confirmation!
                  </h4>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    We will send you an enrollment confirmation and an invitation
                    to our Eduma Community.
                  </p>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                    Join this community and dive into the various discussions,
                    threads, and activities happening in the community.
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== COURSE WAITLIST SECTION ========== */}
      <section className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* ✅ Responsive Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg4.jpg"
            alt="AI Robot Background"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 100vw,
                   100vw"
            className="object-cover object-center w-full h-full brightness-[0.5]"
          />
          {/* Optional Overlay Gradient for text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Overlay Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-2xl"
        >
          <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold mb-4 leading-snug">
            Looking for our upcoming courses? <br />
            Join the waitlist to be notified when dates <br />
            for future courses become available.
          </h2>

          {/* Email Input + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 w-full">
            <input
              type="email"
              placeholder="Fill your email"
              className="w-full sm:w-2/3 md:w-1/2 px-4 py-3 rounded-full sm:rounded-r-none border border-gray-300 focus:outline-none text-gray-700"
            />
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="mt-3 sm:mt-0 sm:-ml-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full sm:rounded-l-none transition-all duration-300"
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
