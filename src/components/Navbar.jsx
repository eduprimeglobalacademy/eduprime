import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <button
          onClick={() => handleNavigate('/')}
          className="text-2xl font-bold bg-gradient-to-r from-navy-900 to-bronze-500 bg-clip-text text-transparent hover:from-navy-800 hover:to-bronze-600 transition-all duration-300"
        >
          EduPrime Global Academy
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-4 items-center">
          <button onClick={() => handleNavigate('/')} className="px-4 py-2 text-gray-700 hover:text-bronze-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bronze-500 hover:after:w-full after:transition-all after:duration-300">
            Home
          </button>
          <button onClick={() => handleNavigate('/about')} className="px-4 py-2 text-gray-700 hover:text-bronze-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bronze-500 hover:after:w-full after:transition-all after:duration-300">
            About Us
          </button>
          <button onClick={() => handleNavigate('/Programs')} className="px-4 py-2 text-gray-700 hover:text-bronze-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bronze-500 hover:after:w-full after:transition-all after:duration-300">
            Programs
          </button>
          <button onClick={() => handleNavigate('/contact')} className="px-4 py-2 text-gray-700 hover:text-bronze-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bronze-500 hover:after:w-full after:transition-all after:duration-300">
            Contact
          </button>
          <button onClick={() => handleNavigate('/gallery')} className="px-4 py-2 text-gray-700 hover:text-bronze-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bronze-500 hover:after:w-full after:transition-all after:duration-300">
            Gallery
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggled State) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <button onClick={() => handleNavigate('/')} className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left transition-colors duration-200">
            Home
          </button>
          <button onClick={() => handleNavigate('/about')} className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left transition-colors duration-200">
            About Us
          </button>
          <button onClick={() => handleNavigate('/Programs')} className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left transition-colors duration-200">
            Programs
          </button>
          <button onClick={() => handleNavigate('/contact')} className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left transition-colors duration-200">
            Contact
          </button>
          <button onClick={() => handleNavigate('/gallery')} className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left transition-colors duration-200">
            Gallery
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
