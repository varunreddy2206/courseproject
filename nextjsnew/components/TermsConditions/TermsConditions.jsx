"use client";

import React from "react";

export default function TermsConditions() {
  const sections = [
    {
      title: "1. Course Details",
      points: [
        "All information provided about courses, including modules, topics, duration, schedule, trainers, and delivery methods, is subject to change at any time without prior notice.",
        "Nuhvin Global Services Pvt. Ltd. strives to keep all courses updated to meet industry standards and emerging trends.",
        "Candidates are advised to review the course details carefully before registering to ensure the course aligns with their learning objectives.",
      ],
    },
    {
      title: "2. Eligibility",
      points: [
        "Each course has minimum eligibility requirements related to education, skills, or prior knowledge. Candidates are responsible for verifying that they meet these requirements before applying.",
        "Final admission is determined solely by Nuhvin, based on candidate eligibility, documentation, and seat availability. Meeting the minimum criteria does not guarantee admission.",
      ],
    },
    {
      title: "3. Registration Process",
      points: [
        "Filling out the registration or application form does not guarantee admission.",
        "Admission is confirmed only after full payment is received and official approval is granted by Nuhvin.",
        "Candidates are responsible for providing accurate information during registration. Any false, misleading, or incomplete information may result in rejection or cancellation of admission.",
        "Candidates should carefully review all course-related information, including fee structure, schedule, and requirements, before submitting their application.",
      ],
    },
    {
      title: "4. Fees & Payment",
      points: [
        "Course fees must be paid as per the approved payment plan provided at the time of registration.",
        "Once paid, all fees are non-refundable and non-transferable, except in cases where Nuhvin cancels or reschedules the course.",
        "Delayed, incomplete, or failed payments may lead to postponement or rejection of enrollment.",
        "Candidates are responsible for ensuring all payments are made on time and in accordance with Nuhvin’s instructions.",
      ],
    },
    {
      title: "5. Batch Allocation & Scheduling",
      points: [
        "Batches, timings, and schedules are assigned by Nuhvin and are subject to availability.",
        "Requests for changes to batches or schedules will only be considered for valid reasons and at Nuhvin’s discretion.",
        "Candidates must attend the course as per the assigned schedule to maintain eligibility for certificates and training completion.",
      ],
    },
    {
      title: "6. Behavior & Communication",
      points: [
        "All candidates are expected to communicate respectfully and professionally with trainers, staff, and fellow participants.",
        "Misbehavior, harassment, plagiarism, or providing false information may lead to immediate cancellation of admission or denial of course access.",
        "Nuhvin reserves the right to disqualify any candidate whose behavior negatively impacts the learning environment or violates professional ethics.",
      ],
    },
    {
      title: "7. Access to Course Materials",
      points: [
        "Course materials, online classes, and study resources will only be accessible after official enrollment confirmation and payment verification.",
        "Training may be conducted in online, offline, or hybrid modes depending on course requirements and batch allocations.",
        "Candidates are prohibited from recording, copying, distributing, or sharing course materials without written permission from Nuhvin.",
      ],
    },
    {
      title: "8. Certification & Career Support",
      points: [
        "Certificates of completion, internships, and career support will only be provided after candidates successfully complete all course requirements, assessments, and projects.",
        "Nuhvin provides guidance for career development, including resume support, interview preparation, and portfolio building. However, completion of a course does not guarantee placement or employment.",
      ],
    },
    {
      title: "9. Intellectual Property Rights",
      points: [
        "All content, training materials, course videos, guides, and promotional material remain the exclusive property of Nuhvin Global Services Pvt. Ltd.",
        "Candidates are not permitted to copy, reproduce, distribute, or commercially use any of Nuhvin’s intellectual property without written consent.",
        "Any violation of intellectual property rules may result in legal action.",
      ],
    },
    {
      title: "10. Policy Updates & Amendments",
      points: [
        "Nuhvin reserves the right to modify, update, or revise course details, fees, schedules, and these Terms & Conditions at any time without prior notice.",
        "Updated terms and policies will always be available on the official Nuhvin website.",
        "By registering, candidates agree to comply with the latest terms and any amendments made by Nuhvin.",
      ],
    },
    {
      title: "11. Disclaimer",
      points: [
        "Submission of an application or payment indicates that the candidate has read, understood, and agreed to these Pre-Enrollment Terms & Conditions.",
        "Candidates are responsible for reviewing these terms periodically and ensuring compliance with any updates or changes.",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-400 text-sm uppercase tracking-wider mb-2">
            ▶ Policy Guidelines
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
