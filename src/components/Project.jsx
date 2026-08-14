import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Talking Video Portfolio',
    title: (
      <>
        TALKING VIDEO <br />
        <span className="font-light italic text-gray-300 font-serif">Portfolio</span>
      </>
    ),
    category: "AI Video & Interactive Web Experience",
    tools: "React, Framer Motion, AOS, Tailwind CSS, Vercel",
    description: "An interactive video portfolio platform featuring real-time talking presenter videos, dynamic motion animations, smooth scroll interactions, and modern web presentation.",
    image: "https://raw.githubusercontent.com/Hxni786/Talking-Video-Portfolio/main/hero_screenshot.jpg",
    githubLink: "https://github.com/Hxni786/Talking-Video-Portfolio",
    liveDemoLink: "https://talking-video-portfolio.vercel.app/"
  },
  {
    name: 'Spice with Hassan',
    title: (
      <>
        SPICE WITH <br />
        <span className="font-light italic text-gray-300 font-serif">Hassan</span>
      </>
    ),
    category: "Boutique Restaurant & Ordering Management",
    tools: "React Native, Node.js, Express, MySQL",
    description: "A full-stack restaurant management and food ordering application featuring dish customization, interactive menu browsing, live order tracking, and clean database architecture.",
    image: "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/spice_hassan_mockup.png",
    githubLink: "https://github.com/Hxni786/-A-Restaurant-App-Spice-with-Hassan"
  },
  {
    name: 'Editorial Excellence',
    title: (
      <>
        EDITORIAL <br />
        <span className="font-light italic text-gray-300 font-serif">Excellence</span>
      </>
    ),
    category: "Full-Stack Boutique E-commerce Platform",
    tools: "React, Node.js, Express, MySQL, Tailwind",
    description: "Modern full-stack e-commerce web application featuring comprehensive product management, shopping cart functionality, user checkout, and robust database structure.",
    image: "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/screenshot_home.png",
    githubLink: "https://github.com/Hxni786/Hxni-Ecommerce-Store"
  },
  {
    name: 'Bespoke E-store 2.0',
    title: (
      <>
        BESPOKE <br />
        <span className="font-light italic text-gray-300 font-serif">E-Store 2.0</span>
      </>
    ),
    category: "Luxury Minimalist Mobile Commerce",
    tools: "React Native, Expo, Node.js, REST API",
    description: "Cross-platform mobile e-commerce platform offering an intuitive minimalist UI, product catalog, cart flows, and seamless checkout experience.",
    image: "https://raw.githubusercontent.com/Hxni786/E-store2/main/docs/ui-preview.png",
    githubLink: "https://github.com/Hxni786/E-store2"
  },
  {
    name: 'hxni Express',
    title: (
      <>
        HXNI <br />
        <span className="font-light italic text-gray-300 font-serif">Express</span>
      </>
    ),
    category: "Cinematic Parallax Food Delivery Experience",
    tools: "React Native, Expo, GSAP, Parallax Scroll",
    description: "Mobile food delivery app built with cinematic parallax animations, smooth scroll interactions, and modular React Native components.",
    image: "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_express_mockup.png",
    githubLink: "https://github.com/Hxni786/A-food-Delivery-App-hxni-express"
  },
  {
    name: 'NIXH Social',
    title: (
      <>
        NIXH <br />
        <span className="font-light italic text-gray-300 font-serif">Social Engine</span>
      </>
    ),
    category: "Enterprise Multi-User Directory & Social Engine",
    tools: "React Native, Firebase, Node.js, REST API",
    description: "Scalable social directory mobile application featuring user authentication, user profiles, search, real-time messaging, and multi-user interactions.",
    image: "https://raw.githubusercontent.com/Hxni786/Nixh-A-social-Media-App/main/docs/assets/mobile_mockup.png",
    githubLink: "https://github.com/Hxni786/Nixh-A-social-Media-App"
  },
  {
    name: 'TicketVerse',
    title: (
      <>
        TICKET <br />
        <span className="font-light italic text-gray-300 font-serif">Verse</span>
      </>
    ),
    category: "Premium Full-Stack Event Booking Engine",
    tools: "React Native, Node.js, Express, MySQL",
    description: "Full-stack event ticket booking platform featuring seat selections, digital ticket generation, secure checkout, and event management dashboard.",
    image: "https://raw.githubusercontent.com/Hxni786/Ticket-Booking-App/main/mobile/assets/promo1.png",
    githubLink: "https://github.com/Hxni786/Ticket-Booking-App"
  },
  {
    name: 'Nixh Food 2.0',
    title: (
      <>
        NIXH FOOD <br />
        <span className="font-light italic text-gray-300 font-serif">2.0 Ecosystem</span>
      </>
    ),
    category: "Scalable Order Tracking & Delivery Ecosystem",
    tools: "React Native, Node.js, Express, REST API",
    description: "End-to-end food ordering and delivery ecosystem with real-time order status tracking, kitchen updates, and streamlined user navigation.",
    image: "https://raw.githubusercontent.com/Hxni786/Food-Delivery-app-2/main/hero.png",
    githubLink: "https://github.com/Hxni786/Food-Delivery-app-2"
  },
  {
    name: 'Hxni Finance',
    title: (
      <>
        HXNI <br />
        <span className="font-light italic text-gray-300 font-serif">Finance</span>
      </>
    ),
    category: "Advanced Personal Asset & Expense Management",
    tools: "React Native, Node.js, MySQL, Chart.js",
    description: "Comprehensive personal finance manager providing automated budget tracking, expense analytics, visual category breakdowns, and financial reporting.",
    image: "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_finance_mockup.png",
    githubLink: "https://github.com/Hxni786/Expense-Tracker"
  },
  {
    name: 'Hxnix Social App',
    title: (
      <>
        HXNIX <br />
        <span className="font-light italic text-gray-300 font-serif">Community App</span>
      </>
    ),
    category: "Modern Interactive Community Engine",
    tools: "React Native, Firebase, Node.js, Express",
    description: "Cross-platform mobile community app enabling real-time content sharing, user interaction, notifications, and profile customization.",
    image: "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxnix_social_mockup.png",
    githubLink: "https://github.com/Hxni786/Hxnix-Social-Media-App"
  },
  {
    name: '3D Interactive Portfolio',
    title: (
      <>
        3D INTERACTIVE <br />
        <span className="font-light italic text-gray-300 font-serif">Portfolio</span>
      </>
    ),
    category: "Interactive 3D Web Portfolio Experience",
    tools: "React, Three.js, GSAP, Tailwind CSS",
    description: "Immersive 3D interactive web portfolio showcasing projects with 3D model rendering, spatial navigation, dynamic lighting, and interactive animations.",
    image: "https://raw.githubusercontent.com/Hxni786/3d-portfolio-main/main/public/images/preview.png",
    githubLink: "https://github.com/Hxni786/3d-portfolio-main"
  }
];

const Project = ({ onCtaClick }) => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const imageBox = card.querySelector('.project-image-box');
        const img = card.querySelector('.project-image');
        const textBox = card.querySelector('.project-text-box');

        if (imageBox) {
          gsap.fromTo(
            imageBox,
            { y: 50, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (img) {
          gsap.to(img, {
            y: -25,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        if (textBox) {
          gsap.fromTo(
            textBox,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              delay: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    });
  }, []);

  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-8 lg:gap-0 mb-16 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-2 sm:gap-3 flex-wrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-2 pt-1 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
            As a frontend developer using modern ideas, simplicity design and universal visual identification tailored to dedicated and current market.
          </p>
          <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={proj.name} 
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-8 md:gap-12 lg:gap-16 w-full group`}
            >

              {/* Image Side */}
              <div className="project-image-box w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-lg">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="project-text-box w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-4 md:mb-6">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#ccff00]/10 text-[#ccff00] text-xs font-semibold px-3 py-1 rounded-full border border-[#ccff00]/20">
                    {proj.category}
                  </span>
                  <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
                    {proj.tools}
                  </span>
                </div>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                  {proj.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  <a 
                    href={proj.liveDemoLink || proj.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer px-6 py-3 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    {proj.liveDemoLink ? "Live Demo" : "Live Repository"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                  <a 
                    href={proj.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer px-6 py-3 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    GitHub Code
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
