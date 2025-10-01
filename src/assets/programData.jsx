// src/data/programsData.js
import BusinessCommunicationImage from "../assets/businesscom.jpeg";
import SpokenEnglishImage from "../assets/spokeneng.jpeg";
import PresentationSkillsImage from "../assets/presentation.jpeg";
import StressManagementImage from "../assets/stressmanage.jpeg";
import PublicSpeakingImage from "../assets/publicspeaking.jpeg";
import KannadaSpeakingImage from "../assets/kannada.jpeg";
import CollegeToCorporate from "../assets/collegetocor.png";
import employeeskill from "../assets/employeeskill.jpg";
const programsData = {
  
    "employeeSkills": {
      name: "Employability Skills",
      description: "Hone your skills to become employable",
      path: "/EmployeeSkills", // Navigation path for Employee Skills program
      image: employeeskill, // Add the correct image path here
      videoUrl: 'https://www.youtube.com/embed/WESGDi_ajUU', // Example video URL
      isTopProgram: true,

      
    },
    "collegeToCorporate": {
      name: "College to Corporate Grooming" ,
      description: "Prepare for the professional world with essential workplace etiquette and leadership training.",
      path: "/college-to-corporate", // Navigation path for College to Corporate program
      image: CollegeToCorporate, // Add the correct image path here
      videoUrl: 'https://www.youtube.com/embed/WESGDi_ajUU', // Example video URL
      isTopProgram: true,

    },
  'business-communication': {
    name: 'Business Communication',
    description: 'Learn effective business communication strategies to enhance your professional interactions.',
    videoUrl: 'https://www.youtube.com/embed/WESGDi_ajUU', // Example video URL
    image: BusinessCommunicationImage,
    path: '/program/business-communication',
    isTopProgram: true,
  },
  'spoken-english': {
    name: 'Spoken English',
    description: 'Improve your spoken English skills to confidently communicate in professional settings.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: SpokenEnglishImage,
    path: '/program/spoken-english',
    isTopProgram: false,
  },
  'presentation-skills': {
    name: 'Presentation Skills',
    description: 'Master the art of delivering powerful and persuasive presentations.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PresentationSkillsImage,
    path: '/program/presentation-skills',
    isTopProgram: false,
  },
  'basic-communication-skills': {
    name: 'Basic Communication Skills',
    description: 'Develop fundamental communication skills for clear and effective conversations.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/basic-communication-skills',
    isTopProgram: false,
  },
  'vocabulary-enhancement': {
    name: 'Vocabulary Enhancement Program using RPS Method',
    description: 'Enhance your vocabulary to express yourself clearly, improve your writing style, and understand what others say.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/vocabulary-enhancement',
    isTopProgram: false,
  },
  'basic-grammar': {
    name: 'Verbal Ability',
    description: 'Brush up on the fundamental rules of English grammar for clearer communication.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/basic-grammar',
    isTopProgram: false,
  },
  'logical-reasoning': {
    name: 'Logical Reasoning',
    description: 'Enhance your logical reasoning skills to analyze and evaluate statements and assumptions.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/logical-reasoning',
    isTopProgram: false,
  },
  'critical-thinking': {
    name: 'Critical Thinking and Problem-Solving',
    description: 'Cultivate critical thinking and problem-solving strategies for effective decision-making.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/critical-thinking',
    isTopProgram: false,
  },
  'quantitative-aptitude': {
    name: 'Quantitative Aptitude',
    description: 'Improve your quantitative aptitude with practice and logical problem-solving techniques.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/quantitative-aptitude',
    isTopProgram: false,
  },
  'decision-making': {
    name: 'Decision Making',
    description: 'Learn frameworks for making better decisions in professional and personal life.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/decision-making',
    isTopProgram: false,
  },
  'course-of-action': {
    name: 'Course of Action',
    description: 'Understand how to evaluate different courses of action and make informed choices.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/course-of-action',
    isTopProgram: false,
  },
  'general-grooming': {
    name: 'General Grooming',
    description: 'Groom yourself to stand out in a professional workplace.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/general-grooming',
    isTopProgram: false,
  },
  'grooming-fresh-joiners': {
    name: 'Grooming for Fresh Joinees',
    description: 'Prepare yourself to excel in office etiquette as a fresh joiner.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/grooming-fresh-joiners',
    isTopProgram: false,
  },
  'sop-lor-writing': {
    name: 'SOP and LOR Writing',
    description: 'Learn how to write a Statement of Purpose (SOP) and Letter of Recommendation (LOR).',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/sop-lor-writing',
    isTopProgram: false,
  },
  'report-memo-writing': {
    name: 'Report and Memo Writing',
    description: 'Master the art of writing reports and memos for professional communication.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/report-memo-writing',
    isTopProgram: false,
  },
  'negotiation-skills': {
    name: 'Negotiation Skills',
    description: 'Learn the art of negotiation for professional and personal success.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/negotiation-skills',
    isTopProgram: false,
  },
  'case-study-analysis': {
    name: 'Case Study Analysis',
    description: 'Develop the ability to analyze and solve case studies for business situations.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/case-study-analysis',
    isTopProgram: false,
  },
  'guest-lectures': {
    name: 'Guest Lectures and Expert Talks',
    description: 'Engage with industry experts through lectures and talks to broaden your professional knowledge.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/guest-lectures',
    isTopProgram: false,
  },
  'mock-gd-i': {
    name: 'Group Discussion',
    description: 'Practice Group Discussions with mock sessions for better performance.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/mock-gd-i',
    isTopProgram: false,
  },
  'interview-basics': {
    name: 'Interview Skills',
    description: 'Learn the basics of interviews, how to write a compelling resume, and create a video profile.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/interview-basics',
    isTopProgram: false,
  },
  'role-play-communication': {
    name: 'Role Play Communication',
    description: 'Engage in role-play activities to enhance communication skills in different scenarios.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/role-play-communication',
    isTopProgram: false,
  },
  'team-building': {
    name: 'Team Building Activities',
    description: 'Enhance teamwork and communication skills through team-building activities.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/team-building',
    isTopProgram: false,
  },
  'group-presentations': {
    name: 'Group Presentations',
    description: 'Collaborate on group presentations to enhance teamwork and communication skills.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/group-presentations',
    isTopProgram: false,
  },
  'ex-tempore': {
    name: 'Ex Tempore',
    description: 'Enhance your ability to speak impromptu with extempore sessions.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/ex-tempore',
    isTopProgram: false,
  },
  'financial-literacy': {
    name: 'Financial Literacy',
    description: 'Learn the basics of financial management and literacy for personal and professional growth.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/financial-literacy',
    isTopProgram: false,
  },
  'basic-computer-skills': {
    name: 'Basic Computer Skills (C, C++, Python, Tally, Advanced Excel)',
    description: 'Gain proficiency in essential computer skills, including programming and software tools.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/basic-computer-skills',
    isTopProgram: false,
  },
  'nlp': {
    name: 'Neuro-Linguistic Program (NLP)',
    description: 'Explore the techniques of NLP to improve personal development and communication.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/nlp',
    isTopProgram: false,
  },
  'training-for-pu-students': {
    name: 'Training for PU Students',
    description: 'Specialized training for pre-university students to prepare them for future academic challenges.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/training-for-pu-students',
    isTopProgram: false,
  },
  'personality-development-leadership': {
    name: 'Personality Development and Leadership Skills',
    description: 'Enhance your personality and develop leadership skills.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: PublicSpeakingImage,
    path: '/program/personality-development-leadership',
    isTopProgram: false,
  },
  'stress-and-time-management': {
    name: 'Stress and Time Management',
    description: 'Learn strategies to manage stress and time effectively.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
    image: StressManagementImage,
    path: '/program/stress-and-time-management',
    isTopProgram: false,
  },
  'personal-branding': {
  name: 'Personal Branding',
  description: 'Develop your unique personal brand to stand out in both personal and professional spaces.',
  videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
  image: PublicSpeakingImage,
  path: '/program/personal-branding',
  isTopProgram: false,
},
  'holistic-development': {
  name: 'Holistic Development',
  description: 'Engage in a holistic approach to personal growth, focusing on mental, physical, and emotional well-being.',
  videoUrl: 'https://www.youtube.com/embed/your-video-id-here', // Replace with actual video URL
  image: PublicSpeakingImage,
  path: '/program/holistic-development',
  isTopProgram: false
}


};

export default programsData;
