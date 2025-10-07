
import "./index.css"
import './App.css'

import { LoadingScreen } from './components/LoadingScreen'
import { useState } from "react";
import { NavBar } from './components/NavBar';

function App() {

  const[isLoaded, setIsLoaded] = useState(false);

  return (
  <>
    {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}{" "}

    <div className={`min-h-screen transition-opacity duration-700 bg-black text-white'
      ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <NavBar></NavBar>

    </div>
  </>
  )
}

export default App
