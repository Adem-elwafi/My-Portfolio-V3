import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeaturedSkills = () => {
  // Create refs for animation elements
  const skillsHeadingRef = useRef(null);
  const skillsGridRef = useRef(null);
  const viewSkillsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline triggered by scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start when top of element is 80% from top of viewport
        end: "bottom 20%", // End when bottom reaches 20% from top
        toggleActions: "play none none reverse", // Play forward on enter, reverse on leave
        markers: false, // Set to true for debugging
      }
    });

    // Skills section animations
    tl.fromTo(skillsHeadingRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Animate skills grid items
    tl.fromTo(skillsGridRef.current.children,
      { opacity: 0, y: 20, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.2)"
      },
      "-=0.3" // Start 0.3 seconds before previous animation ends
    );

    // View skills link
    tl.fromTo(viewSkillsRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
              {/* Skills Preview Section */}
      
        <div className="max-w-6xl mx-auto">
          <h3 ref={skillsHeadingRef} className="text-3xl font-heading font-bold text-darkbg dark:text-white text-center mb-12">
            Technologies I Work With
          </h3>
          
          <div ref={skillsGridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 
              'PostgreSQL', 'AWS', 'Docker', 'Git', 'Tailwind', 'GraphQL'].map((tech) => (
              <div 
                key={tech}
                className="bg-background dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="font-body font-medium text-text-gray dark:text-gray-200">{tech}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              ref={viewSkillsRef}
              to="/skills"
              className="text-primary dark:text-blue-400 font-body font-semibold hover:text-secondary dark:hover:text-purple-400 transition-colors duration-300 inline-flex items-center"
            >
              View all skills
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default FeaturedSkills