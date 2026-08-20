# SAZIDDEVELOPER Portfolio

![Hero Section Preview](./favicon.png)

A high-performance, cinematic developer portfolio web application built with **React**, **Vite**, **Tailwind CSS**, **GSAP**, and **Lenis Smooth Scroll**. Designed with modern dark-mode aesthetics, rich micro-interactions, scroll-driven parallax effects, and ultra-responsive mobile viewports.

---

## ✨ Features

- 🎬 **Cinematic Motion & Animations**: GSAP ScrollTrigger timeline reveals, letter-scramble preloader, and smooth image parallax depth.
- 🌊 **Inertial Smooth Scrolling**: Powered by Lenis smooth scroll engine with custom exponential deceleration curves synchronized to GSAP's ticker loop.
- 📱 **Fully Responsive & Scalable**: Optimized for all device viewports (desktop, tablets, and mid-range mobile devices down to 320px).
- 💼 **Featured Project Showcase**: Alternating project grid layout with tech stack badges, live demo links, and GitHub repository links.
- 🛠️ **Process Workflow Cards**: Interactive step-by-step development process breakdown (`Define` → `Design` → `Build` → `Launch`).
- 📧 **Direct Contact Integration**: Integrated contact section featuring EmailJS form submission capabilities and direct social links.

---

## 🛠️ Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Core Frontend** | React 19, JavaScript (ES6+), HTML5 |
| **Styling & Design** | Tailwind CSS v4, Modern CSS Glassmorphism |
| **Animation & Physics** | GSAP 3 (GreenSock), ScrollTrigger, Lenis Smooth Scroll |
| **Form Services** | EmailJS Browser Integration |
| **Build & Tooling** | Vite, PostCSS, ESLint, Node.js |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Project images, graphics, and video assets
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Floating navbar with mobile drawer overlay
│   │   ├── Hero.jsx         # Scramble text preloader & hero graphic
│   │   ├── About.jsx        # Bio, interactive text reveal & skills marquee
│   │   ├── Services.jsx     # Development process cards & services accordion
│   │   ├── Project.jsx      # Featured project showcase & live demo links
│   │   ├── Contact.jsx      # Contact info & EmailJS contact form
│   │   └── Footer.jsx       # Branding footer & social links
│   ├── hooks/
│   │   └── useLenis.js      # Lenis smooth scroll + GSAP ScrollTrigger sync hook
│   ├── App.jsx              # Main app entry layout
│   ├── index.css            # Custom CSS & marquee keyframe animations
│   └── main.jsx             # React DOM root render
├── index.html               # Main HTML template
├── package.json             # Dependencies & scripts
└── vite.config.js           # Vite dev server configuration
```

