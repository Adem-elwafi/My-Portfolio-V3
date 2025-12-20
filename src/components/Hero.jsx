import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaDatabase,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiGraphql,
  SiRedux,
  SiPostgresql,
  SiFirebase,
} from 'react-icons/si';
import personalImage from '../assets/adem-standing.png';

// Tech icons data
const TECH_ICONS = [
  { Component: FaReact, color: '#61DAFB', name: 'React', size: 24 },
  { Component: FaNodeJs, color: '#339933', name: 'Node.js', size: 24 },
  { Component: FaJs, color: '#F7DF1E', name: 'JavaScript', size: 24 },
  { Component: SiTypescript, color: '#3178C6', name: 'TypeScript', size: 22 },
  { Component: SiNextdotjs, color: '#000000', name: 'Next.js', size: 24 },
  { Component: FaHtml5, color: '#E34F26', name: 'HTML5', size: 24 },
  { Component: FaCss3Alt, color: '#1572B6', name: 'CSS3', size: 24 },
  { Component: SiTailwindcss, color: '#06B6D4', name: 'Tailwind', size: 24 },
  { Component: SiExpress, color: '#000000', name: 'Express', size: 24 },
  { Component: SiMongodb, color: '#47A248', name: 'MongoDB', size: 22 },
  { Component: FaPython, color: '#3776AB', name: 'Python', size: 24 },
  { Component: FaDatabase, color: '#4479A1', name: 'SQL', size: 24 },
  { Component: SiGraphql, color: '#E10098', name: 'GraphQL', size: 22 },
  { Component: SiRedux, color: '#764ABC', name: 'Redux', size: 22 },
  { Component: SiPostgresql, color: '#4169E1', name: 'PostgreSQL', size: 22 },
  { Component: FaGitAlt, color: '#F05032', name: 'Git', size: 22 },
  { Component: SiFirebase, color: '#FFCA28', name: 'Firebase', size: 22 },
  { Component: FaDocker, color: '#2496ED', name: 'Docker', size: 24 },
  ];

const Hero = () => {
  // Refs for main animations
  const welcomeBadgeRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const titleSpanRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  
  // Refs for cursor effects
  const cursorRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const heroContainerRef = useRef(null);
  
  // State
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);

  // ===== CURSOR TECH ICONS EFFECT =====
  const createTechParticle = useCallback((x, y) => {
    const randomTech = TECH_ICONS[Math.floor(Math.random() * TECH_ICONS.length)];
    const id = Date.now() + Math.random();
    
    const particle = {
      id,
      x,
      y,
      tech: randomTech,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.8,
      velocity: {
        x: (Math.random() - 0.5) * 4,
        y: Math.random() * 3 + 2,
      },
      opacity: 1,
      createdAt: Date.now(),
    };
    
    setParticles(prev => [...prev.slice(-15), particle]); // Keep only last 15 particles
    
    // Auto remove after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 1500);
  }, []);
const handleMouseMove = (e) => {
  const { clientX: x, clientY: y } = e;
  
  // Update cursor position
  setCursorPosition({ x, y });
  
  // Occasionally create tech particles
  if (isHovering && Math.random() > 0.8) {
    // Get the centered position (account for -50% transform)
    const particleX = x;
    const particleY = y;
    createTechParticle(particleX, particleY);
  }
};
  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Update cursor position
      setCursorPosition({ x, y });
      
      // Update custom cursor
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: x,
          y: y,
          duration: 0.1,
          ease: "power2.out"
        });
      }
      
      // Occasionally create tech particles (20% chance per move)
      if (isHovering && Math.random() > 0.8) {
        createTechParticle(x, y);
      }
    };
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    const container = heroContainerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.body.style.cursor = 'default';
    };
  }, [isHovering, createTechParticle]);

  // Animate particles
  useEffect(() => {
    const updateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.velocity.x,
          y: particle.y + particle.velocity.y,
          rotation: particle.rotation + particle.velocity.x,
          opacity: Math.max(0, particle.opacity - 0.01),
        })).filter(p => p.opacity > 0 && p.y < window.innerHeight + 100)
      );
    };
    
    const interval = setInterval(updateParticles, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  // ===== MAIN HERO ANIMATIONS =====
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Image emerges from "hole"
    tl.fromTo(imageContainerRef.current,
      { 
        clipPath: 'circle(0% at 50% 50%)',
        opacity: 0,
        scale: 0.8 
      },
      { 
        clipPath: 'circle(100% at 50% 50%)',
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.inOut"
      }
    );

    // Animate the actual image
    tl.fromTo(imageRef.current,
      { y: 50, opacity: 0, rotation: -5 },
      { y: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.5"
    );

    // Welcome badge
    tl.fromTo(welcomeBadgeRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );

    // Name animation
    tl.fromTo(nameRef.current,
      { opacity: 0, y: 30, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
      { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1, ease: "power3.out" },
      "-=0.2"
    );

    // Title animation
    tl.fromTo(titleRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7 },
      "-=0.5"
    );

    // Colored span in title
    tl.fromTo(titleSpanRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
      "-=0.3"
    );

    // Tagline
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    );

    // CTA buttons
    const buttons = ctaButtonsRef.current?.children || [];
    tl.fromTo(buttons,
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Add subtle floating animation to image
    tl.to(imageRef.current, {
      y: "-=10",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={heroContainerRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 overflow-hidden relative"
    >
      {/* ===== CURSOR TECH ICONS EFFECT ===== */}
      
    {/* Custom cursor */}
    <div 
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-50"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: 'translate(-50%, -50%)' // This centers the cursor
      }}
    >
      <div className="w-full h-full rounded-full bg-primary/20 border-2 border-primary/50 backdrop-blur-sm"></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
      
      {/* Tech icons particles */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {particles.map(particle => {
          const { Component, color, size } = particle.tech;
          return (
            <div
              key={particle.id}
              className="absolute flex flex-col items-center pointer-events-none"
              style={{
                left: particle.x,
                top: particle.y,
                transform: `translate(-50%, -50%) rotate(${particle.rotation}deg) scale(${particle.scale})`,
                opacity: particle.opacity,
              }}
            >
              <Component 
                style={{ 
                  color: color,
                  fontSize: size,
                  filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.3))`
                }} 
              />
              <span 
                className="text-xs font-semibold mt-1 px-2 py-1 rounded-md"
                style={{ 
                  backgroundColor: `${color}20`,
                  color: color,
                  backdropFilter: 'blur(4px)'
                }}
              >
                {particle.tech.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-2xl lg:max-w-3xl order-2 lg:order-1">
            {/* Welcome Badge */}
            <div ref={welcomeBadgeRef} className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6 overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></div>
              <span className="text-sm font-semibold text-primary dark:text-blue-400 font-body tracking-wide">
                Welcome to my creative space
              </span>
            </div>
            
            {/* Name */}
            <div className="overflow-hidden mb-2">
              <h1 ref={nameRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-darkbg dark:text-white">
                Adem Elwafi
              </h1>
            </div>
            
            {/* Title */}
            <div className="overflow-hidden mb-6">
              <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-secondary dark:text-gray-300">
                Crafting Digital Experiences as a{' '}
                <span ref={titleSpanRef} className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h2>
            </div>
            
            {/* Tagline */}
            <div className="overflow-hidden mb-8">
              <p ref={taglineRef} className="text-lg sm:text-xl text-text-gray dark:text-gray-300 font-body leading-relaxed">
                I build modern, responsive web applications with clean code and intuitive design. 
                Passionate about creating solutions that make a difference and push boundaries.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-start">
              <Link
                to="/projects"
                className="group relative bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden min-w-[200px] text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View My Work
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/contact"
                className="group relative border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:text-white transition-all duration-300 hover:scale-105 overflow-hidden min-w-[200px] text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get In Touch
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            </div>

            {/* Tech stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-blue-400">50+</div>
                <div className="text-sm text-text-gray dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-blue-400">18</div>
                <div className="text-sm text-text-gray dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-blue-400">100%</div>
                <div className="text-sm text-text-gray dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Personal Image */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div 
              ref={imageContainerRef}
              className="relative w-full max-w-md lg:max-w-lg"
            >
              {/* Gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-20 blur-lg"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  ref={imageRef}
                  src={personalImage}
                  alt="Adem Elwafi - Full Stack Developer"
                  className="w-full h-auto object-cover"
                  style={{ 
                    minHeight: '500px',
                    objectPosition: 'center center'
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-sm text-primary dark:text-blue-400 mb-2 font-body">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary dark:border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary dark:bg-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;