import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import FeaturedProjects from '../components/FeaturedProjects '
import Hero from '../components/Hero';
const FeaturedSkills = () => {

  // Create refs for animation elements

  const skillsHeadingRef = useRef(null);
  const skillsGridRef = useRef(null);
  const viewSkillsRef = useRef(null);

   useEffect(() => {
    // Create GSAP timeline with faster settings
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });


    // Skills section animations (very short delay)
    tl.fromTo(skillsHeadingRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5 },
      1.2
    );

    // Animate skills grid items with faster stagger
    tl.fromTo(skillsGridRef.current.children,
      { opacity: 0, y: 15 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        stagger: 0.03, // faster stagger
        ease: "power2.out"
      },
      1.4
    );

    // View skills link: quick fade
    tl.fromTo(viewSkillsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      1.6
    );

    // Clean up animations
    return () => {
      tl.kill();
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