import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useLanguage } from '../context/LanguageContext';
gsap.registerPlugin(Draggable, InertiaPlugin); // ✅ Register BOTH

// Register GSAP plugins
gsap.registerPlugin(Draggable);

const FeaturedProjects = ({ projects = [] }) => {
  const { t } = useLanguage();
  const listRef = useRef(null);
  const draggableRef = useRef(null);

  // Default projects if none provided
  const defaultProjects = [
    { id: 1, titleKey: 'projects.cards.ecommerce.title', categoryKey: 'projects.cards.ecommerce.category', image: 'src/assets/GamesDownloader.png' },
    { id: 2, titleKey: 'projects.cards.task.title', categoryKey: 'projects.cards.task.category', image: 'src/assets/ai-language-coach.png' },
    { id: 3, titleKey: 'projects.cards.fitness.title', categoryKey: 'projects.cards.fitness.category', image: 'src/assets/GamesDownloader.png' },
    { id: 4, titleKey: 'projects.cards.weather.title', categoryKey: 'projects.cards.weather.category', image: 'src/assets/GamesDownloader.png' },
    { id: 5, titleKey: 'projects.cards.chat.title', categoryKey: 'projects.cards.chat.category', image: 'src/assets/GamesDownloader.png' },
    { id: 6, titleKey: 'projects.cards.portfolio.title', categoryKey: 'projects.cards.portfolio.category', image: 'src/assets/GamesDownloader.png' },
  ];

  const projectList = projects.length > 0 ? projects : defaultProjects;

  // Initialize GSAP Draggable
  useEffect(() => {
    if (!listRef.current) return;

    const proxy = document.createElement('div');
    
    const updateScroll = function() {
      if (listRef.current) {
        listRef.current.scrollLeft = this.scrollLeft + -this.x;
      }
    };

    // Create draggable instance
    draggableRef.current = Draggable.create(proxy, {
      type: 'x',
      trigger: listRef.current,
      inertia: true,
      allowContextMenu: true,
      onPressInit: function() {
        this.scrollLeft = listRef.current?.scrollLeft || 0;
        gsap.set(proxy, { clearProps: 'all' });
      },
      onDrag: updateScroll,
      onThrowUpdate: updateScroll,
    })[0];

    // Cleanup
    return () => {
      if (draggableRef.current) {
        draggableRef.current.kill();
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-light mb-4">{t('featuredProjects.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          {t('featuredProjects.description')}
        </p>
      </div>

      <div className="relative">
        {/* Horizontal Scroll Container */}
        <div 
          ref={listRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide"
          style={{ 
            scrollBehavior: 'auto',
            cursor: 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {projectList.map((project, index) => (
            <div 
              key={project.id || index}
              className="flex-shrink-0 w-[300px] md:w-[400px] group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[16/9] mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {project.categoryKey ? t(project.categoryKey) : project.category}
                </span>
                <h3 className="text-xl font-medium mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.titleKey ? t(project.titleKey) : project.title}
                </h3>
                {(project.descriptionKey || project.description) && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    {project.descriptionKey ? t(project.descriptionKey) : project.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-sm">{t('featuredProjects.dragHint')}</span>
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;