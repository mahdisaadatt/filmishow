import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setDarkMode(false);
    }
  }, [isDarkMode]);
  const toggleDarkMode = checked => {
    setDarkMode(checked);
    if (!isDarkMode) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  };
  return [isDarkMode, toggleDarkMode];
};
