import React from 'react';
import Navbar from '../components/Navbar';
// Import your image with the correct path
import profileImage from '../assets/MyImage.png';

const ProfileImage = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg transform rotate-3"></div>
    <img 
      src={profileImage} // Now using the correctly imported image
      alt="Adem Elwafi" 
      className="relative rounded-lg shadow-lg overflow-hidden border-4 border-white w-full h-full object-cover"
      onError={(e) => {
        console.error('Image failed to load');
        e.target.style.display = 'none';
        e.target.parentElement.innerHTML = `
          <div class="relative rounded-lg shadow-lg overflow-hidden border-4 border-white w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-4xl text-gray-500 font-bold">AE</span>
              </div>
              <p class="text-text-gray font-body">Adem Elwafi</p>
            </div>
          </div>
        `;
      }}
    />
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-darkbg dark:text-white mb-4">
            About <span className="text-primary dark:text-blue-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-text-gray dark:text-gray-300 font-body max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for technology
          </p>
        </div>
        
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Left Column - Profile Image */}
          <div className="lg:w-2/5 flex justify-center">
            <ProfileImage />
          </div>
          
          {/* Right Column - Bio Content */}
          <div className="lg:w-3/5">
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-3xl font-heading font-bold text-darkbg dark:text-white mb-4">
                Full Stack Developer & Problem Solver
              </h2>
              <p className="text-lg text-text-gray dark:text-gray-300 leading-relaxed font-body mb-4">
                Hello! I'm <span className="font-semibold text-primary dark:text-blue-400">Adem Elwafi</span>, a passionate 
                Full Stack Developer with expertise in creating modern, responsive web applications. 
                I believe in writing clean, efficient code and building intuitive user experiences.
              </p>
              <p className="text-lg text-text-gray dark:text-gray-300 leading-relaxed font-body">
                With a strong foundation in both frontend and backend technologies, I enjoy 
                tackling complex challenges and turning ideas into functional, beautiful products.
              </p>
            </div>
            
            {/* Education Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-4">
                <span className="text-primary dark:text-blue-400">Education</span> & Background
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary dark:border-blue-400">
                  <h4 className="font-heading font-bold text-xl text-darkbg dark:text-white mb-1">
                    Computer Science Degree
                  </h4>
                  <p className="font-body text-secondary dark:text-purple-400 font-medium mb-2">University Name • 2018-2022</p>
                  <p className="text-text-gray dark:text-gray-300 leading-relaxed">
                    Graduated with honors, focusing on software engineering, algorithms, and web development. 
                    Participated in multiple hackathons and programming competitions.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-secondary dark:border-purple-400">
                  <h4 className="font-heading font-bold text-xl text-darkbg dark:text-white mb-1">
                    Full Stack Web Development Bootcamp
                  </h4>
                  <p className="font-body text-secondary dark:text-purple-400 font-medium mb-2">Coding School • 2022</p>
                  <p className="text-text-gray dark:text-gray-300 leading-relaxed">
                    Intensive program covering modern web technologies including React, Node.js, 
                    databases, and cloud deployment.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-4">
                <span className="text-primary dark:text-blue-400">Professional</span> Experience
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h4 className="font-heading font-bold text-xl text-darkbg dark:text-white">
                      Full Stack Developer
                    </h4>
                    <span className="font-body text-primary dark:text-blue-400 font-semibold bg-primary/10 dark:bg-blue-400/20 px-3 py-1 rounded-full">
                      2022 - Present
                    </span>
                  </div>
                  <p className="font-body text-secondary dark:text-purple-400 font-medium mb-3">Tech Company • Remote</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary dark:text-blue-400 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-gray dark:text-gray-300">Developed and maintained multiple full-stack applications using React, Node.js, and MongoDB</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary dark:text-blue-400 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-gray dark:text-gray-300">Led frontend development for customer-facing dashboard, improving user engagement by 40%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary dark:text-blue-400 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-gray dark:text-gray-300">Implemented RESTful APIs and integrated third-party services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Focus & Philosophy */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-4">
                My <span className="text-primary dark:text-blue-400">Development</span> Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-primary dark:text-blue-400 text-2xl mb-3">🚀</div>
                  <h4 className="font-heading font-bold text-lg text-darkbg dark:text-white mb-2">Performance First</h4>
                  <p className="text-text-gray dark:text-gray-300 text-sm">
                    Building fast, efficient applications that provide seamless user experiences across all devices.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-primary dark:text-blue-400 text-2xl mb-3">💡</div>
                  <h4 className="font-heading font-bold text-lg text-darkbg dark:text-white mb-2">Clean Code</h4>
                  <p className="text-text-gray dark:text-gray-300 text-sm">
                    Writing maintainable, well-documented code following best practices and design patterns.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-primary dark:text-blue-400 text-2xl mb-3">🎨</div>
                  <h4 className="font-heading font-bold text-lg text-darkbg dark:text-white mb-2">User-Centered Design</h4>
                  <p className="text-text-gray dark:text-gray-300 text-sm">
                    Creating intuitive interfaces that prioritize user needs and accessibility.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-primary dark:text-blue-400 text-2xl mb-3">🔄</div>
                  <h4 className="font-heading font-bold text-lg text-darkbg dark:text-white mb-2">Continuous Learning</h4>
                  <p className="text-text-gray dark:text-gray-300 text-sm">
                    Staying updated with emerging technologies and constantly improving my skills.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Let's Work Together
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;