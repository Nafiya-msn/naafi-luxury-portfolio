export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    subtitle: 'Crafting responsive, high-performance client interfaces',
    icon: 'Layout',
    accent: '#10b981',
    skills: [
      {
        name: 'React',
        level: 'Advanced',
        experience: 'Core Specialty',
        description: 'Component architecture, Hooks, Context, Virtual DOM optimization, and modern React 19 paradigms.',
        icon: 'Atom',
        color: '#06b6d4'
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Advanced',
        experience: 'Fundamental',
        description: 'Asynchronous event loops, Promises, Closures, DOM manipulation, and functional patterns.',
        icon: 'FileCode2',
        color: '#facc15'
      },
      {
        name: 'HTML5',
        level: 'Expert',
        experience: 'Semantic Web',
        description: 'Semantic markup, accessibility (a11y), SEO microdata, and clean document outlines.',
        icon: 'Code2',
        color: '#f97316'
      },
      {
        name: 'CSS3',
        level: 'Expert',
        experience: 'Modern Layouts',
        description: 'CSS Grid, Flexbox, custom variables, keyframe animations, and cross-browser resilience.',
        icon: 'Palette',
        color: '#3b82f6'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Data Engineering',
    subtitle: 'Robust server logic, RESTful APIs, and persistence',
    icon: 'Server',
    accent: '#06b6d4',
    skills: [
      {
        name: 'Node.js',
        level: 'Proficient',
        experience: 'Runtime Engine',
        description: 'Event-driven server runtimes, asynchronous I/O, npm ecosystem, and middleware orchestration.',
        icon: 'Cpu',
        color: '#22c55e'
      },
      {
        name: 'Express.js',
        level: 'Proficient',
        experience: 'API Framework',
        description: 'RESTful API routing, JSON validation, JWT authentication flows, and error handling.',
        icon: 'Network',
        color: '#94a3b8'
      },
      {
        name: 'MongoDB',
        level: 'Proficient',
        experience: 'NoSQL Database',
        description: 'Document modeling, schema definition via Mongoose, CRUD operations, and index querying.',
        icon: 'Database',
        color: '#10b981'
      }
    ]
  },
  {
    id: 'styling',
    title: 'Styling & Design Systems',
    subtitle: 'Pixel-perfect, utility-first aesthetics and layout systems',
    icon: 'Sparkles',
    accent: '#38bdf8',
    skills: [
      {
        name: 'Tailwind CSS',
        level: 'Expert',
        experience: 'Primary Framework',
        description: 'Modern utility-first styling, responsive variants, dark-mode theming, and Tailwind v4 engine.',
        icon: 'Wind',
        color: '#38bdf8'
      },
      {
        name: 'Bootstrap',
        level: 'Proficient',
        experience: 'Rapid Layouts',
        description: 'Grid systems, pre-built utility classes, responsive containers, and rapid prototyping.',
        icon: 'Layers',
        color: '#8b5cf6'
      }
    ]
  },
  {
    id: 'tooling',
    title: 'Tooling, Version Control & DevOps',
    subtitle: 'Reproducible development, branching, and distribution',
    icon: 'Terminal',
    accent: '#10b981',
    skills: [
      {
        name: 'Git',
        level: 'Proficient',
        experience: 'Version Control',
        description: 'Branch management, feature commits, merging, rebasing, and clean atomic history.',
        icon: 'GitBranch',
        color: '#f43f5e'
      },
      {
        name: 'GitHub',
        level: 'Proficient',
        experience: 'Collaboration & CI/CD',
        description: 'Repository hosting, pull requests, issue tracking, GitHub Pages, and deployment integration.',
        icon: 'Github',
        color: '#ffffff'
      }
    ]
  }
  ,
  {
    id: 'delivery',
    title: 'UI Motion & Project Delivery',
    subtitle: 'Bringing interfaces to life and publishing real projects',
    icon: 'Sparkles',
    accent: '#c99b60',
    skills: [
      { name: 'Framer Motion', level: 'Used in portfolio', experience: 'UI Animation', description: 'Motion effects, entrance transitions, hover interactions and animated interface states.', icon: 'Sparkles', color: '#d7b47c' },
      { name: 'GSAP & ScrollTrigger', level: 'Building experience', experience: 'Scroll Animation', description: 'Scroll-based reveals and timeline animation for more engaging web experiences.', icon: 'Zap', color: '#c99b60' },
      { name: 'REST API Integration', level: 'Working knowledge', experience: 'Frontend ↔ Backend', description: 'Connecting frontend interfaces to backend endpoints and handling application data.', icon: 'Network', color: '#8eb8b0' },
      { name: 'Vercel & Netlify', level: 'Used for deployments', experience: 'Deployment', description: 'Publishing portfolio and web application projects to live hosting platforms.', icon: 'Globe', color: '#d5d9dc' }
    ]
  }
];
