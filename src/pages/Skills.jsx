import React from 'react';
import Navbar from '../components/Navbar';

// Import icons from react-icons
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaAws,
  FaGitAlt, FaDocker, FaFigma, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGithub, FaLinux, FaNpm, FaTerminal, FaServer, FaMobileAlt,
  FaChartLine, FaShieldAlt
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiGraphql, SiRedux, SiNextdotjs, SiVuedotjs, SiAngular,
  SiExpress, SiJest, SiWebpack, SiFirebase, SiKubernetes,
  SiTerraform, SiJenkins
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb'; // Alternative for VS Code

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-card flex flex-col items-center hover:scale-105 transition-transform duration-300 group border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-blue-400/30 hover:shadow-lg">
      {/* Skill Icon */}
      <div className="text-primary dark:text-blue-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      
      {/* Skill Name */}
      <h3 className="text-lg font-heading font-bold text-darkbg dark:text-white mb-2 text-center">
        {skill.name}
      </h3>
      
      {/* Skill Description */}
      <p className="text-sm text-text-gray dark:text-gray-300 font-body text-center mb-3">
        {skill.description}
      </p>
      
      {/* Skill Level Indicator */}
      <div className="w-full mb-3">
        <div className="flex justify-between text-xs text-text-gray dark:text-gray-300 mb-1">
          <span>Proficiency</span>
          <span className="font-semibold text-primary dark:text-blue-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
      
      {/* Skill Category */}
      <span className="text-xs font-medium text-white bg-primary/90 px-3 py-1 rounded-full">
        {skill.category}
      </span>
    </div>
  );
};

const Skills = () => {
  const skills = [
    // Frontend Skills
    {
      id: 1,
      name: 'React',
      icon: <FaReact />,
      description: 'Frontend library',
      level: 90,
      category: 'Frontend'
    },
    {
      id: 2,
      name: 'TypeScript',
      icon: <SiTypescript />,
      description: 'Typed JavaScript',
      level: 85,
      category: 'Frontend'
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      description: 'Utility-first CSS',
      level: 92,
      category: 'Frontend'
    },
    {
      id: 4,
      name: 'Next.js',
      icon: <SiNextdotjs />,
      description: 'React framework',
      level: 80,
      category: 'Frontend'
    },
    {
      id: 5,
      name: 'JavaScript',
      icon: <FaJsSquare />,
      description: 'Programming language',
      level: 95,
      category: 'Frontend'
    },
    {
      id: 6,
      name: 'Redux',
      icon: <SiRedux />,
      description: 'State management',
      level: 85,
      category: 'Frontend'
    },
    {
      id: 7,
      name: 'HTML5',
      icon: <FaHtml5 />,
      description: 'Markup language',
      level: 98,
      category: 'Frontend'
    },
    {
      id: 8,
      name: 'CSS3',
      icon: <FaCss3Alt />,
      description: 'Styling language',
      level: 95,
      category: 'Frontend'
    },
    
    // Backend Skills
    {
      id: 9,
      name: 'Node.js',
      icon: <FaNodeJs />,
      description: 'Runtime environment',
      level: 88,
      category: 'Backend'
    },
    {
      id: 10,
      name: 'Python',
      icon: <FaPython />,
      description: 'Programming language',
      level: 85,
      category: 'Backend'
    },
    {
      id: 11,
      name: 'Express',
      icon: <SiExpress />,
      description: 'Node.js framework',
      level: 86,
      category: 'Backend'
    },
    {
      id: 12,
      name: 'Java',
      icon: <FaJava />,
      description: 'Programming language',
      level: 82,
      category: 'Backend'
    },
    
    // Database Skills
    {
      id: 13,
      name: 'MongoDB',
      icon: <SiMongodb />,
      description: 'NoSQL database',
      level: 85,
      category: 'Database'
    },
    {
      id: 14,
      name: 'PostgreSQL',
      icon: <SiPostgresql />,
      description: 'SQL database',
      level: 80,
      category: 'Database'
    },
    {
      id: 15,
      name: 'GraphQL',
      icon: <SiGraphql />,
      description: 'Query language',
      level: 78,
      category: 'Database'
    },
    {
      id: 16,
      name: 'SQL',
      icon: <FaDatabase />,
      description: 'Database language',
      level: 88,
      category: 'Database'
    },
    
    // DevOps & Tools
    {
      id: 17,
      name: 'Git',
      icon: <FaGitAlt />,
      description: 'Version control',
      level: 92,
      category: 'DevOps'
    },
    {
      id: 18,
      name: 'Docker',
      icon: <FaDocker />,
      description: 'Containerization',
      level: 75,
      category: 'DevOps'
    },
    {
      id: 19,
      name: 'AWS',
      icon: <FaAws />,
      description: 'Cloud platform',
      level: 70,
      category: 'DevOps'
    },
    {
      id: 20,
      name: 'Linux',
      icon: <FaLinux />,
      description: 'Operating system',
      level: 85,
      category: 'DevOps'
    },
    {
      id: 21,
      name: 'NPM',
      icon: <FaNpm />,
      description: 'Package manager',
      level: 90,
      category: 'DevOps'
    },
    {
      id: 22,
      name: 'GitHub',
      icon: <FaGithub />,
      description: 'Code hosting',
      level: 95,
      category: 'DevOps'
    },
    
    // Testing & Others
    {
      id: 23,
      name: 'Jest',
      icon: <SiJest />,
      description: 'Testing framework',
      level: 80,
      category: 'Testing'
    },
    {
      id: 24,
      name: 'Figma',
      icon: <FaFigma />,
      description: 'Design tool',
      level: 75,
      category: 'Design'
    },
    {
      id: 25,
      name: 'VS Code',
      icon: <TbBrandVscode />,
      description: 'Code editor',
      level: 95,
      category: 'Tools'
    },
    {
      id: 26,
      name: 'Webpack',
      icon: <SiWebpack />,
      description: 'Module bundler',
      level: 75,
      category: 'Tools'
    }
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Testing', 'Design', 'Tools'];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-darkbg dark:text-white mb-6">
            My <span className="text-primary dark:text-blue-400">Skills</span>
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-text-gray dark:text-gray-300 font-body max-w-3xl mx-auto mb-8">
            Here are the technologies and tools I work with. I'm constantly learning 
            and expanding my skill set to stay up-to-date with the latest industry trends.
          </p>
          
          {/* Skill Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-heading font-bold text-primary dark:text-blue-400 mb-2">26+</div>
              <div className="text-text-gray dark:text-gray-300 font-body">Technologies</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-heading font-bold text-primary dark:text-blue-400 mb-2">5+</div>
              <div className="text-text-gray dark:text-gray-300 font-body">Years Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-heading font-bold text-primary dark:text-blue-400 mb-2">50+</div>
              <div className="text-text-gray dark:text-gray-300 font-body">Projects Built</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-heading font-bold text-primary dark:text-blue-400 mb-2">∞</div>
              <div className="text-text-gray dark:text-gray-300 font-body">Learning Mindset</div>
            </div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-6 text-center">
            Browse by <span className="text-primary dark:text-blue-400">Category</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="bg-white dark:bg-gray-800 text-text-gray dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full font-body font-medium hover:border-primary dark:hover:border-blue-400 hover:text-primary dark:hover:text-blue-400 hover:bg-primary/5 dark:hover:bg-blue-400/10 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid - All Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-8 text-center">
            All <span className="text-primary dark:text-blue-400">Skills</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        
        {/* Skills by Category */}
        {categories.map((category) => (
          skillsByCategory[category] && (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-darkbg dark:text-white mb-8 text-center">
                {category} <span className="text-primary dark:text-blue-400">Skills</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillsByCategory[category].map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          )
        ))}
        
        {/* Learning Journey */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-darkbg dark:text-white mb-6 text-center">
            My <span className="text-primary dark:text-blue-400">Learning</span> Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="text-primary dark:text-blue-400 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-heading font-bold text-darkbg dark:text-white mb-4">Continuous Learning</h3>
              <p className="text-text-gray dark:text-gray-300 font-body">
                I dedicate time each week to learn new technologies, follow industry trends, 
                and improve my existing skills through courses, tutorials, and hands-on projects.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="text-primary dark:text-blue-400 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-heading font-bold text-darkbg dark:text-white mb-4">Practical Application</h3>
              <p className="text-text-gray dark:text-gray-300 font-body">
                I believe in learning by doing. Each new skill is immediately applied 
                to real projects, ensuring deep understanding and practical experience.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-heading font-bold text-darkbg dark:text-white mb-6">
            Need a specific skill?
          </h2>
          <p className="text-lg text-text-gray dark:text-gray-300 font-body max-w-2xl mx-auto mb-8">
            If you're looking for expertise in a particular technology not listed here, 
            I'm a quick learner and ready to adapt to your project's needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Let's Discuss Your Project
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Skills;