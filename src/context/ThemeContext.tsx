'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isLight: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isLight: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const light = saved === 'light';
    setIsLight(light);
    if (light) {
      document.documentElement.classList.add('light-mode');
    }
    // enable transitions only after theme is applied to avoid flash on load
    document.documentElement.classList.add('theme-ready');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
    document.documentElement.classList.toggle('light-mode', next);
  };

  if (!mounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
