import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import personalImage from '../assets/adem.png'; // Make sure to add your image here


const Hero = () => {

    // Create refs for animation elements
  const welcomeBadgeRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const headingSpanRef = useRef(null);
  const subheadingRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const imageRef = useRef(null);

   useEffect(() => {
    // Create GSAP timeline with faster settings
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

    // Hero Section Animations - FASTER
    // Welcome badge: quick fade in
    tl.fromTo(welcomeBadgeRef.current,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0 },
      0 // start immediately
    );

    // Main heading: quick slide from top
    tl.fromTo(mainHeadingRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.1 // slight delay
    );

    // Animate the colored span with quick bounce
    tl.fromTo(headingSpanRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5,
        ease: "back.out(1.7)"
      },
      0.3 // after heading
    );

    // Subheading: quick slide from bottom
    tl.fromTo(subheadingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      0.4
    );

    // Tagline: quick fade in
    tl.fromTo(taglineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      0.5
    );

    // Personal image: quick fade in with slight rotation
    tl.fromTo(imageRef.current,
      { opacity: 0, rotation: -2, scale: 0.9 },
      { 
        opacity: 1, 
        rotation: 0, 
        scale: 1, 
        duration: 0.7,
        ease: "power2.out"
      },
      0.6 // concurrent with tagline
    );

    // CTA buttons: quick scale up
    tl.fromTo(ctaButtonsRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5,
        ease: "back.out(1.5)"
      },
      0.8
    );

    // Scroll indicator: quick fade in
    tl.fromTo(scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      1.0
    );


    // Clean up animations
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900 overflow-hidden" >


        <div className="text-center max-w-6xl mx-auto">
          {/* Two-column layout container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column: Text Content */}
            <div className="flex-1 max-w-2xl">
              {/* Welcome Badge */}
              <div ref={welcomeBadgeRef} className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
                <span className="text-sm font-semibold text-primary dark:text-blue-400 font-body">
                  Welcome to my portfolio
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="overflow-hidden">
                <h1 ref={mainHeadingRef} className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-darkbg dark:text-white mb-4">
                  Adem Elwafi —{' '}
                  <span ref={headingSpanRef} className="text-primary">Full Stack Developer</span>
                </h1>
              </div>
              
              {/* Subheading */}
              <div className="overflow-hidden">
                <h2 ref={subheadingRef} className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-secondary dark:text-purple-400 mb-6">
                  Crafting Digital Experiences
                </h2>
              </div>
              
              {/* Tagline */}
              <div className="overflow-hidden">
                <p ref={taglineRef} className="text-lg sm:text-xl text-text-gray dark:text-gray-300 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
                  I build modern, responsive web applications with clean code and intuitive design. 
                  Passionate about creating solutions that make a difference.
                </p>
              </div>
              
              {/* Call to Action Buttons */}
              <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  to="/projects"
                  className="group bg-primary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
                >
                  View My Work
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                
                <Link
                  to="/contact"
                  className="group border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center"
                >
                  Get In Touch
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
            
              {/* Right Column: Personal Image */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Gradient background effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-xl dark:opacity-20"></div>
                  {/* Image with object-position to adjust positioning */}
                  <img
                    ref={imageRef}
                    src={personalImage}
                    alt="Adem Elwafi - Full Stack Developer"
                    className="relative rounded-full shadow-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-8 border-white dark:border-gray-800 transform hover:rotate-3 transition-transform duration-500"
                    style={{ objectPosition: '50% 30%' }} // Adjust this value to position your head properly
                  />
                </div>
              </div>
          </div>
          
          {/* Scroll Indicator */}
          <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <svg 
              className="w-6 h-6 text-primary animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
    </div>
  )
}

export default Hero