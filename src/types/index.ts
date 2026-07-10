export interface ProjectMeta {
  id: string;
  image: string;
  link?: string;
  githubLink?: string;
  tags: string[];
  featured?: boolean;
}

export interface Project extends ProjectMeta {
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other';

export type Theme = 'light' | 'dark';

export type Language = 'es' | 'en';

export type NavKey = keyof { about: unknown; projects: unknown; contact: unknown };

export type ContactFormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavLink {
  href: string;
  navKey: NavKey;
}

export interface SocialLink {
  href: string;
  label: string;
}
