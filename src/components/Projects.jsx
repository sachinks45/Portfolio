import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Molecular toxicity Prediction",
    description: "A machine learning model to predict the toxicity of chemical compounds using molecular descriptors.",
    tags: ["React", "Python-Flask", "ThreeJS"],
    image: "toxic.jpeg",
    link: "https://github.com/sachinks45/MolTox"
  },
  {
    id: 2,
    title: "Thaikkudam Band",
    description: "A music band website showcasing their albums, events, and merchandise.",
    tags: ["HTML", "CSS", "JS", "QRcode.js"],
    image: "thaikkudam.png",
    link: "https://github.com/sachinks45/thaikkudam"
  },
  {
    id: 3,
    title: "Pomodoro Timer",
    description: "A productivity tool that uses the Pomodoro technique to help users manage their time effectively.",
    tags: ["HTML", "CSS", "JS"],
    image: "pomodoro.png",
    link: "https://github.com/sachinks45/pomodoro-timer"
  }
]

const Projects = ({ setActiveSection }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.section 
      id="projects"
      className="projects-section"
      onViewportEnter={() => setActiveSection('projects')}
    >
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <h2>My Projects</h2>
        <div className="divider"></div>
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={fadeIn}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.link} className="view-btn">View Project</a>
              </div>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects