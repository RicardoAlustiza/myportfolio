import { useState } from "react";
import { HeroComponent } from "./components/HeroComponent"
import { NavBarComponent } from "./components/NavBarComponent";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <NavBarComponent darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <HeroComponent />
    </div> 
  )
}

export default App
