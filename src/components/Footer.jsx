import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/ademelwafi',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/ademelwafi',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:adem.elwafi@example.com',
      color: 'hover:text-red-300'
    }
  ];

  return (
    <footer className="bg-darkbg dark:bg-gray-950 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="text-center lg:text-left">
            <Link to="/" className="text-2xl font-heading font-bold text-primary dark:text-blue-400 hover:text-white transition-colors">
              Portfolio
            </Link>
            <p className="mt-2 font-body text-gray-300 dark:text-gray-400">
              Full Stack Developer & Problem Solver
            </p>
            <p className="mt-4 text-sm text-gray-400 font-body">
              © {currentYear} Adem Elwafi. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-400 font-body flex items-center justify-center lg:justify-start">
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center">
            <h3 className="font-heading font-bold text-lg mb-4">Connect With Me</h3>
            <div className="flex justify-center lg:justify-start gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-blue-400 text-2xl hover:text-secondary dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400 font-body">
              Always open to new opportunities
            </p>
          </div>
          
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 font-body text-sm">
            Designed and developed with attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;