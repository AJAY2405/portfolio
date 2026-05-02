// import { useState } from 'react'

// import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Tech from './components/Tech'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Certificates from './components/Certificates'

// function App() {
 
  

//   return (
//     <>
     
//       <main className="flex flex-col items-centerpx-4 md:px-8 
//       lg:px-16">
//         <div className="fixed-z-10 min-h-screen w-full
//           [background:radial-gradient(125%_115%_at_40%_50%,#000_40%,#63e_100%)]">
//         <Navbar />
//          <Hero />
//          <Tech />
//          <Projects />
//          <Certificates/> 
//          <Contact />
//    </div>
      
//       </main>    
//     </>
//   )
// }

// export default App


import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certificates from './components/Certificates'
import CanvasBackground from './components/CanvasBackground'

function App() {
  return (
    <>
      <main className="relative flex flex-col items-center px-4 md:px-8 lg:px-16">

        {/* Matte Black Background + Animation */}
        <div className="fixed top-0 left-0 w-full h-full bg-black -z-10">
          <CanvasBackground />
        </div>

        {/* Main Content */}
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Certificates />
        <Contact />

      </main>
    </>
  )
}

export default App