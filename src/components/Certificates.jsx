// src/components/Certificates.jsx
import React from "react";

function Certificates() {
  const certificates = [
    {
      title: "SQL",
      issuer: "HackerRank",
      date: "7 Oct 2025",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833911/sql_basic_certificate_kuyqa3.pdf",
    },
    {
      title: "Java",
      issuer: "HackerRank",
      date: "7 Oct 2025",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833939/java_basic_certificate_qmpe5f.pdf",
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE",
      date: "15 July 2025",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833891/HP_CERTIFICATE_bvbe4i.pdf",
    },
    {
      title: "Microsoft Excel",
      issuer: "Udemy",
      date: "12 Feb 2026",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8de4b1f3-2a46-4622-afac-43fb4a8cf194.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="w-full py-12 px-4 md:px-8 lg:px-16 text-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Certificates
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#111] border border-purple-500 rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-md font-semibold mb-1">{cert.title}</h3>

            <p className="text-xs text-gray-300">
              {cert.issuer}
            </p>

            <p className="text-xs text-gray-400 mb-2">
              {cert.date}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300 underline"
            >
              View →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;