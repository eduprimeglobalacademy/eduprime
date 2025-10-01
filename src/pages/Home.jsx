import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee.jsx";
import AboutEduPie from "./ABoutEdupiehome.jsx";
import ProgramsSection from "../components/ProgramsSection";
import TrainersSection from "../components/TrainersSection";
import PopupComponent from "../components/PopupComponent"; // Import the popup
import programsData from '../assets/programData'; // Import the program data

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupProgram, setPopupProgram] = useState(null); // Program for the popup
  
  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");

    if (!popupShown) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true"); // Mark popup as shown for this session
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  // Example: Set a specific program to show in the popup (could be dynamic)
  useEffect(() => {
    setPopupProgram(programsData['collegeToCorporate']); // Set the program to show
  }, []);

  return (
    <section className="min-h-screen text-gray-900">
      <HeroSection /> {/* Hero Section */}
      <ProgramsSection /> {/* Programs Section */}
      <TrainersSection /> {/* Trainers Section */}  
      <AboutEduPie /> {/* About EduPie Section */}
      {/* Show Popup when 'showPopup' is true */}
      {popupProgram && (
        <PopupComponent
          isVisible={showPopup}
          onClose={closePopup}
          program={popupProgram} // Passing the program data
        />
      )}
    </section>
    
  );
};

export default Home;
