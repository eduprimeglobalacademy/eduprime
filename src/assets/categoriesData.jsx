// src/data/categoriesData.js

import BusinessCommunicationImage from '/src/assets/businesscom.jpeg';
import SpokenEnglishImage from '/src/assets/spokeneng.jpeg';
import PresentationSkillsImage from '/src/assets/presentation.jpeg';
import StressManagementImage from '/src/assets/stressmanage.jpeg';
import PublicSpeakingImage from '/src/assets/publicspeaking.jpeg';
import KannadaSpeakingImage from '/src/assets/kannada.jpeg';

const categories = [
  {
    title: 'Soft Skills',
    programs: [
      { name: 'Business Communication', description: 'Learn effective business communication strategies to enhance your professional interactions.', image: BusinessCommunicationImage, path: '/program/business-communication' },
      { name: 'Spoken English', description: 'Improve your spoken English skills to confidently communicate in professional settings.', image: SpokenEnglishImage, path: '/program/spoken-english' },
      { name: 'Presentation Skills', description: 'Master the art of delivering powerful and persuasive presentations.', image: PresentationSkillsImage, path: '/program/presentation-skills' },
      { name: 'Basic Communication Skills', description: 'Develop fundamental communication skills for clear and effective conversations.', image: PublicSpeakingImage, path: '/program/basic-communication-skills' },
      { name: 'Vocabulary Enhancement Program using RPS Method', description: 'Enhance your vocabulary to express yourself clearly, improve your writing style, and understand what others say.', image: PublicSpeakingImage, path: '/program/vocabulary-enhancement' },
      { name: 'Verbal Ability', description: 'Brush up on the fundamental rules of English grammar for clearer communication.', image: PublicSpeakingImage, path: '/program/basic-grammar' },
    ],
  },
  {
    title: 'Analytical and Cognitive Skills',
    programs: [
      { name: 'Logical Reasoning', description: 'Enhance your logical reasoning skills to analyze and evaluate statements and assumptions.', image: PublicSpeakingImage, path: '/program/logical-reasoning' },
      { name: 'Critical Thinking and Problem-Solving', description: 'Cultivate critical thinking and problem-solving strategies for effective decision-making.', image: PublicSpeakingImage, path: '/program/critical-thinking' },
      { name: 'Quantitative Aptitude', description: 'Improve your quantitative aptitude with practice and logical problem-solving techniques.', image: PublicSpeakingImage, path: '/program/quantitative-aptitude' },
      { name: 'Decision Making', description: 'Learn frameworks for making better decisions in professional and personal life.', image: PublicSpeakingImage, path: '/program/decision-making' },
      { name: 'Course of Action', description: 'Understand how to evaluate different courses of action and make informed choices.', image: PublicSpeakingImage, path: '/program/course-of-action' },
    ],
  },
  {
    title: 'Professional and Workplace Readiness',
    programs: [
      { name: 'Business Communication', description: 'Learn effective communication strategies tailored for the workplace.', image: BusinessCommunicationImage, path: '/program/business-communication' },
      { name: 'General Grooming', description: 'Groom yourself to stand out in a professional workplace.', image: PublicSpeakingImage, path: '/program/general-grooming' },
      { name: 'Grooming for Fresh Joinees', description: 'Prepare yourself to excel in office etiquette as a fresh joiner.', image: PublicSpeakingImage, path: '/program/grooming-fresh-joiners' },
      { name: 'SOP and LOR Writing', description: 'Learn how to write a Statement of Purpose (SOP) and Letter of Recommendation (LOR).', image: PublicSpeakingImage, path: '/program/sop-lor-writing' },
      { name: 'Report and Memo Writing', description: 'Master the art of writing reports and memos for professional communication.', image: PublicSpeakingImage, path: '/program/report-memo-writing' },
      { name: 'Negotiation Skills', description: 'Learn the art of negotiation for professional and personal success.', image: PublicSpeakingImage, path: '/program/negotiation-skills' },
      { name: 'Case Study Analysis', description: 'Develop the ability to analyze and solve case studies for business situations.', image: PublicSpeakingImage, path: '/program/case-study-analysis' },
      { name: 'Guest Lectures and Expert Talks', description: 'Engage with industry experts through lectures and talks to broaden your professional knowledge.', image: PublicSpeakingImage, path: '/program/guest-lectures' },
    ],
  },
  {
    title: 'Interview and Group Discussion Skills',
    programs: [
      { name: 'Group Discussion', description: 'Practice Group Discussions with mock sessions for better performance.', image: PublicSpeakingImage, path: '/program/mock-gd-i' },
      { name: 'Interview Skills', description: 'Learn the basics of interviews, how to write a compelling resume, and create a video profile.', image: PublicSpeakingImage, path: '/program/interview-basics' },
    ],
  },
  {
    title: 'Creative and Collaborative Activities',
    programs: [
      { name: 'Role Play Communication', description: 'Engage in role-play activities to enhance communication skills in different scenarios.', image: PublicSpeakingImage, path: '/program/role-play-communication' },
      { name: 'Team Building Activities', description: 'Enhance teamwork and communication skills through team-building activities.', image: PublicSpeakingImage, path: '/program/team-building' },
      { name: 'Group Presentations', description: 'Collaborate on group presentations to enhance teamwork and communication skills.', image: PublicSpeakingImage, path: '/program/group-presentations' },
      { name: 'Ex Tempore', description: 'Enhance your ability to speak impromptu with extempore sessions.', image: PublicSpeakingImage, path: '/program/ex-tempore' },
    ],
  },
  {
    title: 'Specialized Skills',
    programs: [
      { name: 'Financial Literacy', description: 'Learn the basics of financial management and literacy for personal and professional growth.', image: PublicSpeakingImage, path: '/program/financial-literacy' },
      { name: 'Basic Computer Skills (C, C++, Python, Tally, Advanced Excel)', description: 'Gain proficiency in essential computer skills, including programming and software tools.', image: PublicSpeakingImage, path: '/program/basic-computer-skills' },
      { name: 'Neuro-Linguistic Program(NLP)', description: 'Explore the techniques of NLP to improve personal development and communication.', image: PublicSpeakingImage, path: '/program/nlp' },
      { name: 'Training for PU Students', description: 'Specialized training for pre-university students to prepare them for future academic challenges.', image: PublicSpeakingImage, path: '/program/training-for-pu-students' },
      { name: 'Personality devlopemt and leadership skils', description: 'Enhance your personality and develope  leadership skills.', image: PublicSpeakingImage, path: '/program/tests' },
      { name: 'Stress and Time Management', description: 'Learn  strategies to manage stress and time effectively.', image: PublicSpeakingImage, path: '/program/stress-and-time-management' },
    ],
  },
  {
    title: 'Comprehensive Growth Programs',
    programs: [
      { 
        name: 'Personal Branding', 
        description: 'Develop your unique personal brand to stand out in both personal and professional spaces.', 
        image: PublicSpeakingImage, 
        path: '/program/personal-branding' 
      },
      { 
        name: 'Holistic Development', 
        description: 'Engage in a holistic approach to personal growth, focusing on mental, physical, and emotional well-being.', 
        image: PublicSpeakingImage, 
        path: '/program/holistic-development' 
      }
    ]
  }
  
];

export default categories;
