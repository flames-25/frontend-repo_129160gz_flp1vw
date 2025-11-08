import { useEffect, useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 dark:text-white">
          Aldi Mahardiansyah
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-sky-600">About</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-sky-600">Projects</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-sky-600">Skills</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-sky-600">Contact</a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menu" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 backdrop-blur">
          <div className="px-6 py-4 grid gap-3 text-sm">
            <a href="#about" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300">Projects</a>
            <a href="#skills" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
