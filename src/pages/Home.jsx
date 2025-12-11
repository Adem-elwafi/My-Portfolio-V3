// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-darkbg mb-4">Home Page</h1>
        <p className="text-text-gray font-body">Welcome to the portfolio website!</p>
      </div>
    </div>
  );
};

export default Home;