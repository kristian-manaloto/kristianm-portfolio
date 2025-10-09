import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(undefined);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = storedTheme ? storedTheme === 'dark' : prefersDark;

    setIsDarkMode(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (isDarkMode === undefined) return null;

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'fixed max-sm:hidden top-5 right-5 z-60 p-2',
        'rounded-full transition-colors duration-300 focus:outline-hidden'
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
};
