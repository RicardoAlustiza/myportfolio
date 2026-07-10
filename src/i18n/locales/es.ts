import type { TranslationSchema } from '../index';

export const es: TranslationSchema = {
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    tagline: 'Bienvenido a mi portafolio',
    greeting: 'Hola, soy',
    description:
      'Ingeniero de Software con pasión por crear experiencias digitales impactantes. Especializado en React, TypeScript y diseño de interfaces modernas.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
  },
  about: {
    title: 'Sobre mí',
    subtitle: 'Un poco sobre quién soy y qué hago',
    bio1: 'Soy un desarrollador frontend con experiencia en React, TypeScript y diseño de interfaces modernas. Me encanta transformar ideas en sitios web funcionales y atractivos, poniendo siempre el foco en la experiencia de usuario y la calidad del código.',
    bio2: 'Me apasiona aprender nuevas tecnologías y mantenerme al día con las mejores prácticas del sector. Disfruto trabajando tanto en equipos como de forma independiente.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Herramientas',
      other: 'Otros',
    },
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Una selección de mis trabajos más recientes',
    featured: 'Destacado',
    demo: 'Demo',
    code: 'Código',
    items: {
      '1': {
        title: 'Proyecto 1',
        description:
          'Descripción breve del proyecto 1. Aquí puedes añadir más detalles sobre las tecnologías usadas y el objetivo del proyecto.',
      },
      '2': {
        title: 'Proyecto 2',
        description:
          'Descripción breve del proyecto 2. Un proyecto backend con base de datos y API REST.',
      },
    },
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente? Hablemos',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@correo.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    success: '✅ Mensaje enviado con éxito. ¡Me pondré en contacto pronto!',
    error: '❌ Ocurrió un error. Por favor, inténtalo más tarde.',
  },
  footer: {
    madeWith: 'Hecho con ❤️ y React.',
  },
};
