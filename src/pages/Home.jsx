import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary dark:text-blue-400 font-body">
              Welcome to my portfolio
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-darkbg dark:text-white mb-4">
            Adem Elwafi —{' '}
            <span className="text-primary">Full Stack Developer</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-secondary dark:text-purple-400 mb-6">
            Crafting Digital Experiences
          </h2>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl text-text-gray dark:text-gray-300 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
            I build modern, responsive web applications with clean code and intuitive design. 
            Passionate about creating solutions that make a difference.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
              className="w-6 h-6 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-darkbg dark:text-white text-center mb-12">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
      </section>
    </div>
  );
};

export default Home;