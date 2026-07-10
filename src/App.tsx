import { LanguageProvider } from './context/LanguageContext';
import { HeroComponent } from './components/HeroComponent';
import { NavBarComponent } from './components/NavBarComponent';
import { AboutComponent } from './components/AboutComponent';
import { ProjectsComponent } from './components/ProjectsComponent';
import { ContactComponent } from './components/ContactComponent';
import { FooterComponent } from './components/FooterComponent';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <NavBarComponent />
        <main>
          <HeroComponent />
          <AboutComponent />
          <ProjectsComponent />
          <ContactComponent />
        </main>
        <FooterComponent />
      </div>
    </LanguageProvider>
  );
}

export default App;
