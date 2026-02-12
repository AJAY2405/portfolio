import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700
     bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>

      {/* Logo */}
      <a
        href="#home"
        className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
        text-3xl font-semibold transition-all duration-300 hover:opacity-100'
      >
        Ajay Sahani
      </a>

      {/* Desktop Nav Links */}
      <ul className='hidden md:flex md:gap-10'>
        <a href="#home"><li className='hover:opacity-100 opacity-70 transition'>HOME</li></a>
        <a href="#tech"><li className='hover:opacity-100 opacity-70 transition'>Tech</li></a>
        <a href="#projects"><li className='hover:opacity-100 opacity-70 transition'>Projects</li></a>
        <a href="#contacts"><li className='hover:opacity-100 opacity-70 transition'>Contacts</li></a>
      </ul>

      {/* Desktop Social Icons */}
      <ul className='hidden md:flex gap-6 items-center'>

        <a href="https://www.linkedin.com/in/ajay-sahani-464a38298/" target="_blank" rel="noopener noreferrer">
          <li className='text-2xl text-[#0A66C2] hover:scale-125 transition-transform duration-300'>
            <BsLinkedin />
          </li>
        </a>

        <a href="https://x.com/AJAYSAHANI97389" target="_blank" rel="noopener noreferrer">
          <li className='text-2xl text-[#1DA1F2] hover:scale-125 transition-transform duration-300'>
            <BsTwitter />
          </li>
        </a>

        <a href="https://github.com/AJAY2405" target="_blank" rel="noopener noreferrer">
          <li className='text-2xl text-white hover:scale-125 transition-transform duration-300'>
            <BsGithub />
          </li>
        </a>

        <a href="https://leetcode.com/u/Ajay-Sahnai/" target="_blank" rel="noopener noreferrer">
          <li className='text-2xl text-[#FFA116] hover:scale-125 transition-transform duration-300'>
            <SiLeetcode />
          </li>
        </a>

        <a href="https://www.geeksforgeeks.org/profile/ajaysahani?tab=activity" target="_blank" rel="noopener noreferrer">
          <li className='text-2xl text-[#2F8D46] hover:scale-125 transition-transform duration-300'>
            <SiGeeksforgeeks />
          </li>
        </a>

      </ul>

      {/* Mobile Menu Icon */}
      <BiMenu
        className="block md:hidden text-4xl cursor-pointer"
        onClick={menuOpen}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col gap-10
         border-l border-gray-800 bg-black/95 p-12">

          {/* Mobile Nav Links */}
          <ul className='flex flex-col gap-8 text-lg'>
            <a href="#home" onClick={menuOpen}><li>HOME</li></a>
            <a href="#tech" onClick={menuOpen}><li>Tech</li></a>
            <a href="#projects" onClick={menuOpen}><li>Projects</li></a>
            <a href="#contacts" onClick={menuOpen}><li>Contacts</li></a>
          </ul>

          {/* Mobile Social Icons */}
          <ul className='flex flex-wrap gap-6 items-center'>

            <a href="https://www.linkedin.com/in/ajay-sahani-464a38298/" target="_blank" rel="noopener noreferrer">
              <li className='text-2xl text-[#0A66C2] hover:scale-125 transition-transform duration-300'>
                <BsLinkedin />
              </li>
            </a>

            <a href="https://x.com/AJAYSAHANI97389" target="_blank" rel="noopener noreferrer">
              <li className='text-2xl text-[#1DA1F2] hover:scale-125 transition-transform duration-300'>
                <BsTwitter />
              </li>
            </a>

            <a href="https://github.com/AJAY2405" target="_blank" rel="noopener noreferrer">
              <li className='text-2xl text-white hover:scale-125 transition-transform duration-300'>
                <BsGithub />
              </li>
            </a>

            <a href="https://leetcode.com/u/Ajay-Sahnai/" target="_blank" rel="noopener noreferrer">
              <li className='text-2xl text-[#FFA116] hover:scale-125 transition-transform duration-300'>
                <SiLeetcode />
              </li>
            </a>

            <a href="https://www.geeksforgeeks.org/profile/ajaysahani?tab=activity" target="_blank" rel="noopener noreferrer">
              <li className='text-2xl text-[#2F8D46] hover:scale-125 transition-transform duration-300'>
                <SiGeeksforgeeks />
              </li>
            </a>

          </ul>

        </div>
      )}
    </nav>
  )
}

export default Navbar