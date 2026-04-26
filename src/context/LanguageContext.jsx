/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'language';

const languageOptions = [
  { code: 'en', label: 'English', shortLabel: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'Français', shortLabel: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'العربية', shortLabel: 'AR', dir: 'rtl' },
];

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      language: 'Language',
    },
    footer: {
      role: 'Full Stack Developer & Problem Solver',
      quickLinks: 'Quick Links',
      connect: 'Connect With Me',
      opportunity: 'Always open to new opportunities',
      copyright: '© {year} Adem Elwafi. All rights reserved.',
      madeWith: 'Made with React & Tailwind CSS',
      detail: 'Designed and developed with attention to detail',
    },
    hero: {
      welcome: 'Welcome to my creative space',
      titleLead: 'Crafting Digital Experiences as a',
      titleHighlight: 'Full Stack Developer',
      tagline:
        'I build modern, responsive web applications with clean code and intuitive design. Passionate about creating solutions that make a difference and push boundaries.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      projectsCompleted: 'Projects Completed',
      technologies: 'Technologies',
      clientSatisfaction: 'Client Satisfaction',
      scroll: 'Scroll to explore',
      imageAlt: 'Adem Elwafi - Full Stack Developer',
    },
    featuredProjects: {
      title: 'Featured Projects',
      description:
        'A selection of my recent work showcasing interface design, interactivity, and modern web development practices.',
      dragHint: 'Drag to scroll',
    },
    featuredSkills: {
      title: 'Technologies I Work With',
      viewAll: 'View all skills',
    },
    about: {
      titleLead: 'About',
      titleHighlight: 'Me',
      subtitle: 'Learn more about my journey, skills, and passion for technology',
      introTitle: 'Full Stack Developer & Problem Solver',
      introText1:
        "Hello! I'm Adem Elwafi, a passionate Full Stack Developer with expertise in creating modern, responsive web applications. I believe in writing clean, efficient code and building intuitive user experiences.",
      introText2:
        'With a strong foundation in both frontend and backend technologies, I enjoy tackling complex challenges and turning ideas into functional, beautiful products.',
      educationTitleLead: 'Education',
      educationTitleHighlight: '& Background',
      degreeTitle: 'Computer Science Degree',
      degreeMeta: 'University Name • 2018-2022',
      degreeText:
        'Graduated with honors, focusing on software engineering, algorithms, and web development. Participated in multiple hackathons and programming competitions.',
      bootcampTitle: 'Full Stack Web Development Bootcamp',
      bootcampMeta: 'Coding School • 2022',
      bootcampText:
        'Intensive program covering modern web technologies including React, Node.js, databases, and cloud deployment.',
      experienceTitleLead: 'Professional',
      experienceTitleHighlight: 'Experience',
      roleTitle: 'Full Stack Developer',
      roleMeta: 'Tech Company • Remote',
      rolePeriod: '2022 - Present',
      roleBullets: [
        'Developed and maintained multiple full-stack applications using React, Node.js, and MongoDB',
        'Led frontend development for customer-facing dashboard, improving user engagement by 40%',
        'Implemented RESTful APIs and integrated third-party services',
      ],
      philosophyTitleLead: 'My',
      philosophyTitleHighlight: 'Development',
      philosophyTitleTail: 'Philosophy',
      philosophy: [
        {
          title: 'Performance First',
          text: 'Building fast, efficient applications that provide seamless user experiences across all devices.',
        },
        {
          title: 'Clean Code',
          text: 'Writing maintainable, well-documented code following best practices and design patterns.',
        },
        {
          title: 'User-Centered Design',
          text: 'Creating intuitive interfaces that prioritize user needs and accessibility.',
        },
        {
          title: 'Continuous Learning',
          text: 'Staying updated with emerging technologies and constantly improving my skills.',
        },
      ],
      cta: 'Let\'s Work Together',
      profileName: 'Adem Elwafi',
    },
    projects: {
      titleLead: 'My',
      titleHighlight: 'Projects',
      subtitle:
        'Here are some of my recent projects. Each represents a unique challenge and an opportunity to solve real-world problems with code.',
      filters: {
        all: 'All Projects',
        fullStack: 'Full Stack',
        frontend: 'Frontend',
        mobile: 'Mobile',
      },
      stats: {
        completed: 'Projects Completed',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        satisfaction: 'Satisfaction Rate',
      },
      ctaTitle: 'Have a project in mind?',
      ctaDescription:
        "I'm always open to discussing new opportunities and interesting projects. Let's build something amazing together!",
      ctaButton: 'Start a Project',
      cards: {
        ecommerce: {
          title: 'E-Commerce Platform',
          category: 'Full Stack',
          description:
            'A full-featured online store with shopping cart, user authentication, and payment integration. Built with modern e-commerce best practices.',
        },
        task: {
          title: 'Task Management App',
          category: 'Web App',
          description:
            'Collaborative task manager with real-time updates, team management, and progress tracking. Features drag-and-drop interface.',
        },
        weather: {
          title: 'Weather Dashboard',
          category: 'API Integration',
          description:
            'Real-time weather application with location-based forecasts, charts, and notifications. Includes multi-day forecasts and severe weather alerts.',
        },
        portfolio: {
          title: 'Portfolio Website',
          category: 'Personal',
          description:
            'Modern responsive portfolio website with dark/light mode, project showcase, and contact form. Built with performance optimization.',
        },
        chat: {
          title: 'Chat Application',
          category: 'Real-time',
          description:
            'Real-time chat application with private rooms, file sharing, and video calling capabilities. Features end-to-end encryption.',
        },
        fitness: {
          title: 'Fitness Tracker',
          category: 'Mobile',
          description:
            'Comprehensive fitness tracking application with workout plans, nutrition logging, and progress analytics. Integrates with wearables.',
        },
      },
    },
    skills: {
      titleLead: 'My',
      titleHighlight: 'Skills',
      subtitle:
        "Here are the technologies and tools I work with. I'm constantly learning and expanding my skill set to stay up-to-date with the latest industry trends.",
      stats: {
        technologies: 'Technologies',
        experience: 'Years Experience',
        projects: 'Projects Built',
        learning: 'Learning Mindset',
      },
      browseLead: 'Browse by',
      browseHighlight: 'Category',
      allLead: 'All',
      allHighlight: 'Skills',
      categorySuffix: 'Skills',
      proficiency: 'Proficiency',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        devops: 'DevOps',
        testing: 'Testing',
        design: 'Design',
        tools: 'Tools',
      },
      philosophyTitleLead: 'My',
      philosophyTitleHighlight: 'Learning',
      philosophyTitleTail: 'Philosophy',
      philosophy: {
        learningTitle: 'Continuous Learning',
        learningText:
          'I dedicate time each week to learn new technologies, follow industry trends, and improve my existing skills through courses, tutorials, and hands-on projects.',
        applicationTitle: 'Practical Application',
        applicationText:
          'I believe in learning by doing. Each new skill is immediately applied to real projects, ensuring deep understanding and practical experience.',
      },
      ctaTitle: 'Need a specific skill?',
      ctaDescription:
        "If you're looking for expertise in a particular technology not listed here, I'm a quick learner and ready to adapt to your project's needs.",
      ctaButton: "Let's Discuss Your Project",
      skillDescriptions: {
        react: 'Frontend library',
        typescript: 'Typed JavaScript',
        tailwind: 'Utility-first CSS',
        nextjs: 'React framework',
        javascript: 'Programming language',
        redux: 'State management',
        html5: 'Markup language',
        css3: 'Styling language',
        node: 'Runtime environment',
        python: 'Programming language',
        express: 'Node.js framework',
        java: 'Programming language',
        mongodb: 'NoSQL database',
        postgresql: 'SQL database',
        graphql: 'Query language',
        sql: 'Database language',
        git: 'Version control',
        docker: 'Containerization',
        aws: 'Cloud platform',
        linux: 'Operating system',
        npm: 'Package manager',
        github: 'Code hosting',
        jest: 'Testing framework',
        figma: 'Design tool',
        vscode: 'Code editor',
        webpack: 'Module bundler',
      },
    },
    contact: {
      titleLead: 'Get in',
      titleHighlight: 'Touch',
      subtitle:
        "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and interesting ideas.",
      formTitleLead: 'Send Me a',
      formTitleHighlight: 'Message',
      success: "Thank you for your message! I'll get back to you soon.",
      labels: {
        name: 'Your Name *',
        email: 'Email Address *',
        message: 'Your Message *',
      },
      placeholders: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Tell me about your project...',
      },
      sendButton: 'Send Message',
      required: '* Required fields',
      infoTitleLead: 'Contact',
      infoTitleHighlight: 'Information',
      socialTitleLead: 'Connect on',
      socialTitleHighlight: 'Social',
      socialMessage: 'Feel free to connect with me on any platform!',
      responseQuickTitle: 'Quick Response',
      responseQuickText: 'Typically replies within 24 hours',
      responseWorkTitle: 'Open to Work',
      responseWorkText: 'Available for freelance & full-time roles',
      buildTitleLead: "Let's Build Something",
      buildTitleHighlight: 'Amazing',
      buildTitleTail: 'Together',
      buildSubtitle:
        'Whether you need a website, a mobile app, or help with an existing project, I\'m here to help bring your ideas to life. I approach every project with attention to detail and a commitment to excellence.',
      values: {
        communicationTitle: 'Clear Communication',
        communicationText: 'Regular updates and transparent discussions throughout the project',
        deliveryTitle: 'Fast Delivery',
        deliveryText: 'Efficient workflows and timely delivery without compromising quality',
        supportTitle: 'Ongoing Support',
        supportText: 'Continued assistance and maintenance after project completion',
      },
      footerYearNote: 'Designed with React & Tailwind CSS',
      contactItems: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      socialsTitle: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email',
        twitter: 'Twitter',
        leetcode: 'LeetCode',
        codepen: 'CodePen',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      language: 'Langue',
    },
    footer: {
      role: 'Développeur Full Stack et Résolveur de problèmes',
      quickLinks: 'Liens rapides',
      connect: 'Me contacter',
      opportunity: 'Toujours ouvert à de nouvelles opportunités',
      copyright: '© {year} Adem Elwafi. Tous droits réservés.',
      madeWith: 'Réalisé avec React et Tailwind CSS',
      detail: 'Conçu et développé avec le souci du détail',
    },
    hero: {
      welcome: 'Bienvenue dans mon espace créatif',
      titleLead: 'Créer des expériences numériques en tant que',
      titleHighlight: 'Développeur Full Stack',
      tagline:
        'Je crée des applications web modernes et responsives avec un code propre et un design intuitif. Passionné par la conception de solutions qui font la différence et repoussent les limites.',
      viewWork: 'Voir mes projets',
      getInTouch: 'Me contacter',
      projectsCompleted: 'Projets réalisés',
      technologies: 'Technologies',
      clientSatisfaction: 'Satisfaction client',
      scroll: 'Faites défiler pour explorer',
      imageAlt: 'Adem Elwafi - Développeur Full Stack',
    },
    featuredProjects: {
      title: 'Projets en vedette',
      description:
        'Une sélection de mes travaux récents mettant en avant la conception d’interface, l’interactivité et les pratiques modernes de développement web.',
      dragHint: 'Faites glisser pour faire défiler',
    },
    featuredSkills: {
      title: 'Technologies que j’utilise',
      viewAll: 'Voir toutes les compétences',
    },
    about: {
      titleLead: 'À propos de',
      titleHighlight: 'moi',
      subtitle: 'En savoir plus sur mon parcours, mes compétences et ma passion pour la technologie',
      introTitle: 'Développeur Full Stack et Résolveur de problèmes',
      introText1:
        "Bonjour ! Je suis Adem Elwafi, un développeur Full Stack passionné, spécialisé dans la création d’applications web modernes et responsives. J’aime écrire du code propre et efficace et concevoir des expériences utilisateur intuitives.",
      introText2:
        'Avec une solide base en frontend et en backend, j’aime relever des défis complexes et transformer des idées en produits fonctionnels et élégants.',
      educationTitleLead: 'Formation',
      educationTitleHighlight: 'et parcours',
      degreeTitle: 'Diplôme en informatique',
      degreeMeta: 'Nom de l’université • 2018-2022',
      degreeText:
        'Diplômé avec mention, avec une spécialisation en génie logiciel, algorithmes et développement web. Participation à plusieurs hackathons et concours de programmation.',
      bootcampTitle: 'Bootcamp de développement web Full Stack',
      bootcampMeta: 'Coding School • 2022',
      bootcampText:
        'Programme intensif couvrant les technologies web modernes, notamment React, Node.js, les bases de données et le déploiement cloud.',
      experienceTitleLead: 'Expérience',
      experienceTitleHighlight: 'professionnelle',
      roleTitle: 'Développeur Full Stack',
      roleMeta: 'Entreprise Tech • Télétravail',
      rolePeriod: '2022 - Présent',
      roleBullets: [
        'Développement et maintenance de plusieurs applications full stack avec React, Node.js et MongoDB',
        'Pilotage du développement frontend d’un tableau de bord client, avec une hausse de 40 % de l’engagement utilisateur',
        'Implémentation d’API REST et intégration de services tiers',
      ],
      philosophyTitleLead: 'Ma',
      philosophyTitleHighlight: 'philosophie',
      philosophyTitleTail: 'de développement',
      philosophy: [
        {
          title: 'La performance d’abord',
          text: 'Créer des applications rapides et efficaces offrant une expérience fluide sur tous les appareils.',
        },
        {
          title: 'Code propre',
          text: 'Écrire du code maintenable et bien documenté, en suivant les bonnes pratiques et les design patterns.',
        },
        {
          title: 'Conception centrée utilisateur',
          text: 'Créer des interfaces intuitives qui privilégient les besoins des utilisateurs et l’accessibilité.',
        },
        {
          title: 'Apprentissage continu',
          text: 'Rester à jour avec les technologies émergentes et améliorer constamment mes compétences.',
        },
      ],
      cta: 'Travaillons ensemble',
      profileName: 'Adem Elwafi',
    },
    projects: {
      titleLead: 'Mes',
      titleHighlight: 'projets',
      subtitle:
        'Voici quelques-uns de mes projets récents. Chacun représente un défi unique et une opportunité de résoudre des problèmes concrets avec du code.',
      filters: {
        all: 'Tous les projets',
        fullStack: 'Full Stack',
        frontend: 'Frontend',
        mobile: 'Mobile',
      },
      stats: {
        completed: 'Projets réalisés',
        clients: 'Clients satisfaits',
        experience: "Années d’expérience",
        satisfaction: 'Taux de satisfaction',
      },
      ctaTitle: 'Un projet en tête ?',
      ctaDescription:
        'Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants. Construisons quelque chose d’exceptionnel ensemble !',
      ctaButton: 'Lancer un projet',
      cards: {
        ecommerce: {
          title: 'Plateforme e-commerce',
          category: 'Full Stack',
          description:
            'Une boutique en ligne complète avec panier, authentification utilisateur et intégration des paiements. Développée selon les meilleures pratiques e-commerce.',
        },
        task: {
          title: 'Application de gestion de tâches',
          category: 'Application web',
          description:
            'Gestionnaire collaboratif avec mises à jour en temps réel, gestion d’équipe et suivi de progression. Interface glisser-déposer.',
        },
        weather: {
          title: 'Tableau de bord météo',
          category: 'Intégration API',
          description:
            'Application météo en temps réel avec prévisions localisées, graphiques et notifications. Inclut des prévisions sur plusieurs jours et des alertes météo sévères.',
        },
        portfolio: {
          title: 'Site portfolio',
          category: 'Personnel',
          description:
            'Site portfolio moderne et responsive avec mode sombre/claire, présentation des projets et formulaire de contact. Optimisé pour les performances.',
        },
        chat: {
          title: 'Application de chat',
          category: 'Temps réel',
          description:
            'Application de chat en temps réel avec salons privés, partage de fichiers et appels vidéo. Chiffrement de bout en bout.',
        },
        fitness: {
          title: 'Suivi fitness',
          category: 'Mobile',
          description:
            'Application complète de suivi fitness avec plans d’entraînement, suivi nutritionnel et analyses de progression. Intégration avec les objets connectés.',
        },
      },
    },
    skills: {
      titleLead: 'Mes',
      titleHighlight: 'compétences',
      subtitle:
        'Voici les technologies et outils avec lesquels je travaille. J’apprends en permanence et j’élargis mes compétences pour rester à jour avec les dernières tendances du secteur.',
      stats: {
        technologies: 'Technologies',
        experience: "Années d’expérience",
        projects: 'Projets réalisés',
        learning: 'État d’esprit d’apprentissage',
      },
      browseLead: 'Par',
      browseHighlight: 'catégorie',
      allLead: 'Toutes les',
      allHighlight: 'compétences',
      categorySuffix: 'compétences',
      proficiency: 'Maîtrise',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de données',
        devops: 'DevOps',
        testing: 'Tests',
        design: 'Design',
        tools: 'Outils',
      },
      philosophyTitleLead: 'Ma',
      philosophyTitleHighlight: 'philosophie',
      philosophyTitleTail: 'd’apprentissage',
      philosophy: {
        learningTitle: 'Apprentissage continu',
        learningText:
          'Je consacre du temps chaque semaine à apprendre de nouvelles technologies, suivre les tendances du secteur et améliorer mes compétences grâce à des cours, tutoriels et projets pratiques.',
        applicationTitle: 'Application pratique',
        applicationText:
          'J’apprends en faisant. Chaque nouvelle compétence est immédiatement appliquée à de vrais projets pour garantir une compréhension profonde et une expérience concrète.',
      },
      ctaTitle: 'Besoin d’une compétence précise ?',
      ctaDescription:
        'Si vous recherchez une expertise dans une technologie spécifique non listée ici, j’apprends vite et je peux m’adapter aux besoins de votre projet.',
      ctaButton: 'Discutons de votre projet',
      skillDescriptions: {
        react: 'Bibliothèque frontend',
        typescript: 'JavaScript typé',
        tailwind: 'CSS utilitaire',
        nextjs: 'Framework React',
        javascript: 'Langage de programmation',
        redux: 'Gestion d’état',
        html5: 'Langage de balisage',
        css3: 'Langage de style',
        node: 'Environnement d’exécution',
        python: 'Langage de programmation',
        express: 'Framework Node.js',
        java: 'Langage de programmation',
        mongodb: 'Base de données NoSQL',
        postgresql: 'Base de données SQL',
        graphql: 'Langage de requête',
        sql: 'Langage de base de données',
        git: 'Contrôle de version',
        docker: 'Conteneurisation',
        aws: 'Plateforme cloud',
        linux: 'Système d’exploitation',
        npm: 'Gestionnaire de paquets',
        github: 'Hébergement de code',
        jest: 'Framework de tests',
        figma: 'Outil de design',
        vscode: 'Éditeur de code',
        webpack: 'Regroupeur de modules',
      },
    },
    contact: {
      titleLead: 'Entrer en',
      titleHighlight: 'contact',
      subtitle:
        'Vous avez un projet en tête ou souhaitez collaborer ? N’hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités et aux idées intéressantes.',
      formTitleLead: 'Envoyez-moi un',
      formTitleHighlight: 'message',
      success: 'Merci pour votre message ! Je vous répondrai rapidement.',
      labels: {
        name: 'Votre nom *',
        email: 'Adresse e-mail *',
        message: 'Votre message *',
      },
      placeholders: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Parlez-moi de votre projet...',
      },
      sendButton: 'Envoyer le message',
      required: '* Champs obligatoires',
      infoTitleLead: 'Informations',
      infoTitleHighlight: 'de contact',
      socialTitleLead: 'Me retrouver sur les',
      socialTitleHighlight: 'réseaux',
      socialMessage: 'N’hésitez pas à me contacter sur la plateforme de votre choix !',
      responseQuickTitle: 'Réponse rapide',
      responseQuickText: 'Répond généralement sous 24 heures',
      responseWorkTitle: 'Ouvert aux opportunités',
      responseWorkText: 'Disponible pour des missions freelance et des postes à temps plein',
      buildTitleLead: 'Construisons quelque chose de',
      buildTitleHighlight: 'formidable',
      buildTitleTail: 'ensemble',
      buildSubtitle:
        'Que vous ayez besoin d’un site web, d’une application mobile ou d’aide sur un projet existant, je suis là pour transformer vos idées en réalité. J’aborde chaque projet avec le souci du détail et un engagement pour l’excellence.',
      values: {
        communicationTitle: 'Communication claire',
        communicationText: 'Mises à jour régulières et échanges transparents tout au long du projet',
        deliveryTitle: 'Livraison rapide',
        deliveryText: 'Des processus efficaces et des délais respectés sans compromettre la qualité',
        supportTitle: 'Support continu',
        supportText: 'Assistance et maintenance continues après la fin du projet',
      },
      footerYearNote: 'Conçu avec React et Tailwind CSS',
      contactItems: {
        email: 'E-mail',
        phone: 'Téléphone',
        location: 'Localisation',
      },
      socialsTitle: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'E-mail',
        twitter: 'Twitter',
        leetcode: 'LeetCode',
        codepen: 'CodePen',
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      projects: 'المشاريع',
      skills: 'المهارات',
      contact: 'تواصل',
      language: 'اللغة',
    },
    footer: {
      role: 'مطور Full Stack ومحلل للمشكلات',
      quickLinks: 'روابط سريعة',
      connect: 'تواصل معي',
      opportunity: 'منفتح دائمًا على فرص جديدة',
      copyright: '© {year} Adem Elwafi. جميع الحقوق محفوظة.',
      madeWith: 'تم البناء باستخدام React و Tailwind CSS',
      detail: 'مصمم ومطوّر بعناية للتفاصيل',
    },
    hero: {
      welcome: 'مرحبًا بك في مساحتي الإبداعية',
      titleLead: 'أصنع تجارب رقمية بصفتي',
      titleHighlight: 'مطور Full Stack',
      tagline:
        'أبني تطبيقات ويب حديثة ومتجاوبة بكود نظيف وتصميم بديهي. شغوف بابتكار حلول تصنع فرقًا وتتجاوز الحدود.',
      viewWork: 'استعرض أعمالي',
      getInTouch: 'تواصل معي',
      projectsCompleted: 'مشروعًا مكتملًا',
      technologies: 'تقنية',
      clientSatisfaction: 'رضا العملاء',
      scroll: 'مرر للاكتشاف',
      imageAlt: 'أدم الوفي - مطور Full Stack',
    },
    featuredProjects: {
      title: 'مشاريع مميزة',
      description:
        'مجموعة من أعمالي الأخيرة التي تعرض تصميم الواجهات والتفاعلية وممارسات تطوير الويب الحديثة.',
      dragHint: 'اسحب للتمرير',
    },
    featuredSkills: {
      title: 'التقنيات التي أعمل بها',
      viewAll: 'عرض جميع المهارات',
    },
    about: {
      titleLead: 'نبذة',
      titleHighlight: 'عني',
      subtitle: 'تعرّف أكثر على رحلتي ومهاراتي وشغفي بالتقنية',
      introTitle: 'مطور Full Stack ومحلل للمشكلات',
      introText1:
        'مرحبًا! أنا أدم الوفي، مطور Full Stack شغوف أمتلك خبرة في إنشاء تطبيقات ويب حديثة ومتجاوبة. أؤمن بكتابة كود نظيف وفعّال وبناء تجارب مستخدم سلسة.',
      introText2:
        'مع أساس قوي في تقنيات الواجهة الأمامية والخلفية، أستمتع بمواجهة التحديات المعقدة وتحويل الأفكار إلى منتجات جميلة وعملية.',
      educationTitleLead: 'التعليم',
      educationTitleHighlight: 'والخلفية',
      degreeTitle: 'درجة في علوم الحاسوب',
      degreeMeta: 'اسم الجامعة • 2018-2022',
      degreeText:
        'تخرجت بمرتبة الشرف مع تركيز على هندسة البرمجيات والخوارزميات وتطوير الويب. شاركت في عدة هاكاثونات ومسابقات برمجة.',
      bootcampTitle: 'معسكر تطوير ويب Full Stack',
      bootcampMeta: 'Coding School • 2022',
      bootcampText:
        'برنامج مكثف غطّى تقنيات الويب الحديثة بما في ذلك React وNode.js وقواعد البيانات والنشر السحابي.',
      experienceTitleLead: 'الخبرة',
      experienceTitleHighlight: 'المهنية',
      roleTitle: 'مطور Full Stack',
      roleMeta: 'شركة تقنية • عن بُعد',
      rolePeriod: '2022 - الآن',
      roleBullets: [
        'تطوير وصيانة عدة تطبيقات full stack باستخدام React وNode.js وMongoDB',
        'قيادة تطوير الواجهة الأمامية للوحة تحكم العملاء مع تحسين تفاعل المستخدم بنسبة 40%',
        'تنفيذ واجهات RESTful API ودمج خدمات الطرف الثالث',
      ],
      philosophyTitleLead: 'فلسفتي',
      philosophyTitleHighlight: 'في التطوير',
      philosophyTitleTail: '',
      philosophy: [
        {
          title: 'الأداء أولًا',
          text: 'بناء تطبيقات سريعة وفعالة تقدم تجربة سلسة عبر جميع الأجهزة.',
        },
        {
          title: 'كود نظيف',
          text: 'كتابة كود قابل للصيانة وموثق جيدًا مع اتباع أفضل الممارسات وأنماط التصميم.',
        },
        {
          title: 'تصميم يركز على المستخدم',
          text: 'إنشاء واجهات بديهية تضع احتياجات المستخدم وسهولة الوصول في المقدمة.',
        },
        {
          title: 'التعلم المستمر',
          text: 'البقاء على اطلاع بالتقنيات الناشئة وتحسين مهاراتي باستمرار.',
        },
      ],
      cta: 'لنعمل معًا',
      profileName: 'أدم الوفي',
    },
    projects: {
      titleLead: 'مشاريعي',
      titleHighlight: 'المميزة',
      subtitle:
        'إليك بعضًا من مشاريعي الأخيرة. كل مشروع يمثل تحديًا فريدًا وفرصة لحل مشكلات حقيقية باستخدام البرمجة.',
      filters: {
        all: 'كل المشاريع',
        fullStack: 'Full Stack',
        frontend: 'الواجهة الأمامية',
        mobile: 'الهاتف المحمول',
      },
      stats: {
        completed: 'مشروعًا مكتملًا',
        clients: 'عميلًا سعيدًا',
        experience: 'سنوات الخبرة',
        satisfaction: 'معدل الرضا',
      },
      ctaTitle: 'هل لديك مشروع في ذهنك؟',
      ctaDescription:
        'أنا منفتح دائمًا لمناقشة الفرص الجديدة والمشاريع المثيرة. لننشئ شيئًا مذهلًا معًا!',
      ctaButton: 'ابدأ مشروعًا',
      cards: {
        ecommerce: {
          title: 'منصة تجارة إلكترونية',
          category: 'Full Stack',
          description:
            'متجر إلكتروني متكامل مع سلة تسوق ومصادقة للمستخدمين وتكامل للدفع. مبني وفق أفضل ممارسات التجارة الإلكترونية الحديثة.',
        },
        task: {
          title: 'تطبيق إدارة المهام',
          category: 'تطبيق ويب',
          description:
            'مدير مهام تعاوني مع تحديثات فورية وإدارة فرق وتتبع التقدم. يتضمن واجهة سحب وإفلات.',
        },
        weather: {
          title: 'لوحة طقس',
          category: 'تكامل API',
          description:
            'تطبيق طقس فوري مع توقعات قائمة على الموقع ورسوم بيانية وإشعارات. يتضمن توقعات لعدة أيام وتنبيهات الطقس الشديدة.',
        },
        portfolio: {
          title: 'موقع بورتفوليو',
          category: 'شخصي',
          description:
            'موقع بورتفوليو حديث ومتجاوب مع وضع داكن/فاتح، وعرض للمشاريع، ونموذج تواصل. محسّن للأداء.',
        },
        chat: {
          title: 'تطبيق دردشة',
          category: 'فوري',
          description:
            'تطبيق دردشة فوري مع غرف خاصة ومشاركة ملفات ومكالمات فيديو. يدعم التشفير من طرف إلى طرف.',
        },
        fitness: {
          title: 'متتبع اللياقة',
          category: 'تطبيق جوال',
          description:
            'تطبيق شامل لتتبع اللياقة مع خطط التمارين وتسجيل التغذية وتحليلات التقدم. يتكامل مع الأجهزة القابلة للارتداء.',
        },
      },
    },
    skills: {
      titleLead: 'مهاراتي',
      titleHighlight: 'العملية',
      subtitle:
        'هذه هي التقنيات والأدوات التي أعمل بها. أتعلم باستمرار وأوسّع مجموعة مهاراتي للبقاء على اطلاع بأحدث اتجاهات الصناعة.',
      stats: {
        technologies: 'تقنية',
        experience: 'سنوات الخبرة',
        projects: 'مشروعًا منفذًا',
        learning: 'عقلية التعلم',
      },
      browseLead: 'تصفح حسب',
      browseHighlight: 'الفئة',
      allLead: 'كل',
      allHighlight: 'المهارات',
      categorySuffix: 'المهارات',
      proficiency: 'الإتقان',
      categories: {
        frontend: 'الواجهة الأمامية',
        backend: 'الواجهة الخلفية',
        database: 'قاعدة البيانات',
        devops: 'DevOps',
        testing: 'الاختبار',
        design: 'التصميم',
        tools: 'الأدوات',
      },
      philosophyTitleLead: 'فلسفتي',
      philosophyTitleHighlight: 'في التعلم',
      philosophyTitleTail: '',
      philosophy: {
        learningTitle: 'التعلم المستمر',
        learningText:
          'أخصص وقتًا كل أسبوع لتعلم تقنيات جديدة، ومتابعة اتجاهات الصناعة، وتحسين مهاراتي الحالية من خلال الدورات والدروس والمشاريع العملية.',
        applicationTitle: 'التطبيق العملي',
        applicationText:
          'أؤمن بالتعلم بالممارسة. يتم تطبيق كل مهارة جديدة مباشرة على مشاريع حقيقية لضمان فهم عميق وخبرة عملية.',
      },
      ctaTitle: 'هل تحتاج إلى مهارة محددة؟',
      ctaDescription:
        'إذا كنت تبحث عن خبرة في تقنية معينة غير مذكورة هنا، فأنا سريع التعلم ومستعد للتكيف مع احتياجات مشروعك.',
      ctaButton: 'لنناقش مشروعك',
      skillDescriptions: {
        react: 'مكتبة للواجهة الأمامية',
        typescript: 'JavaScript بنمط ثابت',
        tailwind: 'CSS بنمط الأدوات',
        nextjs: 'إطار React',
        javascript: 'لغة برمجة',
        redux: 'إدارة الحالة',
        html5: 'لغة ترميز',
        css3: 'لغة تنسيق',
        node: 'بيئة تشغيل',
        python: 'لغة برمجة',
        express: 'إطار Node.js',
        java: 'لغة برمجة',
        mongodb: 'قاعدة بيانات NoSQL',
        postgresql: 'قاعدة بيانات SQL',
        graphql: 'لغة استعلام',
        sql: 'لغة قواعد البيانات',
        git: 'التحكم بالإصدارات',
        docker: 'الحاويات',
        aws: 'منصة سحابية',
        linux: 'نظام تشغيل',
        npm: 'مدير حزم',
        github: 'استضافة الشيفرة',
        jest: 'إطار اختبار',
        figma: 'أداة تصميم',
        vscode: 'محرر شيفرة',
        webpack: 'تجميع الوحدات',
      },
    },
    contact: {
      titleLead: 'تواصل',
      titleHighlight: 'معي',
      subtitle:
        'هل لديك مشروع في ذهنك أو ترغب في التعاون؟ لا تتردد في التواصل. أنا منفتح دائمًا على الفرص الجديدة والأفكار المثيرة.',
      formTitleLead: 'أرسل لي',
      formTitleHighlight: 'رسالة',
      success: 'شكرًا لرسالتك! سأعود إليك قريبًا.',
      labels: {
        name: 'اسمك *',
        email: 'البريد الإلكتروني *',
        message: 'رسالتك *',
      },
      placeholders: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'أخبرني عن مشروعك...',
      },
      sendButton: 'إرسال الرسالة',
      required: '* الحقول المطلوبة',
      infoTitleLead: 'معلومات',
      infoTitleHighlight: 'التواصل',
      socialTitleLead: 'تواصل عبر',
      socialTitleHighlight: 'الشبكات',
      socialMessage: 'لا تتردد في التواصل معي على أي منصة!',
      responseQuickTitle: 'استجابة سريعة',
      responseQuickText: 'أرد عادة خلال 24 ساعة',
      responseWorkTitle: 'متاح للعمل',
      responseWorkText: 'متاح للعمل الحر والوظائف بدوام كامل',
      buildTitleLead: 'لننشئ شيئًا',
      buildTitleHighlight: 'مذهلًا',
      buildTitleTail: 'معًا',
      buildSubtitle:
        'سواء كنت بحاجة إلى موقع ويب أو تطبيق جوال أو مساعدة في مشروع قائم، فأنا هنا لتحويل أفكارك إلى واقع. أتعامل مع كل مشروع باهتمام كبير بالتفاصيل والتزام بالتميّز.',
      values: {
        communicationTitle: 'تواصل واضح',
        communicationText: 'تحديثات منتظمة ومناقشات شفافة طوال المشروع',
        deliveryTitle: 'تسليم سريع',
        deliveryText: 'سير عمل فعّال وتسليم في الوقت المناسب دون المساس بالجودة',
        supportTitle: 'دعم مستمر',
        supportText: 'مساعدة وصيانة مستمرة بعد اكتمال المشروع',
      },
      footerYearNote: 'مصمم باستخدام React وTailwind CSS',
      contactItems: {
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع',
      },
      socialsTitle: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'البريد الإلكتروني',
        twitter: 'Twitter',
        leetcode: 'LeetCode',
        codepen: 'CodePen',
      },
    },
  },
};

const LanguageContext = createContext(null);
const fallbackLanguage = 'en';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return fallbackLanguage;
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.slice(0, 2).toLowerCase();
  if (browserLanguage && translations[browserLanguage]) {
    return browserLanguage;
  }

  return fallbackLanguage;
};

const resolveTemplate = (value, params = {}) => {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(/\{(\w+)\}/g, (_, key) => {
    const replacement = params[key];
    return replacement === undefined || replacement === null ? '' : String(replacement);
  });
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    const languageConfig = languageOptions.find((option) => option.code === language) || languageOptions[0];
    const root = window.document.documentElement;

    root.lang = language;
    root.dir = languageConfig.dir;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const direction = languageOptions.find((option) => option.code === language)?.dir || 'ltr';

  const t = useMemo(() => {
    const translate = (key, params) => {
      const segments = key.split('.');
      let value = translations[language];

      for (const segment of segments) {
        value = value?.[segment];
      }

      if (value === undefined) {
        let fallbackValue = translations[fallbackLanguage];

        for (const segment of segments) {
          fallbackValue = fallbackValue?.[segment];
        }

        value = fallbackValue ?? key;
      }

      if (Array.isArray(value)) {
        return value;
      }

      return resolveTemplate(value, params);
    };

    return translate;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isRTL: direction === 'rtl',
      languageOptions,
      t,
    }),
    [language, direction, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
