# Personal Portfolio Website

A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and a dynamic color-changing background.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and effects
- **Dynamic Background**: Color-changing background based on scroll position
- **Interactive Sections**: 
  - Home
  - About
  - Projects
  - Skills
  - Education
  - Experience
  - Contact
- **Contact Form**: Integrated with EmailJS for functional contact form
- **Modern UI/UX**: Clean and professional design with attention to detail

## 🚀 Technologies Used

- React 19
- Framer Motion
- EmailJS
- CSS3
- Vite
- ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sachinks45/Portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Using Email.js add the required id into the contact.jsx file 

5. Start the development server:
```bash
npm run dev
```

## 🛠️ Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Name.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🎨 Customization

- Color scheme can be modified in `src/index.css`
- Project data can be updated in respective component files
- Animations can be adjusted using Framer Motion properties

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔑 Key Features Explained

### Dynamic Background
The background color changes smoothly as the user scrolls through the page, creating an engaging visual experience.

### Animated Sections
Each section features carefully crafted animations that trigger when they come into view.

### Interactive Navigation
The navigation bar highlights the current section and provides smooth scrolling to different parts of the portfolio.

### Skill Visualization
Skills are displayed with animated progress bars, providing a visual representation of proficiency levels.

