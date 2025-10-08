import { About } from './About';
import { ContactMe } from './ContactMe';
import { NavBar } from '../NavBar';
import { Project } from './Project';
import { ThemeToggle } from '../ThemeToggle';
import { Main } from './Main';

export const Home = () => {
  return (
    <div className="scroll-smooth min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme*/}
      <ThemeToggle />
      {/*Background*/}
      {/*NavBar */}
      <NavBar />
      {/*Content*/}
      <main>
        <Main />
        <About />
        <Project />
        <ContactMe />
      </main>
      {/*Footer*/}
    </div>
  );
};
