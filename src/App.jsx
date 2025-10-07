import './index.css';
import './App.css';

import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{' '}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-white'
      ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
      </div>
    </>
  );
}

export default App;
