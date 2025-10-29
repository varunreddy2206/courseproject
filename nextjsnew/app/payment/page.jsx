"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const router = useRouter();
  const [details, setDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("paymentDetails"));
    if (savedData) {
      setDetails(savedData);
    } else {
      router.push("/courseform");
    }
  }, [router]);

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    setProcessing(true);

    // Simulate delay like real payment gateway
    setTimeout(async () => {
      const payload = {
        ...details,
        paymentMethod,
        paymentStatus: "Success",
        paymentDate: new Date().toLocaleString(),
      };

      try {
        const res = await fetch("http://127.0.0.1:5000/api/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        console.log("✅ Payment saved:", data);
        alert("Payment successful!");

        // Clear localStorage and redirect to success page
        localStorage.removeItem("paymentDetails");
        router.push("/success");
      } catch (err) {
        console.error("❌ Error saving payment:", err);
        alert("Error saving payment to backend!");
      } finally {
        setProcessing(false);
      }
    }, 2000); // 2 sec simulation delay
  };

  if (!details) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#000617] text-white">
        Loading payment details...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#000617] to-[#011c4f] text-white flex justify-center items-center px-6 py-20">
      <motion.div
        className="bg-[#011c4f] p-10 rounded-2xl shadow-lg w-full max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Payment Overview
        </h1>

        {/* Payment Summary */}
        <div className="space-y-3 text-lg">
          <p>
            <span className="text-yellow-400 font-semibold">Course:</span>{" "}
            {details.course}
          </p>
          <p>
            <span className="text-yellow-400 font-semibold">Mode:</span>{" "}
            {details.mode}
          </p>
          <p>
            <span className="text-yellow-400 font-semibold">Batch:</span>{" "}
            {details.batch}
          </p>
          <p>
            <span className="text-yellow-400 font-semibold">Payment Option:</span>{" "}
            {details.paymentOption}
          </p>
        </div>

        {/* Payment Methods */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-yellow-400">
          Select Payment Method
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {["UPI", "Google Pay", "PhonePe", "Paytm", "Amazon Pay", "Credit / Debit Card"].map(
            (method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`py-3 rounded-lg font-semibold transition border ${
                  paymentMethod === method
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-[#000617] border-gray-600 text-white hover:border-yellow-400"
                }`}
              >
                {method}
              </button>
            )
          )}
        </div>

        {/* Confirm Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePayment}
          disabled={processing}
          className={`w-full py-3 mt-8 rounded-lg font-semibold ${
            processing
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-yellow-500 text-black hover:bg-yellow-600"
          }`}
        >
          {processing ? "Processing Payment..." : "Confirm & Pay"}
        </motion.button>
      </motion.div>
    </section>
  );
}
