import React from 'react';
import { motion } from 'framer-motion'; // ✅ Correct import

// ✅ Use image URLs from /public/Images/
const projectsData = [
  {
    image: "/Images/1.png",
    title: "WEATHER APP",
    description: "This weather app provides real-time weather updates using a reliable weather API. Users can check current conditions, temperature, humidity, and forecast by entering their city. It features a simple, user-friendly interface for quick and easy access to weather data.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    image: "/Images/2.png",
    title: "TODO APP",
    description: "This to-do app allows users to create, edit, and delete tasks with a simple interface. Built using HTML, CSS, and JavaScript, it provides a smooth and responsive experience. It helps users stay organized and manage their tasks effectively.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    image: "/Images/3.png",
    title: "Password Generator",
    description: "This React Vite app allows users to securely create and manage passwords with ease. It uses modern React features and Vite's fast build tool for a smooth experience. The app ensures password safety with features like strong password generation and secure storage",
    technologies: ["React", "Tailwind"],
  },
  {
    image: "/Images/4.png",
    title: "Currency Converter",
    description: "This currency converter app uses an API to provide real-time exchange rates and allows users to convert between various currencies. Built with HTML, CSS, and JavaScript, it offers an intuitive interface for quick conversions. It ensures accurate and up-to-date currency exchange information for users worldwide.",
    technologies: ["API", "HTML", "CSS", "JAVASCRIPT"],
  },
  {
    image: "/Images/5.png",
    title: "E-commerce Website",
    description: "This e-commerce website is built using Node.js and Express for backend functionality, with MongoDB for secure data storage. It offers a seamless shopping experience with features like product browsing, cart management, and secure checkout. The frontend is designed with HTML, CSS, and JavaScript for a responsive and user-friendly interface.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
  }
];

// ✅ Corrected ScrollReveal component
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
        />
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>
          </div>
          <div className='flex flex-wrap gap-5'>
            {project.technologies.map((tech, index) => (
              <span key={index} className='rounded-lg bg-black p-3'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

function Projects() {
  return (
    <div
      id="projects"
      className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'
    >
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
