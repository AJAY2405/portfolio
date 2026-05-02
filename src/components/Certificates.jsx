// // src/components/Certificates.jsx
// import React from "react";

// function Certificates() {
//   const certificates = [
//     {
//       title: "SQL",
//       issuer: "HackerRank",
//       date: "7 Oct 2025",
//       link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833911/sql_basic_certificate_kuyqa3.pdf",
//     },
//     {
//       title: "Java",
//       issuer: "HackerRank",
//       date: "7 Oct 2025",
//       link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833939/java_basic_certificate_qmpe5f.pdf",
//     },
//     {
//       title: "Data Science & Analytics",
//       issuer: "HP LIFE",
//       date: "15 July 2025",
//       link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1759833891/HP_CERTIFICATE_bvbe4i.pdf",
//     },
//     {
//       title: "Microsoft Excel",
//       issuer: "Udemy",
//       date: "12 Feb 2026",
//       link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8de4b1f3-2a46-4622-afac-43fb4a8cf194.pdf",
//     },
//     {
//       title: "Konark [Crown For Code]",
//       issuer: "PDUIIC/K26/CFC/210",
//       date: "17 Feb 2026",
//       link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1773588144/Konark_26_Participation_Certificate_162_1_yaditk.pdf",
//     },
//     {
//       title: "Smart GJUS&T Hackathon 2025",
//       issuer: "PDUIIC/SIH25/PR/T37/222",
//       date: "18 September 2025",
//       link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1773588151/Hackathon_certificate_iazzhy.pdf",
//     },
//   ];

//   return (
//     <section
//       id="certificates"
//       className="w-full py-12 px-4 md:px-8 lg:px-16 text-white"
//     >
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
//         Certificates
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {certificates.map((cert, index) => (
//           <div
//             key={index}
//             className="bg-[#111] border border-purple-500 rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
//           >
//             <h3 className="text-md font-semibold mb-1">{cert.title}</h3>

//             <p className="text-xs text-gray-300">
//               {cert.issuer}
//             </p>

//             <p className="text-xs text-gray-400 mb-2">
//               {cert.date}
//             </p>

//             <a
//               href={cert.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm text-purple-400 hover:text-purple-300 underline"
//             >
//               View →
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Certificates;







import React from "react";
import { motion } from "framer-motion";

// Animation
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

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
    {
      title: "Konark [Crown For Code]",
      issuer: "PDUIIC/K26/CFC/210",
      date: "17 Feb 2026",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1773588144/Konark_26_Participation_Certificate_162_1_yaditk.pdf",
    },
    {
      title: "Smart GJUS&T Hackathon 2025",
      issuer: "PDUIIC/SIH25/PR/T37/222",
      date: "18 September 2025",
      link: "https://res.cloudinary.com/dfxr85udp/image/upload/v1773588151/Hackathon_certificate_iazzhy.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center 
      min-h-screen gap-12 px-4 md:px-14 py-20"
    >
      {/* Heading */}
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">
          Certificates
        </h2>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">

        {certificates.map((cert, index) => (
          <ScrollReveal key={index}>
            <div
              className="group bg-black/40 border border-gray-800 rounded-2xl p-5 
              hover:border-gray-600 transition-all duration-300 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-gray-400 mt-1">
                {cert.issuer}
              </p>

              {/* Date */}
              <p className="text-xs text-gray-500 mt-1">
                {cert.date}
              </p>

              {/* Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm 
                border border-gray-700 text-gray-300 rounded-full
                hover:bg-white hover:text-black hover:border-white
                transition duration-300"
              >
                View Certificate
              </a>
            </div>
          </ScrollReveal>
        ))}

      </div>
    </section>
  );
}

export default Certificates;