import React from 'react';
import { motion } from 'framer-motion'

const experiences = [
    {
        company: 'College MiniProjects',
        role: 'FullStack Developer',
        period: 'December 2024 - May 2025',
        description: [
            'Created a full-stack web application using React.js and Flask-Python.',
            'Created a 3D model of a rotating Molecule using Three.js.',
        ]
    },
    {
        company: 'ShadowFox Technologies',
        role: 'Web Developer',
        period: 'May 2025 - Present',
        description: [
            'Developed responsive web applications using React.js .',
            'Learned and implemented best practices in web development.',
        ]
    }
];

const Experience = ({ setActiveSection }) => {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.section
            id="experience"
            className="experience-section"
            onViewportEnter={() => setActiveSection('experience')}
        >
            <motion.div
                className="section-header"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                variants={fadeIn}
            >
                <h2>Experience</h2>
                <div className="divider"></div>
            </motion.div>

            <motion.div
                className="experience-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="experience-item"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>{exp.role} <span>@ {exp.company}</span></h3>
                                <span className="period">{exp.period}</span>
                            </div>
                            <ul className="experience-description">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Experience