"use client";

import React from "react";

export default function PaymentTermsConditions() {
  const sections = [
    {
      title: "1. Enrollment and Eligibility",
      points: [
        "Admission to any course offered by Nuhvin Global Services Pvt. Ltd. is subject to eligibility verification and approval by the institution.",
        "Registration will be confirmed only after successful payment of the prescribed course fee and completion of required formalities.",
        "The company reserves the right to reject or cancel any enrollment if eligibility criteria or conduct policies are violated.",
      ],
    },
    {
      title: "2. Course Fees and Payment",
      points: [
        "Full course fee must be paid before the commencement of the program unless an installment plan is officially approved in writing.",
        "All payments made are non-refundable and non-transferable, under any circumstances, except in the case of official course cancellation by Nuhvin Global Services Pvt. Ltd.",
        "Delay or non-payment of fees will result in suspension of course access and removal from the batch without prior notice.",
      ],
    },
    {
      title: "3. Course Delivery",
      points: [
        "Training sessions may be conducted in online, offline, or hybrid formats as per the batch schedule.",
        "Nuhvin reserves the right to modify batch timing, course duration, trainers, or modules, curriculum as deemed necessary to maintain course quality and relevance.",
        "Unauthorized recording, duplication, or distribution of training sessions (videos) or materials is strictly prohibited.",
      ],
    },
    {
      title: "4. Attendance and Participation",
      points: [
        "A minimum of 85% attendance and completion of all mandatory assignments are required to qualify for certification.",
        "Absence without valid reason or lack of participation will lead to automatic disqualification from receiving certificates or internship opportunities.",
        "Students must adhere to the schedule provided; rescheduling requests or batch transfer will be considered only in genuine cases and with prior written approval.",
      ],
    },
    {
      title: "5. Certification",
      points: [
        "Certificates will be issued only upon successful completion of all modules, projects, and evaluations as per Nuhvin’s internal standards.",
        "Certificates will carry the official seal of Nuhvin Global Services Pvt. Ltd. and are valid for career and professional use.",
        "Forgery, misuse, or tampering of certification documents will result in strict disciplinary and legal action.",
      ],
    },
    {
      title: "6. Internship & Placement Assistance",
      points: [
        "Internship and placement assistance will be provided only to students who have successfully completed the course and cleared internal assessments.",
        "Nuhvin provides career support and guidance, but does not guarantee employment or placement.",
        "Misrepresentation of training experience or certification under Nuhvin’s name will lead to immediate disqualification and legal action.",
      ],
    },
    {
      title: "7. Intellectual Property",
      points: [
        "All course materials, lectures, recordings, and project templates remain the exclusive intellectual property of Nuhvin Global Services Pvt. Ltd.",
        "Copying, redistributing, or selling any learning content without prior written consent is a serious violation and will attract strict legal penalties.",
      ],
    },
    {
      title: "8. Code of Conduct",
      points: [
        "Students are required to maintain discipline, professionalism, and respectful communication throughout the training period.",
        "Any act of misconduct, plagiarism, harassment, or misuse of company resources will lead to immediate termination from the course with no refund.",
        "Nuhvin reserves the right to permanently bar individuals violating behavioral or ethical standards.",
      ],
    },
    {
      title: "9. Project Work and Assessments",
      points: [
        "All projects, assignments, and evaluations must be completed independently and honestly.",
        "Projects developed during the course may be showcased or published by Nuhvin (with due credit) for academic or promotional purposes.",
        "Incomplete or copied project work will disqualify candidates from certification or internship eligibility.",
      ],
    },
    {
      title: "10. Amendments and Compliance",
      points: [
        "Nuhvin Global Services Pvt. Ltd. reserves the full right to update, revise, or amend these Terms and Conditions at any time without prior notice.",
        "The updated regulations will be made available on the official website to all registered candidates, and compliance with the revised terms will be mandatory.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Terms & Conditions
          </h2>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {section.title}
              </h3>
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
