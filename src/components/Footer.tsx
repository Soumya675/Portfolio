import { personalInfo } from '../data/portfolioData';
import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
  GraduationCap,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-100 dark:border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-700 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                SP
              </div>
              <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Computer Science Engineering Graduate (2022–2026), GIFT Autonomous College, Khordha, Odisha. CGPA: 8.76.
            </p>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Soumya Ranjan Parida. All rights reserved.
          </div>
          <div>
            Corporate & Technical Profile • Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
