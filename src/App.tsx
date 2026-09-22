/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationTimeline from './components/EducationTimeline';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      // Default to light theme with dark navy/blue accent colors as requested in prompt
      return false;
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <EducationTimeline />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Resume Preview & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 print:hidden">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </button>
        )}

        <button
          type="button"
          onClick={scrollToContact}
          className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-700/25 transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Contact directly"
          title="Contact Soumya"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
