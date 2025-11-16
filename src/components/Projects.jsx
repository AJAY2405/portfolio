import React from 'react';
import { motion } from 'framer-motion';

// ✅ Web Development Projects
const webDevProjects = [
  {
    image: "/Images/job.png",
    title: "Job Portal for Educators",
    description:
      "A full-stack MERN Job Portal designed for educators to find teaching opportunities in schools. Features include user authentication, recruiter/company onboarding, job posting, and job applications. Images like resumes or company logos are securely stored using Cloudinary.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
    frontendLink: "https://online-frontend-three.vercel.app/",
  },
  {
    image: "/Images/3.png",
    title: "Coaching Management System",
    description:
      "A full-stack MERN platform for coaching institutes featuring secure authentication, role-based access, admin-controlled test creation, student result management, notice board system, and PDF notes upload with Cloudinary.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Cloudinary"],
    frontendLink: "https://exam-frontend-lilac.vercel.app/",
  },
  {
    image: "/Images/4.png",
    title: "Currency Converter",
    description:
      "Real-time currency converter using exchange rate API. Converts between various currencies with a clean and fast UI.",
    technologies: ["API", "HTML", "CSS", "JavaScript"],
    frontendLink: "https://currency-five-pearl.vercel.app/",
  },
  {
    image: "/Images/5.png",
    title: "E-commerce Website",
    description:
      "Full-stack e-commerce site using Node.js, Express, and MongoDB with product browsing, cart, and secure checkout.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "Cloudinary"],
    frontendLink: "https://e-commerce-frontend-phi-eight.vercel.app/",
  }
];

// ✅ Data Analyst Projects (GitHub only, no frontend links)
const dataAnalystProjects = [
  {
    image: "/Images/olaproject.png",
    title: "OLA Ride Booking Dashboard",
    description:
      "A Power BI dashboard built to analyze OLA ride data between 2nd July to 28th July 2024. It presents insights on booking trends, cancellations by driver and customer, ride revenue by payment method, top customers, and satisfaction ratings.",
    technologies: ["Power BI", "Excel", "SQL"],
    link: "https://github.com/AJAY2405/Ola-Project"
  },
  {
    image: "/Images/madhav.png",
    title: "E-Commerce Sales Dashboard",
    description:
      "This Power BI dashboard provides detailed insights into e-commerce performance, including total sales amount, profit, quantity sold, and average order value.",
    technologies: ["Power BI", "Excel"],
    link: "https://github.com/AJAY2405/Madhav_store_dashboard"
  },
  {
    image: "/Images/super.png",
    title: "Super Store Sales Dashboard",
    description:
      "An advanced Power BI dashboard that analyzes sales, profit, quantity, and shipping performance across different segments and categories.",
    technologies: ["Power BI", "Excel"],
    link: "https://github.com/AJAY2405/PowerBI-_project"
  },
  {
    image: "/Images/blinkit.png",
    title: "Blinkit Sales Dashboard",
    description:
      "An interactive Power BI dashboard analyzing Blinkit’s sales, outlet distribution, and product performance.",
    technologies: ["Power BI", "Excel"],
    link: "https://github.com/AJAY2405/BLINKIT/tree/main/BLINKIT"
  }
];

// ✅ Scroll animation wrapper
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

// ✅ Project Card Component
const ProjectCard = ({ project }) => (
  <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <a
        href={project.frontendLink || project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
      </a>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-lg bg-black px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {project.frontendLink && (
            <a
              href={project.frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-sm rounded-full font-medium transition-transform duration-300 hover:scale-105 w-max"
            >
              Live Project
            </a>
          )}
          {!project.frontendLink && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-sm rounded-full font-medium transition-transform duration-300 hover:scale-105 w-max"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

// ✅ Projects Component
function Projects() {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-4 md:px-14 md:py-24"
    >
      {/* Web Development Projects */}
      <ScrollReveal>
        <h2 className="text-4xl font-light text-white md:text-6xl">
          Web Development [Projects]
        </h2>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {webDevProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Data Analyst Projects */}
      <ScrollReveal>
        <h2 className="text-4xl font-light text-white md:text-6xl pt-20">
          Data Analyst [Projects]
        </h2>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {dataAnalystProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
