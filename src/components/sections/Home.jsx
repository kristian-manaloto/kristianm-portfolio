import { About } from './About';
import { NavBar } from '../NavBar';
import { Project } from './Project';
import { ThemeToggle } from '../ThemeToggle';
import { Main } from './Main';
import { LoadingScreen } from '../LoadingScreen';
import { useState } from 'react';
import { Footer } from '../Footer';
import { ContactMe } from './ContactMe';

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="scroll-smooth min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ThemeToggle  */}

      {/* Loading overlay */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Main content */}
      <div
        className={`min-h-screen transition-opacity duration-700
          ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <NavBar />
        <main>
          <Main />
          <About />
          <Project />
          <ContactMe />
          <Footer />
        </main>
      </div>
    </div>
  );
};
