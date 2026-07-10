import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SOCIAL_LINKS } from '../data/portfolio';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: <Github className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
};

export const FooterComponent = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Ricardo Alustiza. {t.footer.madeWith}
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              {SOCIAL_ICONS[link.label]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};