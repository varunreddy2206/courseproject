"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [registrations, setRegistrations] = useState({ students: [], courses: [] });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/admin/registrations")
      .then((res) => res.json())
      .then((data) => setRegistrations(data))
      .catch((err) => console.error("❌ Error fetching admin data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#000617] text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🧑‍💻 Admin Dashboard</h1>

      {/* 🔹 Student Registrations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Student Registrations</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full border-collapse">
            <thead className="bg-[#011c4f] text-yellow-400">
              <tr>
                <th className="p-3 border border-gray-600">#</th>
                <th className="p-3 border border-gray-600">Name</th>
                <th className="p-3 border border-gray-600">Email</th>
                <th className="p-3 border border-gray-600">Contact</th>
                <th className="p-3 border border-gray-600">Course</th>
                <th className="p-3 border border-gray-600">City</th>
                <th className="p-3 border border-gray-600">Pincode</th>
                <th className="p-3 border border-gray-600">Created At</th>
              </tr>
            </thead>
            <tbody>
              {registrations.students.length > 0 ? (
                registrations.students.map((s, index) => (
                  <tr key={s.id} className="hover:bg-[#022863]">
                    <td className="p-3 border border-gray-700 text-center">{index + 1}</td>
                    <td className="p-3 border border-gray-700">{s.name}</td>
                    <td className="p-3 border border-gray-700">{s.email}</td>
                    <td className="p-3 border border-gray-700">{s.contact}</td>
                    <td className="p-3 border border-gray-700">{s.course}</td>
                    <td className="p-3 border border-gray-700">{s.city}</td>
                    <td className="p-3 border border-gray-700">{s.pincode}</td>
                    <td className="p-3 border border-gray-700">{s.created_at}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center p-4 text-gray-400">
                    No student registrations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* 🔹 Course Registrations (With Student Info) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Course Registrations (Payments)</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full border-collapse">
            <thead className="bg-[#011c4f] text-yellow-400">
              <tr>
                <th className="p-3 border border-gray-600">#</th>
                <th className="p-3 border border-gray-600">Student Name</th>
                <th className="p-3 border border-gray-600">Student Email</th>
                <th className="p-3 border border-gray-600">Course</th>
                <th className="p-3 border border-gray-600">Mode</th>
                <th className="p-3 border border-gray-600">Batch</th>
                <th className="p-3 border border-gray-600">Payment Option</th>
                <th className="p-3 border border-gray-600">Payment Method</th>
                <th className="p-3 border border-gray-600">Payment Status</th>
                <th className="p-3 border border-gray-600">Created At</th>
              </tr>
            </thead>
            <tbody>
              {registrations.courses.length > 0 ? (
                registrations.courses.map((c, index) => (
                  <tr key={c.id} className="hover:bg-[#022863]">
                    <td className="p-3 border border-gray-700 text-center">{index + 1}</td>
                    <td className="p-3 border border-gray-700">{c.student_name || "N/A"}</td>
                    <td className="p-3 border border-gray-700">{c.student_email || "N/A"}</td>
                    <td className="p-3 border border-gray-700">{c.course}</td>
                    <td className="p-3 border border-gray-700">{c.mode}</td>
                    <td className="p-3 border border-gray-700">{c.batch}</td>
                    <td className="p-3 border border-gray-700">{c.payment_option}</td>
                    <td className="p-3 border border-gray-700">{c.payment_method || "—"}</td>
                    <td
                      className={`p-3 border border-gray-700 font-semibold ${c.payment_status?.toLowerCase() === "success"
                          ? "text-green-400"
                          : "text-red-400"
                        }`}
                    >
                      {c.payment_status || "Pending"}
                    </td>

                    <td className="p-3 border border-gray-700">{c.created_at}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center p-4 text-gray-400">
                    No course registrations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
