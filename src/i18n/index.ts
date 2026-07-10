import { es } from './locales/es';
import { en } from './locales/en';

export interface TranslationSchema {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    tagline: string;
    greeting: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    subtitle: string;
    bio1: string;
    bio2: string;
    categories: {
      frontend: string;
      backend: string;
      tools: string;
      other: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    featured: string;
    demo: string;
    code: string;
    items: Record<string, { title: string; description: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  footer: {
    madeWith: string;
  };
}

export const translations: Record<string, TranslationSchema> = { es, en };
