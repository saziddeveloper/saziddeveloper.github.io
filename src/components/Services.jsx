import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Define",
    description: "Understanding your goals, user requirements, and technical constraints to lay a rock-solid foundation for the project."
  },
  {
    number: "02",
    title: "Design",
    description: "Creating intuitive, pixel-perfect user interfaces and wireframes that guarantee an engaging and accessible user experience."
  },
  {
    number: "03",
    title: "Build",
    description: "Developing scalable frontend architectures and secure backend systems using the latest modern tech stack."
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure followed by ongoing support."
  }
];

const servicesData = [
  {
    id: '01',
    title: 'FULL STACK WEB DEVELOPMENT',
    description: 'I build scalable, high-performance web applications using modern frontend frameworks like React.js, coupled with robust backend architecture powered by Node.js, Express, MySQL, MongoDB, and Supabase databases.',
    capabilities: [
      'Responsive Web Apps with React.js & Tailwind CSS',
      'Scalable Server Architecture with Node.js & Express',
      'Database Design & Optimization with MySQL & MongoDB',
      'Supabase Realtime Subscriptions & Auth Integration',
      'Clean, Production-Ready Codebase'
    ],
    buttonText: 'VIEW PROJECTS',
    buttonHref: '#project'
  },
  {
    id: '02',
    title: 'CROSS-PLATFORM MOBILE DEVELOPMENT',
    description: 'I build fast, responsive mobile applications for iOS and Android using React Native and Expo, featuring smooth animations, offline state management, dynamic parallax scrolling, and intuitive user interfaces.',
    capabilities: [
      'React Native & Expo Ecosystem',
      'iOS & Android Cross-Platform UI/UX',
      'Native Feature & API Integration',
      'Smooth Parallax & Gesture Animations',
      'State Management & Local Caching'
    ]
  },
  {
    id: '03',
    title: '3D INTERACTIVE & CANVAS ANIMATIONS',
    description: 'I craft immersive 3D web experiences using Three.js, React Three Fiber (R3F), and GSAP ScrollTrigger, bringing websites to life with spatial 3D models, custom shaders, dynamic lighting, and camera animations.',
    capabilities: [
      'Three.js & React Three Fiber (R3F)',
      'GSAP ScrollTrigger & Timeline Animations',
      'Interactive 3D Models & Lighting',
      'Canvas & Parallax Motion Effects',
      'Smooth 60FPS Performance Optimization'
    ]
  },
  {
    id: '04',
    title: 'BACKEND ARCHITECTURE & DATABASES',
    description: 'I architect secure and reliable server-side systems with well-structured relational (MySQL) and NoSQL (MongoDB, Supabase) databases to handle authentication, real-time data streaming, and security.',
    capabilities: [
      'Node.js & Express Server Development',
      'MySQL Database Schema Design & Queries',
      'MongoDB & Supabase Backend Integration',
      'JWT Authentication & Row Level Security',
      'API Performance & Optimization'
    ]
  },
  {
    id: '05',
    title: 'E-COMMERCE & BUSINESS PLATFORMS',
    description: 'I create custom full-stack solutions including boutique e-commerce stores, restaurant ordering systems, event booking engines, social community platforms, and personal asset management tools.',
    capabilities: [
      'Custom Shopping Cart & Checkout Systems',
      'Restaurant Ordering & Food Delivery Apps',
      'Ticket Booking & Reservation Engines',
      'Financial Trackers & Asset Dashboards',
      'Multi-User Social & Directory Engines'
    ]
  },
  {
    id: '06',
    title: 'TALKING VIDEO & AI AVATAR PORTFOLIOS',
    description: 'I design interactive video portfolio applications and AI-driven avatar experiences that engage visitors with real-time video presentation, speech synthesis, dynamic multimedia showcases, and custom video player controls.',
    capabilities: [
      'Interactive Talking Video Presentation',
      'Framer Motion & AOS Scroll Animations',
      'AI Video Integration & Speech Sync',
      'Custom Video Player Controls & Playback',
      'Responsive Web Portfolio Layouts'
    ],
    buttonText: 'SEE DEMO PORTFOLIO',
    buttonHref: 'https://talking-video-portfolio.vercel.app/'
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);
  
  const titleRef = useRef(null);
  const processGridRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (processGridRef.current) {
      const cards = processGridRef.current.children;
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: processGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (itemRefs.current.length > 0) {
      itemRefs.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <section id="service" className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">
      
      {/* Process Workflow Banner */}
      <div className="mb-16">
        <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#ccff00] uppercase mb-8">
          OUR DEVELOPMENT PROCESS
        </h3>
        <div ref={processGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div 
              key={step.number} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ccff00]/50 hover:bg-white/[0.08] transition-all duration-300 group"
            >
              <span className="text-3xl font-black text-[#ccff00] block mb-3 group-hover:scale-110 transition-transform origin-left">
                {step.number}
              </span>
              <h4 className="text-xl font-bold uppercase mb-2 tracking-tight text-white">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full mt-0 z-0 pb-12">
        {/* Giant Title */}
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right">
            WHAT WE<br/>CAN DO
          </h2>
        </div>
      </div>

      {/* Accordion List */}
      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        {servicesData.map((service, index) => {
          const isHighlighted = activeIndex === index || (!isMobile && hoveredIndex === index);
          
          return (
          <div 
            key={service.id} 
            ref={(el) => itemRefs.current[index] = el}
            data-index={index}
            className={`border-b border-white/20 py-5 md:py-7 px-6 md:px-16 cursor-pointer transition-all duration-300 ease-in-out ${
              isHighlighted ? 'bg-[#ccff00]' : ''
            }`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start">
              
              {/* Left Side: Number, Title & Capabilities */}
              <div className="flex items-start justify-between w-full lg:w-1/2 gap-2">
                <div className="flex items-start gap-3 md:gap-16 w-full min-w-0">
                  <div className="h-7 flex items-center md:h-10 flex-shrink-0">
                    <span className={`text-lg md:text-3xl font-medium transition-colors duration-300 ease-in-out leading-none ${
                      isHighlighted ? 'text-black' : 'text-white'
                    }`}>
                      {service.id}
                    </span>
                  </div>
                  <div className="flex flex-col w-full min-w-0">
                    <div className="h-7 flex items-center md:h-10">
                      <h3 className={`text-[11px] sm:text-sm md:text-xl lg:text-2xl font-black uppercase tracking-wide leading-none transition-colors duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis ${
                        isHighlighted ? 'text-black' : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Expanded Capabilities */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                        activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-6 lg:pt-8 flex flex-col gap-3">
                        <ul className={`transition-colors duration-300 ease-in-out text-sm md:text-base font-light space-y-2 flex flex-col ${
                          isHighlighted ? 'text-black/80' : 'text-gray-300'
                        }`}>
                          {service.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className={`transition-colors duration-300 ease-in-out mt-1.5 opacity-70 text-[10px] ${
                                isHighlighted ? 'text-black' : 'text-[#ccff00]'
                              }`}>■</span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow Icon */}
                <div className="h-7 flex items-center flex-shrink-0 lg:hidden">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-6 h-6 transition-all duration-300 ${
                      isHighlighted ? 'text-black' : 'text-[#ccff00]'
                    } ${activeIndex === index ? '-rotate-45' : 'rotate-45'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Description, Button & Desktop Arrow */}
              <div className="flex flex-row gap-6 w-full lg:w-1/2 justify-between lg:justify-end relative items-start">
                
                {/* Expanded Description */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-start w-full ${
                    activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                   <div className="pt-4 md:pt-6 lg:pt-[72px] flex flex-col gap-6 w-full pr-0 lg:pr-12">
                     <p className={`transition-colors duration-300 ease-in-out text-base md:text-lg leading-relaxed max-w-lg font-light ${
                       isHighlighted ? 'text-black/80' : 'text-gray-300'
                     }`}>
                       {service.description}
                     </p>
                     {service.buttonText && (
                       <a 
                         href={service.buttonHref || "#project"} 
                         target={service.buttonHref?.startsWith('http') ? '_blank' : '_self'}
                         rel="noopener noreferrer"
                         className={`font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 border transition-colors duration-300 ease-in-out inline-flex items-center gap-2 mt-4 cursor-pointer ${
                           isHighlighted ? 'bg-black text-[#ccff00] border-black hover:bg-black/90' : 'bg-[#ccff00] text-black border-[#ccff00] hover:bg-[#b3e600]'
                         }`}
                       >
                         <span className="w-2 h-2 border-t border-l border-current"></span>
                         {service.buttonText}
                         <span className="w-2 h-2 border-b border-r border-current"></span>
                       </a>
                     )}
                   </div>
                </div>

                {/* Desktop Arrow Icon */}
                <div className="hidden lg:flex flex-shrink-0 h-10 items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-10 h-10 transition-all duration-300 ${
                      isHighlighted ? 'text-black' : 'text-[#ccff00]'
                    } ${activeIndex === index ? '-rotate-45' : 'rotate-45'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

              </div>

            </div>
          </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default Services;
