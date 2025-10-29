"use client";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  const info = [
    {
      icon: <MapPin className="text-blue-400 w-10 h-10 mb-4" />,
      title: "Address Line",
      details: ["Bowery St, New York, 37 USA", "NY 10013, USA"],
    },
    {
      icon: <Phone className="text-blue-400 w-10 h-10 mb-4" />,
      title: "Contact Numbers",
      details: ["+1255 – 568 – 6523 4374-221", "+1255 – 568 – 6523"],
    },
    {
      icon: <Mail className="text-blue-400 w-10 h-10 mb-4" />,
      title: "Mail Address",
      details: ["email@example.com", "info@yourdomain.com"],
    },
  ];

  return (
    <section className=" bg-gradient-to-b  from-[#011c4f] to-[#000617] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {info.map((item, index) => (
          <div
            key={index}
            className="bg-[#052873] hover:bg-[#16233E] transition-all duration-300 p-8 rounded-2xl text-center shadow-lg"
          >
            <div className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-lg font-semibold mb-2 text-blue-300">{item.title}</h3>
              {item.details.map((line, i) => (
                <p key={i} className="text-gray-300">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
