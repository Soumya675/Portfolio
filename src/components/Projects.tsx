import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import ProjectModal from './ProjectModal';
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowRight,
  Eye,
  FolderGit2,
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full Stack' | 'AI/ML' | 'Frontend'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world systems engineered across Java Enterprise stacks, Machine Learning computer vision, and responsive web architectures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'Full Stack', 'AI/ML', 'Frontend'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {filter === 'All' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Project Image Banner */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                      <span>View Architecture</span>
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer leading-snug mb-1"
                  >
                    {project.title}
                  </h3>
                  <div className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-3">
                    {project.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Quick Preview"
                    aria-label="Quick Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
