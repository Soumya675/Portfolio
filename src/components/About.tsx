import { personalInfo, whyWorkWithMe, keyStats } from '../data/portfolioData';
import {
  Brain,
  Zap,
  Users,
  Compass,
  GraduationCap,
  Briefcase,
  Award,
  FolderGit2,
  CheckCircle,
  Lightbulb,
  Building,
  Target,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Brain,
  Zap,
  Users,
  Compass,
  GraduationCap,
  Briefcase,
  Award,
  FolderGit2,
};

const competencies = [
  'Analytical & Computational Thinking',
  'Student Leadership (3 Years Class Representative)',
  'Clear & Articulate Communication',
  'Systematic Problem Solving',
  'Collaborative Teamwork & Code Reviews',
  'Event & Workshop Leadership',
  'Dynamic Adaptability to New Toolchains',
  'Tech-Driven Business Environment Interest',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-3">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Analytical B.Tech Computer Science Engineering graduate prepared for technology, corporate, and software engineering roles with strong academic rigor and hands-on internship experience.
          </p>
        </div>

        {/* Top Split: Detailed Profile & Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Career Objective & Background</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-base">
              I am a Computer Science Engineering graduate from <strong className="text-slate-900 dark:text-white">GIFT Autonomous College, Khordha, Odisha (2022–2026)</strong> with an <strong className="text-blue-700 dark:text-blue-400 font-bold">8.76 CGPA</strong>. My academic journey has centered around solid engineering fundamentals, object-oriented software design, relational databases, and algorithm efficiency.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base">
              Beyond pure software engineering, I am passionate about how computational solutions integrate within technology-driven business and banking ecosystems. Through hands-on internships—spanning Java enterprise systems at OCAC, AI/ML computer vision systems at CTTC, and Java Full Stack Development at Q Spiders—I have cultivated an analytical mindset, swift adaptability to unfamiliar codebases, and strong interpersonal teamwork skills.
            </p>

            {/* Academic & Professional Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>B.Tech CSE Graduate:</strong> Class of 2022–2026
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Academic Merit:</strong> 3-Semester Gold Medalist (8.76 CGPA)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Institution:</strong> GIFT Autonomous College
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Leadership:</strong> 3 Years as Class Representative (CR)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Key Honors:</strong> NASSCOM Gold Medal & IIT Finalist
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Orientation:</strong> Tech & Business Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Competency & Professional Qualities (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <span>Core Professional Attributes</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Key strengths verified through academic projects, internships, and hackathons:
              </p>

              <div className="space-y-2.5">
                {competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-600" />
                Corporate & Technology Ready
              </span>
              <span>Khordha / Bhubaneswar, Odisha</span>
            </div>
          </div>
        </div>

        {/* Animated Key Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {keyStats.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Award;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* "Why Work With Me" Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Why Work With Me?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Four fundamental values I bring to technology teams, corporate departments, and engineering initiatives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithMe.map((item, idx) => {
              const Icon = iconMap[item.icon] || Brain;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400">
                    <span>Verified in Practice</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
