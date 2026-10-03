import {
  EducationItem,
  InternshipItem,
  SkillCategory,
  ProjectItem,
  AchievementItem,
  ExtracurricularItem,
  StatItem,
} from '../types';

import soumyaPortrait from '../assets/images/soumya_real_portrait_1790061774619.jpg';
import ecommerceImg from '../assets/images/ecommerce_project_1790061186990.jpg';
import animalImg from '../assets/images/animal_prediction_1790061202976.jpg';
import portfolioImg from '../assets/images/portfolio_preview_1790061224303.jpg';
import kathaAiImg from '../assets/images/katha_ai_preview_1791008080563.jpg';
import talentMatchImg from '../assets/images/talentmatch_preview_1791008093834.jpg';
import jobskulImg from '../assets/images/jobskul_preview_1791008105846.jpg';
import smartShopImg from '../assets/images/smart_shop_preview_1791008121192.jpg';
import spVehicleImg from '../assets/images/sp_vehicle_preview_1791008137531.jpg';
import youthClubImg from '../assets/images/youth_club_preview_1791008151280.jpg';

export const personalInfo = {
  name: 'Soumya Ranjan Parida',
  title: 'Computer Science Engineering Graduate',
  subtitle: 'Computer Science Engineering Graduate | Technology Enthusiast | Problem Solver',
  email: 'soumyaparida306@gmail.com',
  phone: '9336330551',
  phoneFormatted: '+91 9336330551',
  linkedin: 'https://linkedin.com/in/Soumya',
  linkedinDisplay: 'linkedin.com/in/Soumya',
  github: 'https://github.com/soumyaranjan-parida',
  githubDisplay: 'github.com/soumya',
  portfolioUrl: 'https://srpportfolio.netlify.app/',
  portfolioDisplay: 'srpportfolio.netlify.app',
  location: 'Khordha / Bhubaneswar, Odisha, India',
  college: 'GIFT Autonomous College, Khordha, Odisha',
  degree: "Bachelor of Technology, Computer Science Engineering",
  graduationBatch: '2022 – 2026',
  cgpa: '8.76',
  avatar: soumyaPortrait,
  bioSummary:
    'An analytical and adaptable Computer Science Engineering graduate and 3-Semester Gold Medalist with an 8.76 CGPA, practical internship experience, strong problem-solving skills and a passion for learning and building technology-driven solutions.',
  fullAbout:
    'B.Tech Computer Science Engineering graduate and 3-Semester Gold Medalist from GIFT Autonomous College, Khordha, Odisha (2022–2026) with an outstanding academic record of 8.76 CGPA. Grounded in strong fundamentals across algorithms, software engineering principles, and database design. Eager to launch a dynamic career in technology and corporate environments, combining hands-on internship experience in Java enterprise systems at OCAC, Machine Learning at CTTC, and Java Full Stack Development at Q Spiders with 3 years of leadership as Class Representative (CR) and proactive communication.',
};

export const whyWorkWithMe = [
  {
    title: 'Analytical Thinker',
    icon: 'Brain',
    description:
      'Approaches complex technical problems with structured logic, computational rigor, and mathematical problem-solving developed through rigorous coursework and competitive hackathons.',
  },
  {
    title: 'Quick Learner',
    icon: 'Zap',
    description:
      'Successfully completed practical industry internships across Java development at OCAC, AI/ML vision models at CTTC, and Java Full Stack at Q Spiders, adapting swiftly to new toolchains and codebases.',
  },
  {
    title: 'Leadership & Team Player',
    icon: 'Users',
    description:
      'Served 3 consecutive years as Class Representative (CR), managing student-faculty liaison, cohort logistics, and grievance resolution, alongside technical club peer mentorship.',
  },
  {
    title: 'Adaptable Professional',
    icon: 'Compass',
    description:
      'Versatile mindset prepared for technology roles, banking systems, corporate analysis, and software development with high resilience and continuous self-improvement.',
  },
];

export const keyStats: StatItem[] = [
  {
    label: 'Academic Merit',
    value: '8.76',
    sublabel: 'CGPA • 3-Sem Gold Medalist',
    iconName: 'GraduationCap',
  },
  {
    label: 'Internships',
    value: '3',
    sublabel: 'Practical Industry Roles',
    iconName: 'Briefcase',
  },
  {
    label: 'National Honors',
    value: '3x',
    sublabel: 'SIH, BRICS & IIT Finalist',
    iconName: 'Award',
  },
  {
    label: 'Core Projects',
    value: '8+',
    sublabel: 'AI, Full Stack & Mobile Systems',
    iconName: 'FolderGit2',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: "Bachelor's of Technology – Computer Science Engineering",
    institution: 'GIFT Autonomous College',
    location: 'Khordha, Odisha, India',
    period: '2022 – 2026',
    score: '8.76',
    scoreType: 'CGPA',
    description:
      'Autonomous curriculum covering Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, and Operating Systems.',
    highlight: 'Awarded 3-Semester Gold Medalist for top rank academic excellence (8.76 CGPA)',
  },
  {
    id: 'edu-2',
    degree: 'Senior Secondary (Class XII) – CBSE',
    institution: 'St Xavier School',
    location: 'Ballia, Uttar Pradesh, India',
    period: '2019 – 2021',
    score: '71.6%',
    scoreType: 'Percentage',
    description:
      'Major coursework in Physics, Chemistry, Mathematics, and English, establishing a strong quantitative and analytical foundation.',
    highlight: 'CBSE Board Examination with science stream discipline',
  },
  {
    id: 'edu-3',
    degree: 'Secondary (Class X) – CBSE',
    institution: 'LN National School',
    location: 'Ballia, Uttar Pradesh, India',
    period: '2018 – 2019',
    score: '80.0%',
    scoreType: 'Percentage',
    description:
      'Broad foundational schooling with high marks across Mathematics, Science, Social Studies, and Languages.',
    highlight: 'Graduated with 80% distinction in CBSE Board Examination',
  },
];

export const internshipsData: InternshipItem[] = [
  {
    id: 'intern-1',
    role: 'Java Developer Intern',
    organization: 'OCAC (Odisha Computer Application Centre)',
    location: 'Bhubaneswar, Odisha',
    description:
      'Hands-on practical exposure to enterprise Java programming, object-oriented principles, modular code organization, and multi-tier application development.',
    technologies: ['Java', 'Core OOP', 'Collections', 'JDBC', 'Eclipse'],
    keyLearnings: [
      'Gained deep practical understanding of Java runtime architecture and classloader mechanics.',
      'Developed modular components adhering to industry-standard OOP design principles.',
      'Constructed database connection layers with JDBC for robust data persistence.',
    ],
    badgeColor: 'blue',
  },
  {
    id: 'intern-2',
    role: 'AI & Machine Learning Intern',
    organization: 'CTTC (Central Tool Room & Training Centre)',
    location: 'Bhubaneswar, Odisha',
    description:
      'Worked intensively with Python, machine learning algorithms, dataset preprocessing pipelines, computer vision fundamentals, and neural network frameworks.',
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'OpenCV', 'NumPy'],
    keyLearnings: [
      'Preprocessed complex image and numerical datasets for model training pipelines.',
      'Explored deep learning architectures including Convolutional Neural Networks (CNNs).',
      'Implemented computer vision filters and feature extraction routines via OpenCV.',
    ],
    badgeColor: 'indigo',
  },
  {
    id: 'intern-3',
    role: 'Java Full Stack Developer Intern',
    organization: 'Q Spiders (Q Spyder)',
    location: 'Bhubaneswar, Odisha',
    description:
      'Comprehensive industrial training and application engineering across Core Java, J2EE, Spring Boot, Spring Security, Hibernate/JPA, and SQL database management.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate/JPA', 'MySQL', 'REST APIs'],
    keyLearnings: [
      'Built multi-tier enterprise web modules using Spring Boot REST controllers and MySQL database integration.',
      'Implemented secure user authentication workflows and role-based access control with Spring Security.',
      'Utilized Hibernate and JPA for object-relational mapping, transactional safety, and optimized database queries.',
    ],
    badgeColor: 'emerald',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages utilized for software development, data structures, and algorithms.',
    iconName: 'Code2',
    skills: [
      { name: 'Java', level: 88, proficiency: 'Proficient' },
      { name: 'Python', level: 82, proficiency: 'Proficient' },
      { name: 'JavaScript (ES6+)', level: 80, proficiency: 'Proficient' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    description: 'Server-side architectures, RESTful API design, and enterprise ORMs.',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot', level: 82, proficiency: 'Proficient' },
      { name: 'Spring Security', level: 75, proficiency: 'Intermediate' },
      { name: 'Hibernate / JPA', level: 78, proficiency: 'Proficient' },
      { name: 'RESTful API Design', level: 84, proficiency: 'Proficient' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Responsive user interfaces, state management, and modern component systems.',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 84, proficiency: 'Proficient' },
      { name: 'HTML5 & CSS3', level: 90, proficiency: 'Proficient' },
      { name: 'Tailwind CSS', level: 86, proficiency: 'Proficient' },
      { name: 'Responsive Design', level: 88, proficiency: 'Proficient' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI, ML & Computer Vision',
    description: 'Deep learning models, image classification, and scientific computing.',
    iconName: 'Sparkles',
    skills: [
      { name: 'TensorFlow & Keras', level: 78, proficiency: 'Intermediate' },
      { name: 'Convolutional Neural Networks (CNN)', level: 80, proficiency: 'Intermediate' },
      { name: 'OpenCV', level: 74, proficiency: 'Intermediate' },
      { name: 'NumPy & Matplotlib', level: 82, proficiency: 'Proficient' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Big Data',
    description: 'Relational schema modeling, query optimization, and distributed Big Data principles.',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', level: 84, proficiency: 'Proficient' },
      { name: 'SQL Querying & Joins', level: 85, proficiency: 'Proficient' },
      { name: 'Big Data Analytics (NASSCOM Gold)', level: 88, proficiency: 'Proficient' },
      { name: 'Database Normalization', level: 82, proficiency: 'Proficient' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    description: 'Version control, integrated development environments, and build tools.',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 85, proficiency: 'Proficient' },
      { name: 'VS Code', level: 88, proficiency: 'Proficient' },
      { name: 'Eclipse IDE', level: 82, proficiency: 'Proficient' },
      { name: 'Postman (API Testing)', level: 80, proficiency: 'Proficient' },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'katha-ai',
    title: 'Katha AI – India’s Multilingual Voice-to-Action Assistant',
    subtitle: 'Multilingual Voice AI in English, Hindi, Odia & Hinglish with Action Execution',
    category: 'AI/ML',
    technologies: ['Voice AI', 'Multilingual NLP', 'Speech-to-Text', 'RAG Retrieval', 'React.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'Speak naturally in English, Hindi, Odia, and Hinglish. Katha AI understands intent, maintains context, retrieves documents, and executes real actions with user permission.',
    longDescription:
      'Katha AI is a state-of-the-art multilingual voice-to-action AI assistant engineered for India’s rich linguistic diversity. It enables users to communicate effortlessly across English, Hindi, Odia, and colloquial Hinglish. Katha AI comprehends complex conversational intents, maintains multi-turn context, dynamically retrieves domain documents via RAG, and safely executes verified programmatic actions with explicit user permission.',
    features: [
      'Fluent speech recognition & synthesis across English, Hindi, Odia, and Hinglish',
      'Context-aware intent classification and multi-turn conversational memory',
      'Retrieval-Augmented Generation (RAG) querying localized documentation and verified sources',
      'Voice-to-action automation engine dispatching workflows with explicit user confirmation',
      'Interactive voice waveform visualizer with real-time phoneme and transcription sync',
      'Offline-resilient fallback caching for essential local commands and repeated queries',
    ],
    image: kathaAiImg,
    architectureHighlights: [
      'Acoustic and semantic NLP pipeline tuned for Indian regional phonetic nuances and code-switching',
      'Permission-gated action orchestration layer preventing unconfirmed external API calls',
      'Low-latency semantic document retrieval delivering rapid factual grounding',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
  },
  {
    id: 'talentmatch-ai',
    title: 'TalentMatch AI – Career Matching & Skill Gap Engine',
    subtitle: 'Intelligent ATS Resume Parsing & Job Description Compatibility Analytics',
    category: 'AI/ML',
    technologies: ['AI / NLP', 'Resume Parsing', 'Semantic Matching', 'React.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'An intelligent platform using AI to match resumes with job descriptions, bridge skill gaps, and accelerate career growth with personalized recommendations.',
    longDescription:
      'TalentMatch AI accelerates the career journey by bridging the disconnect between candidate resumes and modern job requirements. Powered by natural language processing and semantic embeddings, the platform evaluates candidate resumes against real-time job descriptions, computes an ATS compatibility score, pinpoints exact missing competencies, and builds a customized upskilling roadmap.',
    features: [
      'Multi-document ATS resume parsing comparing profiles against targeted job roles',
      'Semantic skill gap analysis identifying missing frameworks, libraries, and core proficiencies',
      'Interactive skill compatibility radar chart and match confidence percentage',
      'Automated bullet-point optimization recommendations tailored for ATS screening algorithms',
      'Personalized upskilling roadmap linking skill gaps to curated learning projects',
      'Recruiter-ready report generator providing candidate readiness audits',
    ],
    image: talentMatchImg,
    architectureHighlights: [
      'Vector cosine similarity engine evaluating semantic relevance beyond simple keyword search',
      'Heuristic parser isolating candidate experience, technical credentials, and achievements',
      'Lightweight client-side processing ensuring privacy of uploaded candidate documents',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
  },
  {
    id: 'jobskul',
    title: 'Jobskül – Hire • Train • Deploy',
    subtitle: 'Career & Talent Ecosystem with AI Job Matching & ATS Resume Builder',
    category: 'Full Stack',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'REST APIs', 'ATS Engine', 'Tailwind CSS'],
    description:
      'Comprehensive career and talent ecosystem featuring advanced job search, AI job matching, ATS resume builder, project-based learning, recruitment tracking, and recruiter dashboards.',
    longDescription:
      'Jobskül is an end-to-end recruitment and workforce development ecosystem operating on the "Hire • Train • Deploy" methodology. It equips aspiring engineers with an intelligent job search board, automated ATS resume builder, and practical project-based training modules. On the corporate side, hiring managers access candidate pipeline Kanban boards, skill verification trackers, and analytics dashboards.',
    features: [
      'Advanced multi-parameter job search engine with tech-stack, stipend, and location filters',
      'Intelligent ATS resume builder producing industry-standard recruiter-compliant CVs',
      'Project-based learning curricula providing hands-on coding scenarios for real-world prep',
      'Recruiter applicant management dashboard with interactive pipeline stage tracking',
      'AI candidate ranking scoring applicant match quality across posted prerequisites',
      'Interview coordination system managing assessment schedules and status updates',
    ],
    image: jobskulImg,
    architectureHighlights: [
      'Role-based interface separation tailored for candidates, mentors, and corporate recruiters',
      'RESTful backend architecture providing sub-second candidate search and job indexing',
      'Modular state management managing complex resume drafting and application tracking',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
    demoUrl: 'https://jobskul.netlify.app/',
  },
  {
    id: 'smart-shop',
    title: 'Smart-Shop – Android Mobile Commerce',
    subtitle: 'Native Android E-Commerce Application with Offline Caching & Cart Workflow',
    category: 'Mobile & Android',
    technologies: ['Android SDK', 'Java', 'XML Layouts', 'REST APIs', 'SQLite', 'Material Design 3'],
    description:
      'Native Android mobile commerce application for online shopping, real-time inventory exploration, persistent cart management, and seamless order checkout flow.',
    longDescription:
      'Imported from GitHub (Soumya675/Smart-Shop), Smart-Shop is a full-featured native Android e-commerce application. It delivers a fast, responsive mobile shopping experience adhering to Google Material Design 3 guidelines. Users can browse categorized product catalogs, view detailed item specs, manage an interactive shopping cart stored in local SQLite, and complete simulated checkouts with address validation.',
    features: [
      'Native Android user interface built with Material Design 3 components and fluid touch animations',
      'Dynamic product catalog with instant search, category filtering, and price sorting',
      'Persistent local cart storage powered by SQLite and Android SharedPreferences',
      'Product detail screen with image pinch-and-zoom, specifications, and live stock indicators',
      'Streamlined checkout workflow with shipping address form validation',
      'Asynchronous network handling with graceful offline error states and retry mechanisms',
    ],
    image: smartShopImg,
    architectureHighlights: [
      'Model-View-Presenter (MVP) architecture ensuring clean decoupling between UI and data logic',
      'Background threading via Android background workers to keep UI scrolling smooth at 60fps',
      'Efficient image caching and ViewHolder recycling for memory-safe long list views',
    ],
    githubUrl: 'https://github.com/Soumya675/Smart-Shop',
  },
  {
    id: 'sp-vehicle-messaging',
    title: 'SP Vehicle Messaging – Customer Notification System',
    subtitle: 'Automated WhatsApp & SMS Reminder Dispatch for Govt. Approved Pollution Testing Centre',
    category: 'Full Stack',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'WhatsApp API', 'SMS Gateway', 'Tailwind CSS'],
    description:
      'Govt. Approved Pollution Testing Centre customer notification and messaging system. Store contacts and dispatch automated WhatsApp and SMS reminders.',
    longDescription:
      'SP Vehicle Messaging is a purpose-built customer communication and compliance management application for a Government-Approved Vehicle Pollution Testing Centre. It digitizes testing records, calculates expiration milestones for commercial and private vehicles, and automatically dispatches personalized renewal notifications via WhatsApp and SMS gateways, reducing expired certificates and increasing return customer rate.',
    features: [
      'Customer and vehicle database managing registration numbers, test dates, and expiry deadlines',
      'Automated expiry scheduling notifying vehicle owners 7 days, 3 days, and 1 day before expiration',
      'Integrated WhatsApp Business API and SMS gateway for instant one-click or bulk dispatch',
      'Search and filter by vehicle classification (two-wheeler, four-wheeler, commercial, transport)',
      'Operational analytics dashboard monitoring daily tests, renewals prompted, and response rates',
      'Exportable CSV and PDF test reports for regulatory documentation and auditing',
    ],
    image: spVehicleImg,
    architectureHighlights: [
      'Automated scheduling worker evaluating expiration timestamps and queuing message dispatches',
      'Multi-lingual message template engine supporting customizable regional alert notifications',
      'Secure client data store designed for data confidentiality and compliance standards',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
    demoUrl: 'https://sp-pollution.netlify.app/',
  },
  {
    id: 'maa-bhagabati-youth-club',
    title: 'Maa Bhagabati Youth Club – Official Portal',
    subtitle: 'Community Management Portal for Member Registrations, Events & Social Activities',
    category: 'Frontend',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Form Validation'],
    description:
      'Official portal for Maa Bhagabati Youth Club to manage member registrations, community events, announcements, and youth activities.',
    longDescription:
      'The official digital portal for Maa Bhagabati Youth Club brings community organization into the modern web. Built to empower local youth development, the portal streamlines new member onboarding, coordinates sports tournaments (cricket, football, athletics), announces public social drives such as blood donation camps, and keeps members informed through an interactive bulletin board.',
    features: [
      'Digital youth membership registration form with blood group and interest preferences',
      'Upcoming community events calendar showcasing sports tournaments and cultural programs',
      'Public notice bulletin for high-priority local announcements and youth initiatives',
      'Executive committee and leadership directory with direct contact points',
      'Photo and media gallery documenting tournament highlights and community service',
      'Lightweight, responsive mobile layout tailored for quick loading on mobile networks',
    ],
    image: youthClubImg,
    architectureHighlights: [
      'Component-based React architecture with zero unnecessary external runtime bloat',
      'Accessible Tailwind styling featuring cultural community color palette and typography',
      'Client-side form validation ensuring reliable member data acquisition',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
    demoUrl: 'https://mbycc.netlify.app/',
  },
  {
    id: 'ecommerce-smartmart',
    title: 'Smart Mart – Enterprise E-Commerce Platform',
    subtitle: 'Enterprise Full-Stack Application with Spring Boot, Security & MySQL',
    category: 'Full Stack',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate/JPA', 'MySQL', 'HTML5', 'CSS3'],
    description:
      'Developed a comprehensive e-commerce platform featuring catalog listing, product details, interactive shopping cart, secure user authentication, and order processing.',
    longDescription:
      'Smart Mart is a robust multi-tier web application built with a Java Spring Boot backend and MySQL relational database. The platform implements Spring Security for authentication and role-based access control, safeguarding customer profiles and administrative endpoints. RESTful APIs manage product inventory, category filters, and dynamic cart operations with transactional consistency.',
    features: [
      'Comprehensive product catalog with category filtering and keyword search',
      'Individual product detail views with real-time stock availability indicators',
      'Dynamic shopping cart management with quantity adjustments and price calculations',
      'Secure user authentication and authorization powered by Spring Security',
      'RESTful API architecture communicating seamlessly with the persistence layer',
      'Relational database integration in MySQL with schema normalization and JPA mappings',
    ],
    image: ecommerceImg,
    architectureHighlights: [
      'Controller-Service-Repository multi-tier architecture for clean separation of concerns',
      'Spring Data JPA for automated ORM mapping, eliminating boilerplate SQL queries',
      'BCrypt password hashing and session token verification for user data protection',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
  },
  {
    id: 'animal-prediction-model',
    title: 'Animal Prediction Model',
    subtitle: 'Deep Learning Computer Vision System using CNN & OpenCV',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'NumPy', 'Matplotlib'],
    description:
      'Engineered an image-classification computer vision model involving dataset image preprocessing, convolutional neural network training, and high-accuracy classification.',
    longDescription:
      'Developed an end-to-end computer vision pipeline using Python and TensorFlow/Keras to classify diverse animal species from arbitrary image inputs. The model incorporates Convolutional, Pooling, and Dense layers trained on preprocessed image matrices. OpenCV handles automated resizing, color normalization, and bounding boxes, providing immediate visual feedback and prediction confidence percentages.',
    features: [
      'Automated image preprocessing pipeline incorporating OpenCV filtering and normalization',
      'Multi-layer Convolutional Neural Network (CNN) architecture optimized for feature extraction',
      'High accuracy classification with softMax output layer providing confidence probability scores',
      'Matplotlib data visualization generating loss and accuracy curve diagnostics',
      'Intuitive inference script facilitating fast single-image prediction and batch verification',
    ],
    image: animalImg,
    architectureHighlights: [
      'Data augmentation layers (random flip, rotation, zoom) to combat model overfitting',
      'Batch normalization and Dropout regularizers for robust convergence during training',
      'Confusion matrix analysis to assess inter-class recall and precision metrics',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
  },
  {
    id: 'portfolio-website',
    title: 'Soumya Ranjan Parida – Modern Portfolio',
    subtitle: 'Responsive Web Application with Dark Mode & Clean Hierarchy',
    category: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
    description:
      'Designed and engineered a high-performance, responsive portfolio showcasing academic credentials, internship milestones, technical proficiencies, and contact integration.',
    longDescription:
      'Built with modern React.js and Tailwind CSS, this personal portfolio delivers a crisp, corporate-grade aesthetic tailored for recruiters and technical hiring managers. It features a responsive layout, seamless dark/light theme switching, interactive project modals with image galleries, animated statistics counters, and accessible contact components.',
    features: [
      'Custom responsive grid layout supporting desktop, tablet, and mobile displays effortlessly',
      'Toggleable dark mode theme adhering to high-contrast WCAG accessibility standards',
      'Interactive skill proficiency indicators and project filtering across technical categories',
      'Interactive project modal gallery with detailed architectural breakdown',
      'Functional contact form component with inline validation and copy-to-clipboard actions',
      'Built-in printable resume preview modal for quick recruiter review',
    ],
    image: portfolioImg,
    architectureHighlights: [
      'Component-driven architecture prioritizing reusability and clear state separation',
      'Tailwind CSS design token system ensuring consistent typography, spacing, and neutral colors',
      'Lightweight client-side animations for a polished corporate feel without distracting slop',
    ],
    githubUrl: 'https://github.com/soumyaranjan-parida',
    demoUrl: 'https://srpportfolio.netlify.app/',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-gold',
    title: '3-Semester Gold Medalist – Academic Excellence',
    organization: 'GIFT Autonomous College, Khordha',
    category: 'Academic',
    year: '2023 – 2025',
    description:
      'Honored as Gold Medalist across three consecutive semesters in B.Tech Computer Science Engineering for highest scholastic performance, exceptional coursework mastery, and maintaining an 8.76 CGPA.',
    badge: '3-Semester Gold Medalist',
  },
  {
    id: 'ach-nasscom-gold',
    title: 'NASSCOM Big Data Certification – Gold Medalist',
    organization: 'NASSCOM FutureSkills Prime',
    category: 'Certification',
    year: '2024',
    description:
      'Conferred Gold Medal distinction in the national NASSCOM Big Data certification, validating expertise in big data architecture, distributed data processing, and large-scale analytics.',
    badge: 'NASSCOM Gold Medalist',
  },
  {
    id: 'ach-1',
    title: 'Smart India Hackathon (SIH) 2025 – Finalist',
    organization: 'Ministry of Education & AICTE, Government of India',
    category: 'Hackathon',
    year: '2025',
    description:
      'Selected as a national finalist in India’s premier innovation hackathon, collaborating on technology-driven software solutions addressing real-world problem statements.',
    badge: 'National Finalist',
  },
  {
    id: 'ach-iit-bbs',
    title: 'IIT Bhubaneswar Pitch Deck Competition – Finalist',
    organization: 'Indian Institute of Technology (IIT) Bhubaneswar',
    category: 'Hackathon',
    year: '2024',
    description:
      'Recognized as a finalist at IIT Bhubaneswar for presenting an innovative technology-driven business model and startup pitch deck to industry experts, incubators, and investors.',
    badge: 'IIT Finalist',
  },
  {
    id: 'ach-2',
    title: 'Finalist – KIIT University BRICS Summit',
    organization: 'KIIT University International Relations',
    category: 'Summit',
    year: '2024',
    description:
      'Represented institutional delegation as a finalist at the prestigious international student BRICS Summit, engaging in structured discourse on technology and sustainable innovation.',
    badge: 'Summit Finalist',
  },
  {
    id: 'ach-3',
    title: 'NPTEL Online Certification: DSA in Java',
    organization: 'IIT Madras (National Programme on Technology Enhanced Learning)',
    category: 'Certification',
    year: '2023',
    description:
      'Successfully completed intensive rigorous certification covering foundational and advanced Data Structures and Algorithms implemented in Java.',
    badge: 'IIT Madras Certified',
  },
  {
    id: 'ach-4',
    title: 'Full Stack Java Development',
    organization: 'Q Spyder Training Institute',
    category: 'Training',
    year: '2023',
    description:
      'Completed comprehensive internship course focused on Core Java, Enterprise frameworks, Web development, and practical database connectivity.',
    badge: 'Professional Certification',
  },
];

export const extracurricularData: ExtracurricularItem[] = [
  {
    id: 'extra-cr',
    role: 'Class Representative (CR) – 3 Consecutive Years',
    eventOrClub: 'Department of Computer Science Engineering, GIFT Autonomous College',
    description:
      'Elected and served for 3 consecutive academic years as Class Representative, coordinating academic operations, facilitating faculty-student liaison, and leading cohort initiatives for 60+ engineering students.',
    highlights: [
      'Served as primary official liaison between faculty members, department heads, and the student body.',
      'Managed academic scheduling, laboratory allocations, examination logistics, and course updates.',
      'Advocated student welfare, resolved peer grievances constructively, and coordinated departmental technical forums.',
    ],
  },
  {
    id: 'extra-1',
    role: 'Team Lead – State Level Event',
    eventOrClub: 'Festronix Tech Fest',
    description:
      'Helped organize and manage participants across technical competitions at a major state-level technological festival, demonstrating leadership, cross-team coordination, and event operations.',
    highlights: [
      'Led student volunteer teams in scheduling and venue logistics for competitive coding events.',
      'Managed registration and technical support for hundreds of student participants across institutions.',
      'Resolved on-site operational bottlenecks promptly under tight event schedules.',
    ],
  },
  {
    id: 'extra-2',
    role: 'Active Club Member',
    eventOrClub: 'GIFT College Technical Club',
    description:
      'Contributed actively to coding workshops, peer mentoring sessions, and technical hackathon preparation sessions for junior engineering students.',
    highlights: [
      'Assisted in organizing hands-on coding bootcamps on Java basics and problem solving.',
      'Mentored first- and second-year students on programming logic and debugging strategies.',
      'Fostered a collaborative community of aspiring software developers on campus.',
    ],
  },
];
