import React from "react";
import { motion } from "framer-motion";

// ✅ Web Development Projects
// ✅ Web Development Projects
const webDevProjects = [
  {
    image: "/Images/job.png",
    title: "Job Portal for Educators",
    description:
      "Developed a full-stack MERN Job Portal with recruiter and candidate dashboards using role-based access. Implemented JWT authentication, RESTful APIs, and Cloudinary for secure resume and logo storage.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
    liveLink: "https://online-frontend-three.vercel.app/",
    frontendGithub: "https://github.com/AJAY2405/online-frontend",
    backendGithub: "https://github.com/AJAY2405/online_backend",
  },
  {
    image: "/Images/3.png",
    title: "Coaching Management System",
    description:
      "Engineered a role-based MERN platform with Teacher and Student dashboards for test management and notes sharing. Implemented JWT authentication, RESTful APIs, and secure file handling with Cloudinary.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind",
      "Cloudinary",
    ],
    liveLink: "https://exam-frontend-lilac.vercel.app/",
    frontendGithub: "https://github.com/AJAY2405/Exam_Frontend",
    backendGithub: "https://github.com/AJAY2405/Exam_Backend",
  },
  {
    image: "/Images/4.png",
    title: "Currency Converter",
    description:
      "Built a real-time currency converter using exchange rate APIs with a responsive and fast user interface for instant currency calculations.",
    technologies: ["API", "HTML", "CSS", "JavaScript"],
    liveLink: "https://currency-five-pearl.vercel.app/",
    frontendGithub: "https://github.com/AJAY2405/CURRENCY",
  },
  {
    image: "/Images/5.png",
    title: "E-commerce Website",
    description:
      "Built a full-stack e-commerce platform with product management, cart functionality, and admin controls. Integrated Razorpay payments, JWT-based authentication, and Cloudinary image uploads using Multer.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "Cloudinary"],
    liveLink: "https://e-commerce-frontend-phi-eight.vercel.app/",
    frontendGithub: "https://github.com/AJAY2405/e-commerce-frontend",
    backendGithub: "https://github.com/AJAY2405/ecommerce-backend",
  },
  {
    image: "/Images/E-learning.png",
    title: "E-Learning Website",
    description:
      "Developed a MERN-based E-Learning platform with course browsing, authentication, and secure backend APIs. Implemented email notifications using NodeMailer and media storage using Cloudinary.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Cloudinary",
      "NodeMailer",
    ],
    liveLink: "https://portfolio-ajay-three.vercel.app/",
    frontendGithub: "https://github.com/AJAY2405/MDA-Learning",
    backendGithub: "https://github.com/AJAY2405/E-Learning-Backend",
  },
];


// ✅ Data Analyst Projects
const dataAnalystProjects = [
  {
    image: "/Images/olaproject.png",
    title: "OLA Ride Booking Dashboard",
    description:
      "Built an interactive Power BI dashboard analyzing ride bookings, cancellations, revenue trends, and customer behavior to support data-driven decisions.",
    technologies: ["Power BI", "Excel", "SQL"],
    github: "https://github.com/AJAY2405/Ola-Project",
  },
  {
    image: "/Images/madhav.png",
    title: "E-Commerce Sales Dashboard",
    description:
      "Designed a Power BI dashboard providing insights into sales amount, profit, and quantity sold across categories for business performance analysis.",
    technologies: ["Power BI", "Excel"],
    github: "https://github.com/AJAY2405/Madhav_store_dashboard",
  },
  {
    image: "/Images/super.png",
    title: "Super Store Sales Dashboard",
    description:
      "Created a Power BI dashboard analyzing sales performance, shipping trends, and regional performance to identify business growth opportunities.",
    technologies: ["Power BI", "Excel"],
    github: "https://github.com/AJAY2405/PowerBI-_project",
  },
  {
    image: "/Images/blinkit.png",
    title: "Blinkit Sales Dashboard",
    description:
      "Developed an interactive dashboard analyzing Blinkit’s sales, product performance, and revenue insights using Power BI and Excel.",
    technologies: ["Power BI", "Excel"],
    github: "https://github.com/AJAY2405/BLINKIT/tree/main/BLINKIT",
  },
];

// ✅ Scroll animation
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    {children}
  </motion.div>
);

// ✅ Project Card
const ProjectCard = ({ project }) => (
  <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
      
      {/* Image → Opens Live Project */}
      <a
        href={project.liveLink || project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-[300px] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
        />
      </a>

      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-400 mt-2">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-700 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          {project.frontendGithub && (
            <a
              href={project.frontendGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Frontend Code
            </a>
          )}

          {project.backendGithub && (
            <a
              href={project.backendGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Backend Code
            </a>
          )}

          {project.github && !project.frontendGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

// ✅ Main Projects Component
function Projects() {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-4 md:px-14 md:py-24"
    >
      {/* Web Development */}
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

      {/* Data Analyst */}
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