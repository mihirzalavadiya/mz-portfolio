export type NavItem = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
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
