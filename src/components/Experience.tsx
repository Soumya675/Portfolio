import { internshipsData } from '../data/portfolioData';
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  Calendar,
  Layers,
  Building2,
  ChevronRight,
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-3">
            Practical Exposure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internships & Industrial Training
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Specialized industrial internship experiences bridging academic computer science concepts with enterprise Java development, AI model engineering, and full-stack software systems.
          </p>
        </div>

        {/* Internships Grid (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipsData.map((intern, idx) => (
            <div
              key={intern.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row with sequence and location */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    Internship 0{idx + 1}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{intern.location}</span>
                  </div>
                </div>

                {/* Role and Organization */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {intern.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-800 dark:text-blue-400 mt-0.5">
                      {intern.organization}
                    </div>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {intern.description}
                </p>

                {/* Practical Takeaways */}
                <div className="mb-5 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Practical Outcomes
                  </div>
                  {intern.keyLearnings.map((learning, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Tag List */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {intern.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
