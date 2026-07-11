import type { NavLink, ProjectMeta, Skill, SocialLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { href: '#about', navKey: 'about' },
  { href: '#projects', navKey: 'projects' },
  { href: '#contact', navKey: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/RicardoAlustiza', label: 'GitHub' },
  { href: 'https://linkedin.com/in/ricardo-alustiza-rosales-95b71b149', label: 'LinkedIn' },
];

export const PROJECTS: ProjectMeta[] = [
  {
    id: '1',
    image: 'images/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg',
    link: '',
    githubLink: 'https://github.com/RicardoAlustiza',
    tags: ['React', 'TypeScript', 'Tailwind'],
    featured: true,
  },
  {
    id: '2',
    image: 'images/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg',
    link: '',
    githubLink: 'https://github.com/RicardoAlustiza',
    tags: ['Node.js', 'Supabase', 'PostgreSQL'],
    featured: false,
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Chakra UI', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Vite', category: 'tools' },
  { name: 'Vitest', category: 'tools' },
];
