import { useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  FileText,
  Mail,
  ArrowDown,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Phone,
  Linkedin,
  Camera,
  RotateCcw,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentAvatar, setCurrentAvatar] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const custom = localStorage.getItem('soumya_custom_avatar');
      if (custom) return custom;
    }
    return personalInfo.avatar;
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCurrentAvatar(result);
          localStorage.setItem('soumya_custom_avatar', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentAvatar(personalInfo.avatar);
    localStorage.removeItem('soumya_custom_avatar');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Subtle geometric background accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text and Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Technology Roles & Graduate Opportunities</span>
            </div>

            {/* Candidate Name */}
            <h1
              id="hero-candidate-name"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4"
            >
              {personalInfo.name}
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-lg sm:text-xl font-semibold text-blue-800 dark:text-blue-400 mb-5 leading-snug"
            >
              {personalInfo.subtitle}
            </p>

            {/* Verbatim Short Introduction */}
            <p
              id="hero-bio-summary"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              {personalInfo.bioSummary}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                id="hero-btn-view-work"
                type="button"
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-700/20 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-download-resume"
                type="button"
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>

              <button
                id="hero-btn-contact-me"
                type="button"
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick credentials badges row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Academic Merit</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">8.76 CGPA</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Distinction</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">3-Sem Gold Medalist</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Industry Exposure</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">3 Internships</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">National Honors</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">SIH & IIT Finalist</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Illustration / Avatar Area (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent rounded-3xl blur-md" />

              {/* Main portrait card */}
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-3 sm:p-4 shadow-xl shadow-slate-200/50 dark:shadow-none">
                {/* Candidate Image */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 group">
                  <img
                    id="hero-profile-avatar"
                    src={currentAvatar}
                    alt="Soumya Ranjan Parida - Computer Science Engineering Graduate"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40" />

                  {/* Hidden file input for custom photo replacement */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />

                  {/* Top-left Change/Upload Photo button */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-sm hover:bg-blue-700 transition-colors cursor-pointer border border-white/20"
                      title="Upload or change with your photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-blue-300" />
                      <span className="hidden sm:inline">Upload Photo</span>
                    </button>

                    {currentAvatar !== personalInfo.avatar && (
                      <button
                        type="button"
                        onClick={handleResetAvatar}
                        className="p-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white hover:bg-slate-800 transition-colors cursor-pointer border border-white/20"
                        title="Reset to default photo"
                      >
                        <RotateCcw className="w-3 h-3 text-slate-300" />
                      </button>
                    )}
                  </div>

                  {/* Top-right verified tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>B.Tech CSE 2026</span>
                  </div>

                  {/* Bottom bar inside portrait */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        GIFT Autonomous College
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Khordha, Odisha, India
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center justify-end gap-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>3-Sem Gold Medalist</span>
                      </div>
                      <div className="text-[11px] text-blue-700 dark:text-blue-300 font-bold">
                        CGPA: 8.76 • 2026
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct quick contact links */}
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 px-1">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate max-w-[150px] sm:max-w-none">{personalInfo.email}</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-1"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
