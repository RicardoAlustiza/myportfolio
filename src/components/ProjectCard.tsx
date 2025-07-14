import { Globe } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 max-w-sm w-full hover:shadow-lg transition-all h-[500px] flex flex-col">
      <div className="overflow-hidden rounded-xl mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="flex-1 overflow-auto custom-scrollbar">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {description}
        </p>
      </div>
      {link && (
        <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <Globe className="w-5 h-5 mr-2" />
            Visitar
          </a>
        </div>
      )}
    </div>
  );
};
