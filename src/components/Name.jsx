import { motion } from 'framer-motion'

const Name = ({ setActiveSection }) => {
  return (
    <motion.section 
      id="home"
      className="name-section"
      onViewportEnter={() => setActiveSection('home')}
    >
      <div className="name-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-content"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">SACHIN K S</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build exceptional digital experiences with modern web technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="cta-buttons"
          >
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="image-content"
        >
          {/* <div className="profile-image"></div> */}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Name