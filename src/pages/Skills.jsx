// src/pages/Skills.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-darkbg mb-4">Skills Page</h1>
        <p className="text-text-gray font-body">My skills will be listed here.</p>
      </div>
    </div>
  );
};

export default Skills;