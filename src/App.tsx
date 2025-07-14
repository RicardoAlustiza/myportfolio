import { HeroComponent } from "./components/HeroComponent"
import { NavBarComponent } from "./components/NavBarComponent";
import { AboutComponent } from "./components/AboutComponent";
import { ProjectsComponent } from "./components/ProjectsComponent";
import { ContactComponent } from "./components/ContactComponent";
import { FooterComponent } from "./components/FooterComponent";

function App() {

  return (
    <div className={'dark:bg-gray-900 dark:text-white bg-white text-gray-900'}>
      <NavBarComponent />
      <HeroComponent />
      <AboutComponent />
      <ProjectsComponent />
      <ContactComponent />
      <FooterComponent />
    </div> 
  )
}

export default App
