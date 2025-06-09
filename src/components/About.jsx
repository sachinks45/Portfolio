import { motion } from 'framer-motion'

const About = ({ setActiveSection }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section 
      id="about"
      className="about-section"
      onViewportEnter={() => setActiveSection('about')}
    >
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <h2>About Me</h2>
        <div className="divider"></div>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
        >
          <h3>Who Am I</h3>
          <p>
            I'm a passionate Computer Science B.Tech student currently in my third year, 
            with a strong interest in frontend development and modern web technologies. 
            I enjoy building beautiful, responsive, and user-friendly applications.
          </p>
          <p>
            While I don't have professional experience yet, I am actively working as an intern 
            and always looking for new opportunities to learn and grow in the tech industry.
          </p>
          <div className="personal-info">
            <div className="info-item">
              <span>Name: Sachin k s</span>
           </div>
            <div className="info-item">
              <span>Email:  kssachin406@gmail.com</span>
            </div>
            <div className="info-item">
              <span>From: Kozhikode,Kerala</span>
            </div>
          </div>
          <a href="#contact" className="btn primary">Contact Me</a>
        </motion.div>

        <motion.div
          className="skills-preview"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeIn}
        >
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-tags">
              <span>HTML/CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Redux</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Python-Flask</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <div className="skill-tags">
              <span>Git</span>
              <span>VS Code</span>
              <span>Figma</span>
              <span>Jest</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About