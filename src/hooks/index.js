import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getAllMovies, getArrivalMovies, getMovie } from '../api/moviesApi';

export const useAllMovies = () => {
  return useQuery(['movies'], getAllMovies);
};

export const useMovie = id => {
  return useQuery(['movie', id], () => getMovie(id), { enabled: Boolean(id) });
};

export const useArrivalMovies = () => {
  return useQuery(['arrival'], getArrivalMovies);
};

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
