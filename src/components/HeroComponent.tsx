import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { SOCIAL_LINKS } from '../data/portfolio';

export const HeroComponent = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Gradient background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-3xl dark:bg-blue-500/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl dark:bg-indigo-500/10"
      />

      <div className="relative z-10 max-w-3xl">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t.hero.greeting}{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
            Ricardo Alustiza
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.ctaProjects}
          </Button>
          <Button size="lg" variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.ctaContact}
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              {link.label === 'GitHub' && <Github className="h-6 w-6" />}
              {link.label === 'LinkedIn' && <Linkedin className="h-6 w-6" />}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ArrowDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </motion.section>
  );
};