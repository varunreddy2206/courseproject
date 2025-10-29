'use client';
import React, { useEffect, useState } from 'react';

const FeatureSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hero")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">{data.heading}</h2>
      <p className="text-lg text-gray-600 mb-2">Badge: {data.badge}</p>
      <ul className="list-disc pl-6 text-gray-700">
        {data.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureSection;
