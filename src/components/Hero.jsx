// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function Hero() {
//   const roles = [
//     "Web Developer",
//     "Machine Learning",
//     "Problem Solver [JAVA]",
//     "Power BI",
//   ];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }, 2000); // Rotate every 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div
//       id="home"
//       className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
//     >
//       <div className="flex flex-col items-center justify-center gap-10 text-white">
//         {/* Animated Image */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <img
//             src="/Images/image31.jpg"
//             alt="Ajay Sahani"
//             className="w-[100px] h-[120px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
//               transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-indigo-600
//               md:w-[110px]  md:h-[120px]  "
//           />
//         </motion.div>

//         {/* Animated Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
//         >
//           <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
//             AJAY SAHANI
//           </h1>

//           {/* Rotating Role Text - Left to Right Animation */}
//           <AnimatePresence mode="wait">
//             <motion.h3
//               key={roles[index]}
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 100 }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl"
//             >
//               {roles[index]}
//             </motion.h3>
//           </AnimatePresence>

//           <p className="md:text-base text-pretty text-sm text-white">
//             I am a Full Stack Developer specializing in building scalable and
//             responsive web applications using the MERN stack (MongoDB,
//             Express.js, React, and Node.js). I enjoy developing end-to-end
//             solutions including RESTful APIs, authentication systems, and modern
//             user interfaces that provide a smooth user experience. I focus on
//             writing clean, efficient code and building real-world applications
//             that solve practical problems.
//           </p>

//           <p className="md:text-base text-pretty text-sm text-white">
//             Along with web development, I am also interested in Machine Learning
//             and Data Analytics. I enjoy working with data, analyzing patterns,
//             and building intelligent solutions using Python, Power BI, and
//             analytical tools. My goal is to combine software development with
//             data-driven insights to create smarter and more impactful
//             applications.
//           </p>

//           {/* Resume Button */}
//           <motion.a
//             href="https://res.cloudinary.com/dfxr85udp/image/upload/v1776338851/Ajay_Sahani_10_gxzxox.pdf" // Replace with the actual link to your resume file
//             download="Ajay_Sahani_Resume.pdf"
//             className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105"
//           >
//             Download Resume
//           </motion.a>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Hero;








import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const roles = [
    "Web Developer",
    "Machine Learning",
    "Problem Solver [Java]",
    "Power BI",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-6 md:px-16 lg:px-24"
    >
      <div className="flex flex-col items-center gap-8 text-center text-white max-w-[800px]">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/Images/image31.jpg"
            alt="Ajay Sahani"
            className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full object-cover
            border-2 border-white/20 shadow-lg shadow-white/10
            transition-all duration-300 hover:scale-110 hover:shadow-white/30 mt-20"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-6xl font-semibold text-white"
>
  AJAY SAHANI
</motion.h1>

        {/* Rotating Role */}
        <div className="h-[40px] md:h-[50px]">
          <AnimatePresence mode="wait">
            <motion.h3
              key={roles[index]}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-gray-300"
            >
              {roles[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="text-sm md:text-base text-gray-400 leading-relaxed"
>
  I am a{" "}
  <span className="text-white font-semibold">Full Stack Developer</span>{" "}
  specializing in building scalable applications using{" "}
  <span className="text-gray-200 font-semibold underline underline-offset-4 decoration-gray-500">
    MERN Stack
  </span>{" "}
  (MongoDB, Express.js, React, Node.js). I develop{" "}
  <span className="text-white font-semibold">REST APIs</span>,{" "}
  <span className="text-white font-semibold">Authentication Systems</span>, and
  modern UI with smooth user experience.
</motion.p>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="text-sm md:text-base text-gray-400 leading-relaxed"
>
  I also work in{" "}
  <span className="text-gray-200 font-semibold underline underline-offset-4 decoration-gray-500">
    Machine Learning
  </span>{" "}
  and{" "}
  <span className="text-gray-200 font-semibold underline underline-offset-4 decoration-gray-500">
    Data Analytics
  </span>
  . I enjoy analyzing data, discovering patterns, and building solutions using{" "}
  <span className="text-white font-semibold">Python</span> and{" "}
  <span className="text-white font-semibold">Power BI</span>.
</motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base text-gray-400 leading-relaxed"
        >
          I also work in Machine Learning and Data Analytics using Python and
          Power BI. I enjoy turning data into meaningful insights and building
          intelligent systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-4"
        >
          <a
            href="https://res.cloudinary.com/dfxr85udp/image/upload/v1776338851/Ajay_Sahani_10_gxzxox.pdf"
            download="Ajay_Sahani_Resume.pdf"
            className="px-6 py-3 rounded-full bg-white text-black font-medium
            hover:bg-gray-200 transition-all duration-300"
          >
            Download Resume
          </a>

          <a
            href="#contacts"
            className="px-6 py-3 rounded-full border border-white/30 text-white
            hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;