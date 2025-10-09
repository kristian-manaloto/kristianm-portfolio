import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { ExitIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'home', href: '#main' },
  { name: 'about', href: '#about' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-3 bg-background/80 backdrop-blur' : 'py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between text-primary">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#main" className="text-xl font-bold flex items-center">
            kristian<span className="text-glow text-foreground">.manaloto</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle + Mobile Menu */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? (
              <ExitIcon size={24} />
            ) : (
              <HamburgerMenuIcon size={24} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
