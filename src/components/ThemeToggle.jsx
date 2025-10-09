import { useEffect, useState, useRef } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(undefined);

  // Ref for IntersectionObserver safety if needed
  const toggleRef = useRef(null);

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
    <Switch.Root
      ref={toggleRef}
      checked={isDarkMode}
      onCheckedChange={toggleTheme}
      className={cn(
        'relative inline-flex h-8 w-16 items-center rounded-full bg-gray-300 dark:bg-gray-700 p-1 cursor-pointer transition-colors duration-300',
        'fixed max-sm:hidden top-5 right-5 z-50'
      )}
      aria-label="Toggle theme"
    >
      <Switch.Thumb
        className={cn(
          'inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transform duration-300',
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        )}
      >
        {isDarkMode ? (
          <SunIcon className="h-4 w-4 text-yellow-300" />
        ) : (
          <MoonIcon className="h-4 w-4 text-blue-300" />
        )}
      </Switch.Thumb>
    </Switch.Root>
  );
};
