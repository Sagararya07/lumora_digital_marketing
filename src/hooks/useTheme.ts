import { useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    localStorage.setItem('lumora_theme', 'light');
  }, [theme]);

  const toggleTheme = () => {
    // Keep light theme active
    setTheme('light');
  };

  return { theme: 'light' as ThemeMode, setTheme, toggleTheme };
}
