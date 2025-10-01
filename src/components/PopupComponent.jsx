import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const PopupComponent = ({ isVisible, onClose, program }) => {
  const navigate = useNavigate(); // For navigation

  // Handle navigation to the program page
  const handleGoToProgram = () => {
    navigate(program.path); // Navigate to the specific program's route
    onClose();
  };

  return (
    isVisible && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8  shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Are you ready to transition from college to corporate?</h2>
          
          <div className="border p-4 mb-4 text-center">
            <h3 className="text-xl font-semibold">{program.name}</h3>
            <img src={program.image} alt={program.name} className="w-full h-full object-cover  mb-4" />
            <p className="text-gray-700">{program.description}</p>
          </div>
          
          <button 
            className="bg-blue-500 text-white py-2 px-5 " 
            onClick={handleGoToProgram}>
            Go to Program
          </button>
          <button 
            className="ml-4 bg-gray-300 text-black py-2 px-4 " 
            onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default PopupComponent;
