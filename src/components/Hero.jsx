import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div id="home" className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/Images/image.jpg" // ✅ use relative path from public folder
            alt="Ajay Sahani"
            className='w-[300px] h-[450px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
              transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-indigo-600
              md:w-[350px]'
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'
        >
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl'>
            AJAY SAHANI
          </h1>
          <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl'>
            Web Developer
          </h3>
          <p className='md:text-base text-pretty text-sm text-white'>
          Hi, I'm Ajay Sahani, a passionate and dedicated B.Tech student in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I’m currently studying at Guru Jambheshwar University of Science and Technology, Hisar, Haryana.
          </p>
          <p className='md:text-base text-pretty text-sm text-white'>
          I have a strong interest in building smart and scalable web applications. Alongside my core studies, I’m also exploring the MERN stack (MongoDB, Express.js, React, Node.js) to enhance my skills in full-stack development. I'm always eager to learn new technologies and take on challenges that help me grow as a developer.
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
