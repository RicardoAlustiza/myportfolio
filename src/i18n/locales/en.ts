import type { TranslationSchema } from '../index';

export const en: TranslationSchema = {
  nav: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    tagline: 'Welcome to my portfolio',
    greeting: "Hi, I'm",
    description:
      'Software Engineer passionate about creating impactful digital experiences. Specialized in React, TypeScript and modern interface design.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact me',
  },
  about: {
    title: 'About me',
    subtitle: 'A bit about who I am and what I do',
    bio1: 'I am a frontend developer with experience in React, TypeScript and modern interface design. I love turning ideas into functional and attractive websites, always focusing on user experience and code quality.',
    bio2: 'I am passionate about learning new technologies and staying up to date with industry best practices. I enjoy working both in teams and independently.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools',
      other: 'Other',
    },
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of my most recent work',
    featured: 'Featured',
    demo: 'Demo',
    code: 'Code',
    items: {
      '1': {
        title: 'Project 1',
        description:
          'Brief description of project 1. Here you can add more details about the technologies used and the project objective.',
      },
      '2': {
        title: 'Project 2',
        description:
          'Brief description of project 2. A backend project with database and REST API.',
      },
    },
  },
  contact: {
    title: 'Contact',
    subtitle: "Have a project in mind? Let's talk",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    submit: 'Send message',
    submitting: 'Sending...',
    success: "✅ Message sent successfully. I'll get back to you soon!",
    error: '❌ An error occurred. Please try again later.',
  },
  footer: {
    madeWith: 'Made with ❤️ and React.',
  },
};
