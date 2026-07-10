import { Globe, Github } from 'lucide-react';
import { Badge } from './ui/Badge';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../types';

export const ProjectCard = ({ image, title, description, link, githubLink, tags, featured }: Project) => {
  const { t } = useLanguage();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      {featured && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow">
          {t.projects.featured}
        </span>
      )}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4 dark:border-gray-700">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Globe className="h-4 w-4" />
              {t.projects.demo}
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Github className="h-4 w-4" />
              {t.projects.code}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
