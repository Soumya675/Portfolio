export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  description?: string;
  highlight?: string;
}

export interface InternshipItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period?: string;
  description: string;
  technologies: string[];
  keyLearnings: string[];
  badgeColor?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100 for visual indicator
  proficiency: 'Familiar' | 'Intermediate' | 'Proficient' | 'Advanced Academic';
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI/ML' | 'Frontend';
  technologies: string[];
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  architectureHighlights: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  category: 'Hackathon' | 'Summit' | 'Certification' | 'Training' | 'Academic' | 'Honor';
  year: string;
  description: string;
  badge: string;
}

export interface ExtracurricularItem {
  id: string;
  role: string;
  eventOrClub: string;
  description: string;
  highlights: string[];
}

export interface StatItem {
  label: string;
  value: string;
  sublabel: string;
  iconName: string;
}
