import { personalInfo, educationData, internshipsData, projectsData, achievementsData, extracurricularData, skillCategories } from '../data/portfolioData';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-200 print:border-none print:shadow-none print:p-0 print:max-h-none print:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar (Hidden on print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
              Official Curriculum Vitae
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Class of 2022–2026 • 3-Semester Gold Medalist (8.76 CGPA) • GIFT Autonomous College
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="resume-document text-slate-900 font-sans text-sm leading-normal">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-300 mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 mb-2">
              {personalInfo.name}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-500" />
                {personalInfo.phoneFormatted}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-blue-600" />
                {personalInfo.linkedinDisplay}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                Bhubaneswar, Odisha, India
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-900/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              Recent Computer Science Engineering graduate eager to begin a career in the tech industry. Committed to learning, growing, and contributing to a dynamic team. Quick learner seeking opportunities to gain experience, build skills, and make a positive impact in a fast-paced, innovative environment while continuously improving and embracing new challenges.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-900/20 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600">{edu.institution}, {edu.location}</div>
                    {edu.id === 'edu-1' && (
                      <div className="text-[11px] text-amber-800 font-semibold mt-0.5">
                        ★ 3-Semester Gold Medalist for scholastic rank & academic excellence
                      </div>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-semibold text-slate-800">{edu.period}</div>
                    <div className="font-bold text-blue-800">{edu.scoreType}: {edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-900/20 pb-1 mb-2.5">
              Technologies & Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <div>
                <strong className="text-slate-900">Programming Languages:</strong> Java, Python, JavaScript
              </div>
              <div>
                <strong className="text-slate-900">Front-End:</strong> HTML5, CSS3, React.js, Tailwind CSS
              </div>
              <div>
                <strong className="text-slate-900">Back-End:</strong> Java, Spring Boot, Spring Security, Hibernate, JPA
              </div>
              <div>
                <strong className="text-slate-900">AI / ML:</strong> Machine Learning, TensorFlow, Keras, CNN, OpenCV, NumPy
              </div>
              <div>
                <strong className="text-slate-900">Database & Big Data:</strong> MySQL, Big Data (NASSCOM Gold Medal), SQL, Relational Modeling
              </div>
              <div>
                <strong className="text-slate-900">Tools & Platforms:</strong> Eclipse, Git, GitHub, VS Code, Postman
              </div>
            </div>
          </div>

          {/* Practical Internships */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-900/20 pb-1 mb-3">
              Internships & Industrial Exposure
            </h2>
            <div className="space-y-3">
              {internshipsData.map((intern) => (
                <div key={intern.id} className="text-xs">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-900">{intern.role} – {intern.organization}</span>
                    <span className="text-slate-500 font-medium">{intern.location}</span>
                  </div>
                  <p className="text-slate-700 mt-0.5 leading-snug">{intern.description}</p>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    <strong>Tech:</strong> {intern.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Engineering Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-900/20 pb-1 mb-3">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-900">{proj.title}</span>
                    <span className="text-slate-500 text-[11px]">{proj.category}</span>
                  </div>
                  <div className="text-[11px] text-blue-800 font-semibold mb-1">
                    Tech Stack: {proj.technologies.join(', ')}
                  </div>
                  <p className="text-slate-700 leading-snug">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications and Achievements */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-900/20 pb-1 mb-2">
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
              <li>
                <strong>3-Semester Gold Medalist:</strong> Conferred for highest scholastic merit and academic excellence across 3 consecutive semesters in B.Tech CSE (8.76 CGPA).
              </li>
              <li>
                <strong>NASSCOM Big Data Certification (Gold Medalist):</strong> Awarded prestigious national Gold Medal distinction in Big Data architecture & analytics.
              </li>
              <li>
                <strong>Smart India Hackathon (SIH) 2025:</strong> National Finalist
              </li>
              <li>
                <strong>IIT Bhubaneswar Pitch Deck Competition:</strong> Finalist for innovative tech-startup business model & pitch presentation.
              </li>
              <li>
                <strong>KIIT University BRICS Summit:</strong> Finalist delegate representing collegiate innovation
              </li>
              <li>
                <strong>NPTEL Online Certification (IIT Madras):</strong> Data Structures and Algorithms in Java
              </li>
              <li>
                <strong>Full Stack Java Development:</strong> Internship course certification at Q Spyder
              </li>
            </ul>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-900/20 pb-1 mb-2">
              Extracurricular Activities & Leadership
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
              <li>
                <strong>Class Representative (CR) – 3 Consecutive Years:</strong> Elected representative for the B.Tech CSE cohort; coordinated academic scheduling, represented student interests with faculty & department heads, and resolved peer grievances.
              </li>
              <li>
                <strong>Team Lead at State Level Event – Festronix:</strong> Helped organize and manage competitive events and participants.
              </li>
              <li>
                <strong>Member of GIFT Technical Club:</strong> Contributed to coding workshops and mentored junior students in programming logic.
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Print Button */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end gap-3 print:hidden">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl bg-blue-700 text-white font-semibold text-xs hover:bg-blue-800 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
