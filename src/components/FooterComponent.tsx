import { Github } from "lucide-react";

export const FooterComponent = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 text-center shadow-inner flex justify-between p-4 m-auto items-center max-w-7xl">
            <p className="text-sm">© {currentYear} Ricardo Alustiza</p>
            <Github className="inline-block w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" 
                onClick={() => window.open("https://github.com/RicardoAlustiza", "_blank")}
            />

        </footer>
  );
}