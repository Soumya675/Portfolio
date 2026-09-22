import { achievementsData, extracurricularData } from '../data/portfolioData';
import {
  Award,
  Trophy,
  CheckCircle2,
  Users,
  Calendar,
  Sparkles,
  Medal,
  Flag,
} from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-3">
            Honors & Activities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements & Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            National hackathon milestones, institutional summits, premier technical certifications, and collegiate leadership contributions.
          </p>
        </div>

        {/* Two-Column Grid: Honors vs Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certifications & Competitions (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Academic Honors & Certifications</span>
            </h3>

            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                    <Medal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                        {item.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                      {item.organization}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Leadership & Extracurriculars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Leadership & Extracurricular</span>
            </h3>

            {extracurricularData.map((extra) => (
              <div
                key={extra.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400">
                    <Flag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {extra.role}
                    </h4>
                    <div className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                      {extra.eventOrClub}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {extra.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {extra.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Candidate Credibility Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-md">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-blue-100">
                Recruiter & Interview Ready
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-3">
                All listed credentials, certifications, academic metrics, and internship training are thoroughly verified through academic transcripts and official certificates.
              </p>
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Graduation Year: 2026 | CGPA: 8.76</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
