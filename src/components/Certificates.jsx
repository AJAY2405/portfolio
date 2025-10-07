// src/components/Certificates.jsx
import React from "react";

function Certificates() {
  const certificates = [
    {
      title: " SQL",
      issuer: "HackerRank",
      date: "7 Oct 2025",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833911/sql_basic_certificate_kuyqa3.pdf",
    },
    {
      title: "Java ",
      issuer: "HackerRank",
      date: "7 Oct 2025",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833939/java_basic_certificate_qmpe5f.pdf",
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE",
      date: "7/15/2025",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833891/HP_CERTIFICATE_bvbe4i.pdf",
    },
  ];

  return (
    <section id="certificates" className="w-full py-16 px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#111] border border-purple-500 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-300 mb-1">Issued by: {cert.issuer}</p>
            <p className="text-sm text-gray-400 mb-3">Date: {cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
