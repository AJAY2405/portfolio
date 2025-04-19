import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsLinkedin, BsTwitter, BsYoutube, BsGithub } from 'react-icons/bs'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700
     bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>

      {/* Logo */}
      <a href="#home" className='bg-gradient-to-r from-blue-500 
     to-pink-500 bg-clip-text text-transparent opacity-80 
     text-3xl font-semibold transition-all duration-300
     hover:opacity-100'>Ajay Sahani</a>

      {/* Main Nav Links */}
      <ul className='hidden md:flex md:gap-10'>
        <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>HOME</li>
        </a>
        <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Tech</li>
        </a>
        <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Projects</li>
        </a>
        <a href="#contacts" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Contacts</li>
        </a>
      </ul>

      {/* Social Icons */}
      <ul className='hidden md:flex gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
          <BsYoutube />
        </li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
            <BsLinkedin />
          </li>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-400 hover:opacity-100'>
            <BsTwitter />
          </li>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white hover:opacity-100'>
            <BsGithub />
          </li>
        </a>
      </ul>

      {/* Mobile Menu Toggle */}
      <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12">
          <ul className='flex flex-col gap-8'>
            <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>HOME</li>
            </a>
            <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Tech</li>
            </a>
            <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Projects</li>
            </a>
            <a href="#contacts" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Contacts</li>
            </a>
          </ul>

          <ul className='flex flex-wrap gap-5'>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                <BsYoutube />
              </li>
            </a>
            <a href="www.linkedin.com/in/ajay-sahani-464a38298" target="_blank" rel="noopener noreferrer">
              <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
                <BsLinkedin />
              </li>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-400 hover:opacity-100'>
                <BsTwitter />
              </li>
            </a>
            <a href="https://github.com/AJAY2405" target="_blank" rel="noopener noreferrer">
              <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white hover:opacity-100'>
                <BsGithub />
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
