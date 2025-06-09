import { motion } from 'framer-motion'

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'home', label: 'Home' },
    { name: 'about', label: 'About' },
    { name: 'projects', label: 'Projects' },
    { name: 'skills', label: 'Skills' },
    { name: 'education', label: 'Education' },
    { name: 'experience', label: 'Experience' },
    { name: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="nav-container">
        <div className="logo">
          <a 
            href="#home" 
            onClick={() => setActiveSection('home')}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Portfolio
          </a>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name}`}
                className={activeSection === item.name ? 'active' : ''}
                onClick={() => setActiveSection(item.name)}
              >
                {item.label}
                {activeSection === item.name && (
                  <motion.span
                    layoutId="underline"
                    className="underline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar