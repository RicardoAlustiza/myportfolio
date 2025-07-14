import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const NavBarComponent = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 shadow-md fixed w-full z-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="flex items-center gap-2">
        <p className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">RA</p>
        <h1 className="text-2xl font-bold">Ricardo Alustiza</h1>
      </div>
      <ul className="flex space-x-4 items-center">
        <li><a href="#about" className="hover:text-blue-500">Sobre mí</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
        <li>
          <button onClick={toggleTheme} className="ml-4 cursor-pointer">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};
