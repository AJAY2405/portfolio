// import React from 'react';
// import { motion } from 'framer-motion'; // ✅ Correct import

// // ✅ Use image URLs from /public/Images/
// const projectsData = [
//   {
//     image: "/Images/2.png",
//     title: "TODO APP",
//     description: "This to-do app allows users to create, edit, and delete tasks with a simple interface. Built using HTML, CSS, and JavaScript, it provides a smooth and responsive experience. It helps users stay organized and manage their tasks effectively.",
//     technologies: ["HTML", "CSS", "JAVASCRIPT"],
//   },
//   {
//     image: "/Images/3.png",
//     title: "Password Generator",
//     description: "This React Vite app allows users to securely create and manage passwords with ease. It uses modern React features and Vite's fast build tool for a smooth experience. The app ensures password safety with features like strong password generation and secure storage",
//     technologies: ["React", "Tailwind"],
//   },
//   {
//     image: "/Images/4.png",
//     title: "Currency Converter",
//     description: "This currency converter app uses an API to provide real-time exchange rates and allows users to convert between various currencies. Built with HTML, CSS, and JavaScript, it offers an intuitive interface for quick conversions. It ensures accurate and up-to-date currency exchange information for users worldwide.",
//     technologies: ["API", "HTML", "CSS", "JAVASCRIPT"],
//   },
//   {
//     image: "/Images/5.png",
//     title: "E-commerce Website",
//     description: "This e-commerce website is built using Node.js and Express for backend functionality, with MongoDB for secure data storage. It offers a seamless shopping experience with features like product browsing, cart management, and secure checkout. The frontend is designed with HTML, CSS, and JavaScript for a responsive and user-friendly interface.",
//     technologies: ["Node.js", "Express.js", "MongoDB"],
//   }
// ];

// // ✅ Corrected ScrollReveal component
// const ScrollReveal = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ProjectCard = ({ project }) => {
//   return (
//     <ScrollReveal>
//       <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
//         <img
//           src={project.image}
//           alt={project.title}
//           className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
//         />
//         <div className='flex flex-col gap-5'>
//           <div className='flex flex-col gap-3'>
//             <div className='text-xl font-semibold'>{project.title}</div>
//             <p className='text-gray-400'>{project.description}</p>
//           </div>
//           <div className='flex flex-wrap gap-5'>
//             {project.technologies.map((tech, index) => (
//               <span key={index} className='rounded-lg bg-black p-3'>
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </ScrollReveal>
//   );
// };

// function Projects() {
//   return (
//     <div
//       id="projects"
//       className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'
//     >
//       <ScrollReveal>
//         <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
//       </ScrollReveal>
//       <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
//         {projectsData.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
import React from 'react';
import { motion } from 'framer-motion';

const webDevProjects = [
  {
    image: "/Images/2.png",
    title: "Tic Tac Toe Game",
    description: "This Tic Tac Toe game allows two players to take turns marking X and O on a 3×3 grid. The game detects wins, draws, and displays results in real-time. Built using HTML, CSS, and JavaScript with a clean and interactive UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://tictocto-mhuq.vercel.app/"
  },
  {
    image: "/Images/3.png",
    title: "Password Generator",
    description: "This React Vite app helps users securely create and manage passwords. Features strong password generation and modern UI.",
    technologies: ["React", "Tailwind"],
    link: "https://copypassword.vercel.app/"
  },
  {
    image: "/Images/4.png",
    title: "Currency Converter",
    description: "Real-time currency converter using exchange rate API. Converts between various currencies with a clean and fast UI.",
    technologies: ["API", "HTML", "CSS", "JavaScript"],
    link: "https://currency-five-pearl.vercel.app/"
  },
  {
    image: "/Images/5.png",
    title: "E-commerce Website",
    description: "Full-stack e-commerce site using Node.js, Express, and MongoDB with product browsing, cart, and secure checkout.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React"],
    link: "https://e-commerce-frontend-phi-eight.vercel.app/"
  }
];

const dataAnalystProjects = [
 {
  image: "/Images/olaproject.png",
  title: "OLA Ride Booking Dashboard",
  description: "A Power BI dashboard built to analyze OLA ride data between 2nd July to 28th July 2024. It presents insights on booking trends, cancellations by driver and customer, ride revenue by payment method, top customers, and satisfaction ratings. Data was cleaned and transformed using Excel and SQL, and visualized using Power BI.",
  technologies: ["Power BI", "Excel", "SQL"],
  link: "https://github.com/AJAY2405/Ola-Project" // Replace with actual link if hosted
},
{
  image: "/Images/madhav.png",
  title: "E-Commerce Sales Dashboard",
  description: "This Power BI dashboard provides detailed insights into e-commerce performance, including total sales amount, profit, quantity sold, and average order value. It visualizes state-wise performance, customer-wise revenue, category and sub-category contributions, and monthly profit trends. The dashboard supports slicers for quarter and state selection to enable dynamic filtering.",
  technologies: ["Power BI", "Excel"],
  link: "https://github.com/AJAY2405/Madhav_store_dashboard" // Replace with actual link
},

{
  image: "/Images/super.png",
  title: "Super Store Sales Dashboard",
  description: "An advanced Power BI dashboard that analyzes sales, profit, quantity, and shipping performance across different segments and categories. It includes geographic insights, yearly trends, and customer segment breakdowns. A second dashboard provides a 15-day sales forecast using historical data trends. Built using Excel for data sourcing and Power BI for modeling and visualization.",
  technologies: ["Power BI", "Excel"],
  link: "https://github.com/AJAY2405/PowerBI-_project" // Replace with actual Power BI report link
},
  {
  image: "/Images/python+sql.png",
  title: "Data Analysis with Python & SQL",
  description: "Performed end-to-end data analysis using SQL for data extraction and Python for cleaning, exploration, and visualization. Utilized libraries like Pandas, Matplotlib, and Seaborn to generate insights from real-world datasets. Focused on querying large datasets, performing joins, and visualizing trends to support data-driven decisions.",
  technologies: ["Python", "SQL", "Pandas", "Matplotlib"],
  link: "https://github.com/AJAY2405/Python-SQL" // Replace with actual GitHub or nbviewer link
}

];

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

const ProjectCard = ({ project }) => (
  <ScrollReveal>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
        />
      </a>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>{project.title}</div>
          <p className='text-gray-400'>{project.description}</p>
        </div>
        <div className='flex flex-wrap gap-3'>
          {project.technologies.map((tech, index) => (
            <span key={index} className='rounded-lg bg-black px-3 py-1 text-sm'>
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className='mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-sm rounded-full font-medium transition-transform duration-300 hover:scale-105 w-max'
        >
          View Project
        </a>
      </div>
    </div>
  </ScrollReveal>
);

function Projects() {
  return (
    
    <div
      id="projects"
      className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-4 md:px-14 md:py-24'
    >

      {/* Web Development Projects */}
      <ScrollReveal>
        <h2 className='text-4xl font-light text-white md:text-6xl'>Web Development [Projects]</h2>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {webDevProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Data Analyst Projects */}
      <ScrollReveal>
        <h2 className='text-4xl font-light text-white md:text-6xl pt-20'>Data Analyst [Projects]</h2>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {dataAnalystProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
