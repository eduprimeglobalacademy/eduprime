import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee.jsx';
import ABoutEdupiehome from './ABoutEdupiehome.jsx';
import ProgramsSection from '../components/ProgramsSection';
import TrainersSection from '../components/TrainersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PopupComponent from '../components/PopupComponent';
import programsData from '../assets/programData';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupProgram, setPopupProgram] = useState(null);

  useEffect(() => {
    setPopupProgram(programsData['collegeToCorporate']);
    const shown = sessionStorage.getItem('popupShown');
    if (!shown) {
      const timer = setTimeout(() => { setShowPopup(true); sessionStorage.setItem('popupShown', 'true'); }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Marquee />
      <ProgramsSection />
      <ABoutEdupiehome />
      <TrainersSection />
      <TestimonialsSection />
      {popupProgram && <PopupComponent isVisible={showPopup} onClose={() => setShowPopup(false)} program={popupProgram} />}
    </div>
  );
};

export default Home;
