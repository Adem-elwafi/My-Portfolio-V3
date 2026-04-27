import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// Import project images - you'll need to add these to src/assets/
// Using placeholder images for now
const ProjectCard = ({ project, t, demoLabel, codeLabel }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-card overflow-hidden hover:scale-105 transition-transform duration-300 group border border-gray-100 dark:border-gray-700">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-blue-900/30 dark:to-purple-900/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-gray-400 group-hover:text-primary transition-colors">
            {project.icon}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.categoryKey ? t(project.categoryKey) : project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="pt-6">
        <h3 className="text-xl font-heading font-bold text-darkbg dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
          {project.titleKey ? t(project.titleKey) : project.title}
        </h3>
        <p className="text-text-gray dark:text-gray-300 font-body leading-relaxed mb-4">
          {project.descriptionKey ? t(project.descriptionKey) : project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-background dark:bg-gray-700 text-text-gray dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600"
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
            className="flex-1 bg-primary hover:bg-secondary rounded-md px-4 py-3 font-body font-semibold text-center transition-all duration-300 hover:scale-[1.02] shadow hover:shadow-md text-white"
          >
            {demoLabel}
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary dark:hover:bg-blue-400 hover:text-white rounded-md px-4 py-3 font-body font-semibold text-center transition-all duration-300 hover:scale-[1.02]"
          >
            {codeLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const demoLabelMap = {
    en: 'Live Demo',
    fr: 'Démo en direct',
    ar: 'عرض مباشر',
  };
  const codeLabelMap = {
    en: 'View Code',
    fr: 'Voir le code',
    ar: 'عرض الشيفرة',
  };
  const demoLabel = demoLabelMap[language] || 'Live Demo';
  const codeLabel = codeLabelMap[language] || 'View Code';
  const projects = [
    {
      id: 1,
      titleKey: 'projects.cards.ecommerce.title',
      descriptionKey: 'projects.cards.ecommerce.description',
      category: 'fullStack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      categoryKey: 'projects.cards.ecommerce.category',
      demoLink: 'https://demo.example.com',
      codeLink: 'https://github.com/username/ecommerce',
      icon: '🛒'
    },
    {
      id: 2,
      titleKey: 'projects.cards.task.title',
      descriptionKey: 'projects.cards.task.description',
      category: 'fullStack',
      technologies: ['React', 'Firebase', 'Tailwind', 'Context API', 'WebSockets'],
      categoryKey: 'projects.cards.task.category',
      demoLink: 'https://taskdemo.example.com',
      codeLink: 'https://github.com/username/taskmanager',
      icon: '✅'
    },
    {
      id: 3,
      titleKey: 'projects.cards.weather.title',
      descriptionKey: 'projects.cards.weather.description',
      category: 'frontend',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation', 'PWA'],
      categoryKey: 'projects.cards.weather.category',
      demoLink: 'https://weatherdemo.example.com',
      codeLink: 'https://github.com/username/weather-app',
      icon: '🌤️'
    },
    {
      id: 4,
      titleKey: 'projects.cards.portfolio.title',
      descriptionKey: 'projects.cards.portfolio.description',
      category: 'frontend',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'EmailJS', 'Vite'],
      categoryKey: 'projects.cards.portfolio.category',
      demoLink: '/',
      codeLink: 'https://github.com/username/portfolio',
      icon: '💼'
    },
    {
      id: 5,
      titleKey: 'projects.cards.chat.title',
      descriptionKey: 'projects.cards.chat.description',
      category: 'fullStack',
      technologies: ['Socket.io', 'Express', 'React', 'WebRTC', 'PostgreSQL'],
      categoryKey: 'projects.cards.chat.category',
      demoLink: 'https://chatdemo.example.com',
      codeLink: 'https://github.com/username/chat-app',
      icon: '💬'
    },
    {
      id: 6,
      titleKey: 'projects.cards.fitness.title',
      descriptionKey: 'projects.cards.fitness.description',
      category: 'mobile',
      technologies: ['React Native', 'GraphQL', 'MongoDB', 'JWT', 'Chart.js'],
      categoryKey: 'projects.cards.fitness.category',
      demoLink: 'https://fitnessdemo.example.com',
      codeLink: 'https://github.com/username/fitness-tracker',
      icon: '🏋️'
    }
  ];

  const filteredProjects = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-darkbg dark:text-white mb-6">
            {t('projects.titleLead')} <span className="text-primary dark:text-blue-400">{t('projects.titleHighlight')}</span>
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-text-gray dark:text-gray-300 font-body max-w-2xl mx-auto mb-8">
            {t('projects.subtitle')}
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full font-body font-medium transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-text-gray dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-blue-400 hover:text-primary dark:hover:text-blue-400'}`}>
              {t('projects.filters.all')}
            </button>
            <button
              onClick={() => setFilter('fullStack')}
              className={`px-5 py-2 rounded-full font-body font-medium transition-colors ${filter === 'fullStack' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-text-gray dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-blue-400 hover:text-primary dark:hover:text-blue-400'}`}>
              {t('projects.filters.fullStack')}
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-5 py-2 rounded-full font-body font-medium transition-colors ${filter === 'frontend' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-text-gray dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-blue-400 hover:text-primary dark:hover:text-blue-400'}`}>
              {t('projects.filters.frontend')}
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-5 py-2 rounded-full font-body font-medium transition-colors ${filter === 'mobile' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-text-gray dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-blue-400 hover:text-primary dark:hover:text-blue-400'}`}>
              {t('projects.filters.mobile')}
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} demoLabel={demoLabel} codeLabel={codeLabel} />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-blue-400 mb-2">20+</div>
              <div className="text-text-gray dark:text-gray-300 font-body">{t('projects.stats.completed')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-blue-400 mb-2">15+</div>
              <div className="text-text-gray dark:text-gray-300 font-body">{t('projects.stats.clients')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-blue-400 mb-2">5+</div>
              <div className="text-text-gray dark:text-gray-300 font-body">{t('projects.stats.experience')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-blue-400 mb-2">100%</div>
              <div className="text-text-gray dark:text-gray-300 font-body">{t('projects.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-heading font-bold text-darkbg dark:text-white mb-6">
            {t('projects.ctaTitle')}
          </h2>
          <p className="text-lg text-text-gray dark:text-gray-300 font-body max-w-2xl mx-auto mb-8">
            {t('projects.ctaDescription')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('projects.ctaButton')}
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