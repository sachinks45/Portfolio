import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Name from './components/Name'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  // Update the background transform colors
  const background = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#0a0b1a", "#111226", "#161832", "#111226", "#0d0e20", "#0a0b1a"]
  )

  return (
    <motion.div 
      className="app-container"
      style={{ backgroundColor: background }}
      ref={ref}
    >
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.div className="section-container">
        <Name setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Education setActiveSection={setActiveSection} />
        <Experience setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </motion.div>
    </motion.div>
  )
}

export default App