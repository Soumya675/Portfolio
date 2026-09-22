import { educationData } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Award,
} from 'lucide-react';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A strong academic foundation spanning computer science engineering coursework and high-distinction secondary schooling.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {educationData.map((edu, idx) => {
            const isBTech = idx === 0;
            return (
              <div
                key={edu.id}
                className={`relative bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isBTech
                    ? 'border-blue-500/80 dark:border-blue-500 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Featured Badge for B.Tech */}
                {isBTech && (
                  <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    <Award className="w-3.5 h-3.5 text-slate-950" />
                    <span>3-Semester Gold Medalist • CGPA: 8.76</span>
                  </div>
                )}

                <div>
                  {/* Top Row: Year and Score */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>

                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ${
                        isBTech
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {edu.scoreType}: {edu.score}
                    </span>
                  </div>

                  {/* Institution and Degree */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        isBTech
                          ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Highlight footer */}
                {edu.highlight && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{edu.highlight}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
