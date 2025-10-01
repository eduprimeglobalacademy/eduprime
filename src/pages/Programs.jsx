import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import categories from '../assets/categoriesData'; // Import the categories data

const Programs = () => {
  const navigate = useNavigate();
  
  // State for search input
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the change of search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter programs based on the search query
  const filteredPrograms = categories.map((category) => ({
    ...category,
    programs: category.programs.filter((program) =>
      program.name.toLowerCase().includes(searchQuery) ||
      program.description.toLowerCase().includes(searchQuery)
    ),
  }));

  return (
    <section className="py-20 px-6 sm:px-12">
      {/* Search Bar with Icon */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center">
        <div className="relative flex items-center w-full">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search Programs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-4 border border-gray-300 text-lg pl-10 rounded-md focus:outline-none"
          />
        </div>
      </div>

      {/* Centered Heading */}
      <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-12 text-center">
        Our Programs
      </h2>

      <div className="max-w-6xl mx-auto">
        {filteredPrograms.map((category, index) => (
          category.programs.length > 0 && (
            <div key={index} className="mb-16">
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-6">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {category.programs.map((program, programIndex) => (
                  <div
                    key={programIndex}
                    onClick={() => navigate(program.path)}
                    className="cursor-pointer transition transform hover:scale-105"
                  >
                    <div className="bg-white shadow-md overflow-hidden transition-all border-1 border-black hover:shadow-xl h-full">
                      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover transition duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-between h-full">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{program.name}</h3>
                        <p className="text-gray-600 mb-6 flex-grow text-sm sm:text-base md:text-lg">{program.description}</p>
                        <div className="p-4 bg-gray-100 text-center rounded-b-xl">
                          {/* Optional button or action */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Programs;
