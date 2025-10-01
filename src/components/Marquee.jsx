// src/components/Marquee.js
import React from 'react';

const Marquee = ({ text, duration = '12s' }) => {
  return (
    <div className="w-full overflow-hidden relative bg-purple-500">
      <div
        className="whitespace-nowrap animate-marquee text-xl text-white md:text-2xl sm:text-lg flex"
        style={{ animationDuration: duration }}
      >
        <div className="flex">
          <span>{text}</span>
          <span className="ml-8">{text}</span> {/* Repeat the text for continuous effect */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
