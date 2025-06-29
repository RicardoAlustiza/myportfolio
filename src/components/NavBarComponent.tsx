import { Moon, Sun } from 'lucide-react';

type NavBarComponentProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const NavBarComponent = ({ darkMode, toggleDarkMode }: NavBarComponentProps) => {
      return (
    <nav className={`flex justify-between items-center p-4 shadow-md fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h1 className="text-2xl font-bold">Mi Portafolio</h1>
      <ul className="flex space-x-4 items-center">
        <li><a href="#about" className="hover:text-blue-500">Sobre mí</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
        <li>
          <button onClick={toggleDarkMode} className="ml-4">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};
