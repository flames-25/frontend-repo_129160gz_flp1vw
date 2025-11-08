import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function BackgroundGlow() {
  useEffect(() => {}, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-32 right-0 h-72 w-72 md:h-[420px] md:w-[420px] rounded-full bg-sky-500/30 blur-3xl" />
      <div className="absolute bottom-0 -left-24 h-72 w-72 md:h-[420px] md:w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
      <Navbar />
      <BackgroundGlow />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Aldi Mahardiansyah. All rights reserved.
      </footer>
    </div>
  );
}
