import React from "react";
import { useNavigate } from 'react-router-dom';
import programsData from '../assets/programData'; // Import the program data

const ProgramsSection = () => {
  const navigate = useNavigate();

  // Filter to display only top programs
  const topPrograms = Object.keys(programsData)
    .filter(key => programsData[key].isTopProgram) // Only top programs
    .map(key => programsData[key]); // Map to the program objects

  return (
    <div className="text-center space-y-6 mb-16 px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
        Our Top Programs
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light mb-6">
        Explore our range of top programs designed to boost your skills and career prospects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {topPrograms.map((program, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 border border-gray-200 w-full h-auto cursor-pointer group overflow-hidden" // Adjusted to be flexible
            onClick={() => navigate(program.path)} // Use program.path for navigation
          >
            <div className="w-full h-48 sm:h-56 md:h-64 relative overflow-hidden rounded-lg">
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">{program.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;
