import { motion } from 'framer-motion'

const education = [
  {
    id: 1,
    degree: "CBSE Class 10",
    institution: "Jawahar Navodaya Vidyalaya, Kozhikode",
    year: "2019-2020",
    description: "Completed with a final score of 86.5% in final exams."
  },
  {
    id: 2,
    degree: "CBSE Class 12",
    institution: "Kendriya Vidyalaya, Kozhikode",
    year: "2021-2022",
    description: "Completed with a focus on Science and Mathematics. Scored 88% in final exams."
  },
  {
    id: 3,
    degree: "B.Tech in Computer Science",
    institution: "Cochin University of Science and Technology, Kochi",
    year: "2022-Present",
    description: "Currently pursuing a Bachelor of Technology in Computer Science. Engaged in various projects and internships to enhance practical skills."
  }
]

const Education = ({ setActiveSection }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      id="education"
      className="education-section"
      onViewportEnter={() => setActiveSection('education')}
    >
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <h2>Education</h2>
        <div className="divider"></div>
      </motion.div>

      <motion.div
        className="education-timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
      >
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{edu.degree}</h3>
                <span className="year">{edu.year}</span>
              </div>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Education