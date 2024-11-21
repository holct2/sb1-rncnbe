import { Sun, Moon } from 'lucide-react';

interface ThemeSwitcherProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function ThemeSwitcher({ isDark, toggleTheme }: ThemeSwitcherProps) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm transition-colors duration-200 hover:bg-opacity-30 z-50"
      style={{ 
        backgroundColor: isDark ? '#ffffff' : '#220041',
        color: isDark ? '#220041' : '#ffffff'
      }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}