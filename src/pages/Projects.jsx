import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

// Import project images - you'll need to add these to src/assets/
// Using placeholder images for now
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-card overflow-hidden hover:scale-105 transition-transform duration-300 group border border-gray-100">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-gray-400 group-hover:text-primary transition-colors">
            {project.icon}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="pt-6">
        <h3 className="text-xl font-heading font-bold text-darkbg mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-gray font-body leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-background text-text-gray text-xs font-medium px-3 py-1 rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary text-white hover:bg-secondary rounded-md px-4 py-3 font-body font-semibold text-center transition-all duration-300 hover:scale-[1.02] shadow hover:shadow-md"
          >
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md px-4 py-3 font-body font-semibold text-center transition-all duration-300 hover:scale-[1.02]"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with shopping cart, user authentication, and payment integration. Built with modern e-commerce best practices.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'Full Stack',
      demoLink: 'https://demo.example.com',
      codeLink: 'https://github.com/username/ecommerce',
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates, team management, and progress tracking. Features drag-and-drop interface.',
      technologies: ['React', 'Firebase', 'Tailwind', 'Context API', 'WebSockets'],
      category: 'Web App',
      demoLink: 'https://taskdemo.example.com',
      codeLink: 'https://github.com/username/taskmanager',
      icon: '✅'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, charts, and notifications. Includes multi-day forecasts and severe weather alerts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation', 'PWA'],
      category: 'API Integration',
      demoLink: 'https://weatherdemo.example.com',
      codeLink: 'https://github.com/username/weather-app',
      icon: '🌤️'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website with dark/light mode, project showcase, and contact form. Built with performance optimization.',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'EmailJS', 'Vite'],
      category: 'Personal',
      demoLink: '/',
      codeLink: 'https://github.com/username/portfolio',
      icon: '💼'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with private rooms, file sharing, and video calling capabilities. Features end-to-end encryption.',
      technologies: ['Socket.io', 'Express', 'React', 'WebRTC', 'PostgreSQL'],
      category: 'Real-time',
      demoLink: 'https://chatdemo.example.com',
      codeLink: 'https://github.com/username/chat-app',
      icon: '💬'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking application with workout plans, nutrition logging, and progress analytics. Integrates with wearables.',
      technologies: ['React Native', 'GraphQL', 'MongoDB', 'JWT', 'Chart.js'],
      category: 'Mobile',
      demoLink: 'https://fitnessdemo.example.com',
      codeLink: 'https://github.com/username/fitness-tracker',
      icon: '🏋️'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-darkbg mb-6">
            My <span className="text-primary">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-text-gray font-body max-w-2xl mx-auto mb-8">
            Here are some of my recent projects. Each represents a unique challenge 
            and an opportunity to solve real-world problems with code.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="bg-primary text-white px-5 py-2 rounded-full font-body font-medium hover:bg-secondary transition-colors">
              All Projects
            </button>
            <button className="bg-white text-text-gray border border-gray-300 px-5 py-2 rounded-full font-body font-medium hover:border-primary hover:text-primary transition-colors">
              Full Stack
            </button>
            <button className="bg-white text-text-gray border border-gray-300 px-5 py-2 rounded-full font-body font-medium hover:border-primary hover:text-primary transition-colors">
              Frontend
            </button>
            <button className="bg-white text-text-gray border border-gray-300 px-5 py-2 rounded-full font-body font-medium hover:border-primary hover:text-primary transition-colors">
              Mobile
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">20+</div>
              <div className="text-text-gray font-body">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">15+</div>
              <div className="text-text-gray font-body">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">5+</div>
              <div className="text-text-gray font-body">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="text-text-gray font-body">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-heading font-bold text-darkbg mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-text-gray font-body max-w-2xl mx-auto mb-8">
            I'm always open to discussing new opportunities and interesting projects.
            Let's build something amazing together!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start a Project
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Projects;