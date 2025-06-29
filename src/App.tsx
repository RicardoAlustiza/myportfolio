import { useState } from "react";
import { HeroComponent } from "./components/HeroComponent"
import { NavBarComponent } from "./components/NavBarComponent";
import { AboutComponent } from "./components/AboutComponent";
import { ProjectsComponent } from "./components/ProjectsComponent";
import { ContactComponent } from "./components/ContactComponent";
import { FooterComponent } from "./components/FooterComponent";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <NavBarComponent darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <HeroComponent />
      <AboutComponent />
      <ProjectsComponent />
      <ContactComponent />
      <FooterComponent />
    </div> 
  )
}

export default App
