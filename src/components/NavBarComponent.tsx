import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { NAV_LINKS } from '../data/portfolio';
import type { Language, NavLink } from '../types';

const LANGUAGES: Language[] = ['es', 'en'];

export const NavBarComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (link: NavLink): void => {
    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            RA
          </span>
          <span className="text-lg font-bold tracking-tight">Ricardo Alustiza</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
              >
                {t.nav[link.navKey]}
              </button>
            </li>
          ))}

          {/* Language selector */}
          <li className="ml-2 flex overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                aria-label={`Cambiar a ${lang.toUpperCase()}`}
                className={cn(
                  'px-2.5 py-1 text-xs font-semibold uppercase transition-colors cursor-pointer',
                  language === lang
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
                )}
              >
                {lang}
              </button>
            ))}
          </li>

          <li>
            <button
              onClick={toggleTheme}
              aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
              className="ml-1 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          {/* Language selector mobile */}
          <div className="flex overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={cn(
                  'px-2 py-1 text-xs font-semibold uppercase transition-colors cursor-pointer',
                  language === lang
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Menú"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          isMenuOpen ? 'max-h-60' : 'max-h-0',
        )}
      >
        <ul className="space-y-1 border-t border-gray-200/60 px-4 py-3 dark:border-gray-700/60">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link)}
                className="w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
              >
                {t.nav[link.navKey]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
