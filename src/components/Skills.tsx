import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  Server,
  Layout,
  Sparkles,
  Database,
  Wrench,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Code2,
  Server,
  Layout,
  Sparkles,
  Database,
  Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-3">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Proficiencies across core programming, enterprise Java architectures, machine learning vision pipelines, and modern frontend interfaces.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <div
                key={category.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    {category.description}
                  </p>

                  {/* Skills List with Proficiency Progress Indicators */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                          <span className="text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-blue-700 dark:text-blue-400 font-medium">
                            {skill.proficiency}
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    Academic & Internship Tested
                  </span>
                  <span>Fresher Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            * Proficiency ratings reflect demonstrated competency through engineering coursework, university lab projects, internships, and self-directed builds, without commercial exaggeration.
          </p>
        </div>

      </div>
    </section>
  );
}
