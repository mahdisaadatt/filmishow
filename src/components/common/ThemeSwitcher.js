import React from 'react';
import { useTheme } from '../../hooks';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitcher = () => {
  const [isDarkMode, toggleDarkMode] = useTheme();
  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      sunColor="#FFD600"
      size={30}
    />
  );
};

export default ThemeSwitcher;
