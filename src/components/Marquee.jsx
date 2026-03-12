import React from 'react';
import { HiAcademicCap } from 'react-icons/hi';

const ITEMS = [
  'Business Communication', 'Spoken English', 'Leadership Skills', 'Presentation Skills',
  'Public Speaking', 'Corporate Grooming', 'Stress Management', 'Logical Reasoning',
  'Vocabulary Enhancement', 'Interview Preparation', 'Time Management', 'Team Building',
];

const Marquee = () => (
  <div className="bg-amber-500 py-4 overflow-hidden">
    <div className="marquee-track whitespace-nowrap">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2 mr-12 text-navy-900 font-semibold text-sm">
          <HiAcademicCap className="text-navy-900/70" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
