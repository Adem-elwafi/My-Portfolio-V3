import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from "gsap/InertiaPlugin";
gsap.registerPlugin(Draggable, InertiaPlugin); // ✅ Register BOTH

// Register GSAP plugins
gsap.registerPlugin(Draggable);

const FeaturedProjects = ({ projects = [] }) => {
  const listRef = useRef(null);
  const draggableRef = useRef(null);

  // Default projects if none provided
  const defaultProjects = [
    { id: 1, title: 'E-commerce Platform', category: 'Web App', image: 'https://picsum.photos/600/800?random=1' },
    { id: 2, title: 'Task Management', category: 'Productivity', image: 'https://picsum.photos/600/800?random=2' },
    { id: 3, title: 'Fitness Tracker', category: 'Health & Wellness', image: 'https://picsum.photos/600/800?random=3' },
    { id: 4, title: 'Social Media Dashboard', category: 'Analytics', image: 'https://picsum.photos/600/800?random=4' },
    { id: 5, title: 'Travel Booking', category: 'Travel', image: 'https://picsum.photos/600/800?random=5' },
    { id: 6, title: 'Portfolio Website', category: 'Design', image: 'https://picsum.photos/600/800?random=6' },
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
        <h2 className="text-4xl md:text-5xl font-light mb-4">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          A selection of my recent work showcasing interface design, interactivity, and modern web development practices.
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
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[3/4] mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-medium mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-sm">Drag to scroll</span>
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