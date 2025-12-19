import React, { useEffect, useRef } from 'react';
import FeaturedProjects from '../components/FeaturedProjects '
import Hero from '../components/Hero';
import FeaturedSkills from '../components/FeaturedSkills';
const Home = () => {

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      <Hero/>
      <FeaturedProjects/>
      <FeaturedSkills/>
    </div>
  );
};

export default Home;