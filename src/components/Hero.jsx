import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import personalImage from '../assets/adem-standing.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  // Refs for main animations
  const heroContentRef = useRef(null); // NEW: Single ref for all GSAP-controlled content
  const welcomeBadgeRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const titleSpanRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  // ===== MAIN HERO ANIMATIONS =====
  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // CRITICAL FIX: Instantly reveal the hero content wrapper at the start
    // This prevents the flash - the content becomes visible immediately, then animates
    tl.set(heroContentRef.current, { opacity: 1 });

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
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* FIXED: Background moved outside and positioned absolutely */}
      {/* This ensures it's always visible and never controlled by GSAP */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
    </div>

      {/* FIXED: All Hero content wrapped in heroContentRef with initial opacity: 0 */}
      {/* CSS sets opacity: 0, GSAP instantly reveals it, then runs animations */}
      <div 
        ref={heroContentRef} 
        className="relative w-full max-w-7xl mx-auto"
        style={{ opacity: 0, zIndex: 10 }}
      >
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-2xl lg:max-w-3xl order-2 lg:order-1">
            {/* Welcome Badge */}
            <div ref={welcomeBadgeRef} className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6 overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></div>
              <span className="text-sm font-semibold text-primary dark:text-blue-400 font-body tracking-wide">
                {t('hero.welcome')}
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
                {t('hero.titleLead')}{' '}
                <span ref={titleSpanRef} className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t('hero.titleHighlight')}
                </span>
              </h2>
            </div>
            
            {/* Tagline */}
            <div className="overflow-hidden mb-8">
              <p ref={taglineRef} className="text-lg sm:text-xl text-text-gray dark:text-gray-300 font-body leading-relaxed">
                {t('hero.tagline')}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-start">
              <Link
                to="/projects"
                className="group relative bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden min-w-[200px] text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {t('hero.viewWork')}
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
                  {t('hero.getInTouch')}
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
                <div className="text-sm text-text-gray dark:text-gray-400">{t('hero.projectsCompleted')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-blue-400">18</div>
                <div className="text-sm text-text-gray dark:text-gray-400">{t('hero.technologies')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-blue-400">100%</div>
                <div className="text-sm text-text-gray dark:text-gray-400">{t('hero.clientSatisfaction')}</div>
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
                  alt={t('hero.imageAlt')}
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
      {/* End of heroContentRef wrapper */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
        <div className="flex flex-col items-center">
          <span className="text-sm text-primary dark:text-blue-400 mb-2 font-body">{t('hero.scroll')}</span>
          <div className="w-6 h-10 border-2 border-primary dark:border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary dark:bg-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;