import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiCodepen } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-700'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:adem.elwafi@example.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/yourusername',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'CodePen',
      icon: <SiCodepen />,
      url: 'https://codepen.io/yourusername',
      color: 'hover:text-black'
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary" />,
      title: t('contact.contactItems.email'),
      value: 'adem.elwafi@example.com',
      link: 'mailto:adem.elwafi@example.com'
    },
    {
      icon: <FaPhone className="text-primary" />,
      title: t('contact.contactItems.phone'),
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary" />,
      title: t('contact.contactItems.location'),
      value: 'San Francisco, CA',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-darkbg dark:text-white mb-6">
            {t('contact.titleLead')} <span className="text-primary dark:text-blue-400">{t('contact.titleHighlight')}</span>
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-text-gray dark:text-gray-300 font-body max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-8 text-center">
              {t('contact.formTitleLead')} <span className="text-primary dark:text-blue-400">{t('contact.formTitleHighlight')}</span>
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                <p className="text-green-700 dark:text-green-400 font-body text-center">
                  ✅ {t('contact.success')}
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium text-text-gray dark:text-gray-300 mb-2">
                  {t('contact.labels.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all font-body bg-white dark:bg-gray-700 text-darkbg dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={t('contact.placeholders.name')}
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-body font-medium text-text-gray dark:text-gray-300 mb-2">
                  {t('contact.labels.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all font-body bg-white dark:bg-gray-700 text-darkbg dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={t('contact.placeholders.email')}
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-body font-medium text-text-gray dark:text-gray-300 mb-2">
                  {t('contact.labels.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all font-body resize-none bg-white dark:bg-gray-700 text-darkbg dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={t('contact.placeholders.message')}
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-secondary rounded-md px-6 py-3 font-body font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.sendButton')}...
                  </>
                ) : (
                  t('contact.sendButton')
                )}
              </button>
              
              <p className="text-sm text-text-gray dark:text-gray-400 font-body text-center mt-4">
                {t('contact.required')}
              </p>
            </form>
          </div>
          
          {/* Right Column - Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-6 text-center">
                {t('contact.infoTitleLead')} <span className="text-primary dark:text-blue-400">{t('contact.infoTitleHighlight')}</span>
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  >
                    <div className="text-xl mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-heading font-bold text-darkbg dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-text-gray dark:text-gray-300 font-body group-hover:text-secondary dark:group-hover:text-purple-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-6 text-center">
                {t('contact.socialTitleLead')} <span className="text-primary dark:text-blue-400">{t('contact.socialTitleHighlight')}</span>
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`text-primary dark:text-blue-400 text-3xl mb-2 group-hover:text-secondary dark:group-hover:text-purple-400 transition-colors ${social.color}`}>
                      {social.icon}
                    </div>
                    <span className="font-body font-medium text-text-gray dark:text-gray-300 group-hover:text-darkbg dark:group-hover:text-white">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
              
              <p className="text-center text-text-gray dark:text-gray-300 font-body mt-6">
                {t('contact.socialMessage')}
              </p>
            </div>
            
            {/* Response Time Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-darkbg dark:text-white">{t('contact.responseQuickTitle')}</h3>
                  <p className="text-text-gray dark:text-gray-300 font-body text-sm">
                    {t('contact.responseQuickText')}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-darkbg dark:text-white">{t('contact.responseWorkTitle')}</h3>
                  <p className="text-text-gray dark:text-gray-300 font-body text-sm">
                    {t('contact.responseWorkText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-6">
            {t('contact.buildTitleLead')} <span className="text-primary dark:text-blue-400">{t('contact.buildTitleHighlight')}</span> {t('contact.buildTitleTail')}
          </h3>
          <p className="text-lg text-text-gray dark:text-gray-300 font-body mb-8">
            {t('contact.buildSubtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-primary dark:text-blue-400 text-2xl mb-3">🎯</div>
              <h4 className="font-heading font-bold text-darkbg dark:text-white mb-2">{t('contact.values.communicationTitle')}</h4>
              <p className="text-text-gray dark:text-gray-300 text-sm">
                {t('contact.values.communicationText')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-primary dark:text-blue-400 text-2xl mb-3">⚡</div>
              <h4 className="font-heading font-bold text-darkbg dark:text-white mb-2">{t('contact.values.deliveryTitle')}</h4>
              <p className="text-text-gray dark:text-gray-300 text-sm">
                {t('contact.values.deliveryText')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-primary dark:text-blue-400 text-2xl mb-3">🤝</div>
              <h4 className="font-heading font-bold text-darkbg dark:text-white mb-2">{t('contact.values.supportTitle')}</h4>
              <p className="text-text-gray dark:text-gray-300 text-sm">
                {t('contact.values.supportText')}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Note */}
      <footer className="bg-darkbg dark:bg-gray-950 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-gray-400 font-body text-sm mt-2">
            {t('contact.footerYearNote')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;