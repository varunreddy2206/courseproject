"use client";

import { useState } from "react";
import Link from "next/link";

export default function CoursesServicesSection() {
  const [selectedCourse, setSelectedCourse] = useState("All");

  const courses = [
    {
      category: "Artificial Intelligence, Data & Automation",
      items: [
        {
          id: "01",
          title: "Artificial Intelligence & Machine Learning with Python",
          desc: "Learn AI algorithms and Python tools to build intelligent systems.",
          link: "/aiml",
        },
        {
          id: "02",
          title: "Data Science & Analytics with Python",
          desc: "Analyze and visualize data to extract actionable insights.",
          link: "/datascience",
        },
        {
          id: "03",
          title: "Python for Development & Automation",
          desc: "Automate tasks and develop applications using Python.",
          link: "/python",
        },
      ],
    },
    {
      category: "Web Development",
      items: [
        {
          id: "04",
          title: "Full Stack Web Development (MERN / MEAN)",
          desc: "Build end-to-end web applications with modern JS frameworks.",
          link: "/fullstack",
        },
        {
          id: "05",
          title:
            "Full Stack Java Development (Spring Boot + React / Angular)",
          desc: "Develop enterprise-grade applications using Java & front-end frameworks.",
          link: "/java",
        },
        {
          id: "06",
          title: "Full Stack Python Development (Django / Flask + React)",
          desc: "Create robust web apps using Python backend and React frontend.",
          link: "/pythonfullstack",
        },
        {
          id: "07",
          title: "Frontend Development (HTML, CSS, JavaScript, React)",
          desc: "Design responsive and interactive user interfaces.",
          link: "/frontend",
        },
        {
          id: "08",
          title: "Backend Development (Node.js, Express, MongoDB / MySQL)",
          desc: "Build scalable server-side applications and APIs.",
          link: "/backend",
        },
      ],
    },
    {
      category: "Mobile App Development",
      items: [
        {
          id: "09",
          title: "Flutter App Development",
          desc: "Create cross-platform mobile apps using Flutter.",
          link: "/flutter",
        },
        {
          id: "10",
          title: "React Native App Development",
          desc: "Build mobile apps for iOS & Android using React Native.",
          link: "/react",
        },
        {
          id: "11",
          title: "Swift App Development (iOS)",
          desc: "Develop native iOS apps with Swift programming.",
          link: "/swiftapp",
        },
        {
          id: "12",
          title: "Kotlin App Development (Android)",
          desc: "Develop native Android apps using Kotlin.",
          link: "/kotlinapp",
        },
      ],
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      items: [
        {
          id: "13",
          title: "DevOps Engineer Program",
          desc: "Learn CI/CD, Docker, and modern DevOps practices.",
          link: "/devops",
        },
        {
          id: "14",
          title: "Cloud Computing Fundamentals",
          desc: "Understand cloud services and architecture for scalable apps.",
          link: "/cloud",
        },
        {
          id: "15",
          title: "Docker, Kubernetes & CI/CD Tools",
          desc: "Manage containerized applications and automate deployment pipelines.",
          link: "/docker",
        },
      ],
    },
    {
      category: "Software Testing & Quality Assurance",
      items: [
        {
          id: "16",
          title: "Manual & Automation Testing",
          desc: "Ensure software quality with manual and automated tests.",
          link: "/manualtesting",
        },
        {
          id: "17",
          title: "Selenium & API Testing (Advanced QA)",
          desc: "Automate web and API testing with industry-standard tools.",
          link: "/seleniumapi",
        },
      ],
    },
    {
      category: "Design & Creative Technologies",
      items: [
        {
          id: "18",
          title: "UI/UX Design Fundamentals (Figma & Adobe XD)",
          desc: "Design engaging interfaces and enhance user experiences.",
          link: "/uiux",
        },
        {
          id: "19",
          title: "Graphic Design (Photoshop, Illustrator, Canva Pro)",
          desc: "Create visual content for digital and print media.",
          link: "/courses/graphic-design",
        },
      ],
    },
    {
      category: "Internship & Corporate Programs",
      items: [
        {
          id: "20",
          title: "Real-Time Project Internship (Web/App/AI)",
          desc: "Work on live projects to gain practical experience.",
          link: "/projects",
        },
        {
          id: "21",
          title: "Corporate Upskilling (Custom Modules)",
          desc: "Enhance your skills with industry-oriented programs.",
          link: "/courses/corporate-upskilling",
        },
      ],
    },
  ];

  const topBarItems = ["All", ...courses.map((c) => c.category)];

  const filteredCourses =
    selectedCourse === "All"
      ? courses.flatMap((c) => c.items)
      : courses.find((c) => c.category === selectedCourse)?.items || [];

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="text-green-400 text-sm uppercase tracking-wider mb-2">
          ▶ WHAT WE DO
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          All Courses
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row gap-8">
        {/* Left-side vertical "table" for categories */}
        <div className="flex flex-col gap-3 w-auto bg-[#0b1638]/30 p-4 rounded-md self-start">
          {topBarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedCourse(item)}
              className={`cursor-pointer px-3 py-2 font-semibold transition-all duration-300 relative ${
                selectedCourse === item
                  ? "text-green-400 after:block after:h-[2px] after:w-full after:bg-green-400 after:absolute after:bottom-0 after:left-0"
                  : "hover:text-green-300"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Right-side courses */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#0b1638]/60 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:bg-[#0f245c] transition-all duration-300"
              style={{ height: "320px" }}
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {course.title}
                </h4>
                <p className="text-sm text-gray-300 line-clamp-3 overflow-hidden">
                  {course.desc}
                </p>
              </div>

              {/* ✅ Buttons with spacing */}
              <div className="flex justify-between items-center gap-4 mt-6">
                <Link
                  href={course.link}
                  className="bg-transparent border border-green-400 text-green-400 font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-green-400 hover:text-black inline-block text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/courseform"
                  className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-yellow-500 inline-block text-center"
                >
                  Enroll Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
