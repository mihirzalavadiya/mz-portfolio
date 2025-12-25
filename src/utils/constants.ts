export type NavItem = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// About Section Types and Content
type DeveloperCardConfig = {
  name: string;
  role: string;
  location: string;
  status: string;
};

type AboutSectionContent = {
  sectionTitle: string;
  headline: string;
  description: string[];
  techStackTitle: string;
  skills: string[];
  devCard: DeveloperCardConfig;
};

export const ABOUT_CONTENT: AboutSectionContent = {
  sectionTitle: 'About Me',
  headline: 'Transforming concepts into seamless User Experiences.',
  description: [
    'I am a passionate Frontend Developer based in Bangalore. I specialize in building modern web applications using the latest technologies. My focus is on writing clean, efficient code and designing intuitive user interfaces.',
    "When I'm not coding, you can find me exploring new tech trends or refining my problem-solving skills.",
  ],
  techStackTitle: 'Tech Stack',
  skills: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'JavaScript',
    'Git',
    'Framer Motion',
  ],
  devCard: {
    name: 'Mihir Zalavadiya',
    role: 'Frontend Dev',
    location: 'Bangalore, India',
    status: 'Building awesome things',
  },
};

// Experience
export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Kristal.AI',
    role: 'Frontend Engineer',
    location: 'Bangalore',
    period: 'May 2022 - Present',
    description: [
      'Optimized the Auto-Recommendation Engine using ML models and user-behavior analytics, improving customer engagement by 25% and repeat purchases by 10%.',
      'Built the RM Engagement Dashboard, enabling Relationship Managers to track client interactions, view investment journeys, and prioritize high-intent clients, significantly improving conversion.',
      'Revamped internal UI tooling enabling teams to build custom landing pages without engineering dependency, increasing adoption and team satisfaction.',
      'Upgraded the entire Next.js codebase to the latest version, streamlined dependency structure, and achieved major improvements in page performance and load times.',
      'Implemented GitHub Submodule architecture across multiple parent repositories to improve reusability, maintainability, and development speed.',
      'Designed and developed a fully responsive KYC Information System UI in Next.js, integrating automated validations reducing manual onboarding errors by 100% and improving speed by 80%.',
      'Configured a global CDN setup for SCSS and image assets, reducing latency and improving worldwide content delivery.',
      'Built high-quality marketing websites in Webflow, including custom animations, interactions, and cross-device responsive behavior.',
      'Developed backend modules in Java + Spring Boot for bulk Excel ingestion to update ticker mappings and detect missing tickers.',
      'Engineered CP Share Management backend modules using PostgreSQL to track Product Categories, Fee Levels, and Exceptions.',
      'Implemented an intelligent FX-buffer order validation system for Allfunds trades, providing real-time cash checks and zero manual intervention.',
    ],
  },
  {
    company: 'Kristal.AI',
    role: 'Frontend Engineer Intern',
    location: 'Bangalore',
    period: 'Jan 2022 - Apr 2022',
    description: [
      'Led the migration of key modules from Angular to Next.js, improving performance and maintainability.',
      'Contributed to core product portal workflows, enhancing user efficiency and experience.',
      'Developed responsive and modular UI components using Next.js, SCSS, and Redux (with Saga Middleware).',
    ],
  },
];

// projects
// src/utils/constants.ts

// src/utils/constants.ts

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  keyFeatures: string[];
  overview: string;
  gallery?: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: 'Namaste Tech',
    category: 'Tech',
    description:
      'A learning hub providing solutions to Namaste Dev problems, technical blogs, LeetCode explanations, and frontend project ideas.',
    image: '/projects/namaste_tech.png',
    techStack: ['Next.js', 'JavaScript', 'Redux', 'CSS', 'Firebase'],
    liveUrl: 'https://namaste-tech.vercel.app/',
    githubUrl: 'https://github.com/mihirzalavadiya/namaste-tech',
    keyFeatures: [
      'Namaste Dev problem solutions',
      'Technical blog posts',
      'LeetCode explanations',
      'Curated frontend project ideas',
    ],
    overview:
      'Namaste Tech was built as a centralized platform for frontend learners to practice, learn, and grow. The project focuses on clean UI, scalable architecture, and performance using Next.js, while organizing educational content in an easy-to-navigate format.',
    gallery: [
      '/projects/namaste_tech_1.png',
      '/projects/namaste_tech_2.png',
      '/projects/namaste_tech_3.png',
    ],
  },
  {
    id: 2,
    title: 'ShowFlix GPT',
    category: 'Entertainment',
    description:
      'ShowFlix GPT is an AI-powered movie discovery app that helps users explore trending movies, get personalized recommendations, and find similar titles through intelligent search.',
    image: '/projects/showflix_gpt.png',
    techStack: ['React.js', 'Tailwind CSS', 'Groq AI', 'Firebase'],
    liveUrl: 'https://show-flix-gpt.vercel.app/',
    githubUrl: 'https://github.com/mihirzalavadiya/showflix-gpt',
    keyFeatures: [
      'AI-powered movie search',
      'Personalized movie recommendations',
      'Trending and popular movies listing',
      'Similar movie suggestions',
    ],
    overview:
      'ShowFlix GPT was built to combine modern frontend development with AI-driven experiences. The focus was on creating a fast, intuitive UI using React.js while integrating AI-based search and recommendations to enhance content discovery. The app delivers a smooth and engaging movie browsing experience across devices.',
    gallery: [
      '/projects/showflix_gpt_1.png',
      '/projects/showflix_gpt_2.png',
      '/projects/showflix_gpt_3.png',
    ],
  },
  {
    id: 3,
    title: 'Snack Spire',
    category: 'Food',
    description:
      'Snack Spire is a food discovery web application built using React.js, where I implemented and showcased almost every major React concept. The project focuses on providing a smooth user experience for browsing restaurants, exploring menus, and managing interactions, while maintaining scalable code architecture.',
    image: '/projects/snack_spire.png',
    techStack: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    liveUrl: 'https://snack-spire.vercel.app/',
    githubUrl: 'https://github.com/mihirzalavadiya/first-hello-world',
    keyFeatures: [
      'Interactive Food Menu',
      'Cart State Management',
      'Responsive Grid Layout',
      'Fast Loading Speed',
    ],
    overview:
      'Snack Spire was built to master the fundamentals of React.js. The main challenge was to create a smooth, lag-free food ordering interface without using complex state management libraries like Redux initially. I focused on prop-drilling and Context API to manage the cart state efficiently. The result is a lightning-fast application that offers a seamless user experience across all devices.',
  },
  {
    id: 4,
    title: 'ViewTube',
    category: 'Entertainment',
    description:
      'A YouTube-inspired video streaming platform for browsing, searching, and watching trending videos with a clean and responsive UI.',
    image: '/projects/view_tube.png',
    techStack: ['React.js', 'YouTube Data API', 'Tailwind CSS'],
    liveUrl: 'https://view-tube-one.vercel.app/',
    githubUrl: 'https://github.com/mihirzalavadiya/view-tube',
    keyFeatures: [
      'Video listing with thumbnails',
      'Search functionality',
      'Video player with recommendations',
      'Responsive layout for all devices',
    ],
    overview:
      'ViewTube was built to understand how large-scale video platforms work under the hood. The focus was on efficient data fetching, reusable components, and delivering a smooth video browsing experience using React.js and modern frontend practices.',
    gallery: [
      '/projects/view_tube_1.png',
      '/projects/view_tube_2.png',
      '/projects/view_tube_3.png',
    ],
  },
  {
    id: 5,
    title: 'DevToolBox',
    category: 'Developer Productivity Suite',
    description:
      'A high-performance, all-in-one local-first productivity suite designed to streamline developer workflows with essential utilities in a single, minimal interface.',
    image: '/projects/dev_toolbox.png',
    techStack: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Monaco Editor',
      'Lucide React',
      'Next Themes',
      'Sonner',
    ],
    liveUrl: 'https://dev-toolbox-mz.vercel.app/',
    githubUrl: 'https://github.com/mihirzalavadiya/dev-toolbox',
    keyFeatures: [
      'All-in-one developer utility hub (JSON, JWT, API, Regex, Base64, UUID)',
      'High-performance JSON formatter and validator',
      'JWT decoding and debugging with real-time feedback',
      'Postman-like API tester with request configuration',
      'Local Snippet Vault with persistent browser storage',
      'Monaco Editor integration for VS Code–like editing experience',
      'Local-first architecture with no external data dependency',
      'Dark / Light theme support with a sleek violet UI',
      'Keyboard-friendly and distraction-free UX',
    ],
    overview:
      'DevToolBox is built as a local-first developer productivity platform focused on speed, reliability, and minimalism. It removes the need for multiple external tools by consolidating essential debugging and formatting utilities into a single workspace. The system follows a modular architecture, allowing new tools to be added seamlessly while maintaining high performance and a consistent user experience.',
    gallery: [
      '/projects/dev_toolbox_1.png',
      '/projects/dev_toolbox_2.png',
      '/projects/dev_toolbox_3.png',
    ],
  },
  {
    id: 6,
    title: 'GBC (Goal Based Calculator)',
    category: 'FinTech',
    description:
      'A goal-based financial planning calculator that helps users estimate returns, plan retirement goals, and visualize asset allocation.',
    image: '/projects/gbc.png',
    techStack: ['React.js', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://gbc-ui.netlify.app/',
    githubUrl: 'https://github.com/mihirzalavadiya/GBC',
    keyFeatures: [
      'Goal-based investment planning',
      'Dynamic asset allocation visualization',
      'Retirement and savings projections',
      'Interactive charts and sliders',
    ],
    overview:
      'GBC was built to simplify financial planning through an intuitive and data-driven interface. The focus was on real-time calculations, clean UI, and visual representation of investment goals and asset allocation to help users make informed financial decisions.',
    gallery: ['/projects/gbc_1.png', '/projects/gbc_2.png'],
  },
  {
    id: 7,
    title: 'Typing Speed Test',
    category: 'Utility',
    description:
      'A web-based typing speed test application to measure typing speed and accuracy in real time.',
    image: '/projects/typing_speed_test.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://masteroftype.netlify.app',
    githubUrl: 'https://github.com/mihirzalavadiya/typing-speed-test',
    keyFeatures: [
      'Real-time typing speed calculation',
      'Accuracy tracking',
      'Timer-based test sessions',
      'Responsive and minimal UI',
    ],
    overview:
      'Typing Speed Test was built to strengthen core JavaScript fundamentals and DOM manipulation skills. The project focuses on real-time input handling, performance calculation, and delivering a smooth user experience with a clean and responsive interface.',
    gallery: ['/projects/typing_speed_test_1.png'],
  },
  {
    id: 8,
    title: 'QR Generator',
    category: 'Utility',
    description:
      'A simple web application to generate QR codes instantly for text and URLs.',
    image: '/projects/qr_generator.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://qrgenerat.netlify.app',
    githubUrl: 'https://github.com/mihirzalavadiya/gegerate-qr-code',
    keyFeatures: [
      'Instant QR code generation',
      'Support for text and URL inputs',
      'Downloadable QR codes',
      'Clean and responsive UI',
    ],
    overview:
      'QR Generator was built to practice core JavaScript concepts and DOM manipulation. The focus was on creating a fast, lightweight utility with a simple user interface that allows users to generate QR codes effortlessly.',
  },
  {
    id: 9,
    title: 'Cart Saver Extension',
    category: 'Browser Extension',
    description:
      'A universal wishlist assistant that saves products from Amazon, Flipkart, and Myntra into a single dashboard using smart hybrid scraping.',
    image: '/projects/cart_saver.png',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Chrome API'],
    liveUrl:
      'https://github.com/mihirzalavadiya/cart-saver-extention/blob/main/README.md',
    githubUrl: 'https://github.com/mihirzalavadiya/cart-saver-extention',
    keyFeatures: [
      'Universal Scraping (Amazon, Flipkart, Myntra, etc.)',
      'Smart Fallback Logic (JSON-LD & Meta Tags)',
      'Persistent Local Storage using Zustand',
      'Modern Glassmorphism UI with TailwindCSS',
      'One-click direct access to product pages',
    ],
    overview:
      'Cart Saver was built to solve the fragmented shopping experience by unifying wishlists from multiple e-commerce platforms. It utilizes a robust hybrid scraping engine that switches between CSS selectors and JSON-LD structured data to ensure accurate price and image detection. The project leverages React for a dynamic UI and Chrome Storage/Zustand for persistent data management, handling real-time DOM manipulation efficiently.',
    gallery: ['/projects/cart_saver_1.png', '/projects/cart_saver_2.png'],
  },
];
