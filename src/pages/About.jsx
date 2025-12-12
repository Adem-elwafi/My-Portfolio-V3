// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-darkbg mb-4">About Page</h1>
        <p className="text-text-gray font-body">About me content goes here.</p>
      </div>
    </div>
  );
};

export default About;