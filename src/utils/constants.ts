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
