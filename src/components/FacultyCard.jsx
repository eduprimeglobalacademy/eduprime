import React, { useState } from "react";

const FacultyCard = ({ name, position, image, bio }) => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  // Handle toggling bio visibility for mobile
  const handleBioToggle = () => setIsBioOpen(!isBioOpen);

  return (
    <div className="w-full max-w-5xl px-8 mx-auto"> {/* Increased max-width and padding */}
      {/* Image and Text Section (Next to Each Other) */}
      <div className="flex flex-col md:flex-row items-center border-1 border-solid border-black p-6 shadow-lg">
        {/* Text Content on the Left */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold text-left text-black">{name}</h3> {/* Increased font size */}
          <p className="text-lg text-left text-black">{position}</p> {/* Increased font size for position */}

          {/* Mobile Only Bio Accordion */}
          <div className="sm:hidden">
            <button
              onClick={handleBioToggle}
              className="w-full py-2 px-4 border-1 text-gray-800 rounded-md mb-4 text-center"
            >
              {isBioOpen ? "Hide Bio" : "Show Bio"}
            </button>

            {isBioOpen && <p className="text-base text-left text-black mt-3">{bio}</p>}
          </div>

          {/* Bio Always Visible on Larger Screens */}
          <div className="hidden sm:block">
            <p className="text-base text-left text-black mt-3">{bio}</p>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={`Photo of ${name}`} // Make alt text dynamic for accessibility
            className="w-max h-max rounded-md" // Optional: Add rounded corners to the image
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
