import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/eduprimelogo.jpg'; // Adjust the path if needed
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <footer className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    {/* Left Section: Logo and Details */}
                    <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
                        {/* Logo */}
<div className="flex justify-center md:ml-24 mb-4">  {/* Adjust the ml-24 value to push the logo more to the right */}
    <img src={Logo} className="w-32" alt="EduPrime Global Academy Logo" />
</div>


                        {/* Footer Description */}
                        <p className="text-sm font-medium text-gray-400 mx-auto md:mx-0">
                            EduPrime Global Academy is committed to enhancing your skills and transforming your career with expert trainers in various domains. Join us to unlock your potential!
                        </p>
                    </div>

                    {/* Right Section: Company, Get in Touch, and Social Media */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto">
                        {/* Company Section */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-xl font-semibold mb-4 text-gray-200">COMPANY</p>
                            <ul className="flex flex-col gap-2 text-sm font-medium text-gray-400">
                                <li onClick={() => handleNavigate('/')} className="hover:text-bronze-400 transition duration-300 cursor-pointer">Home</li>
                                <li onClick={() => handleNavigate('/about')} className="hover:text-bronze-400 transition duration-300 cursor-pointer">About Us</li>
                                <li onClick={() => handleNavigate('/programs')} className="hover:text-bronze-400 transition duration-300 cursor-pointer">Programs</li>
                            </ul>
                        </div>

                        {/* Get in Touch Section */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-xl font-semibold mb-4 text-gray-200">GET IN TOUCH</p>
                            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-400">
                                <li className="flex items-center gap-2 justify-center md:justify-start">
                                    <FaPhoneAlt className="text-bronze-400" />
                                    +919886537936
                                </li>
                                <li className="flex items-center gap-2 justify-center md:justify-start">
                                    <FaEnvelope className="text-bronze-400" />
                                    contact@eduprimeglobalacademy.com
                                </li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-xl font-semibold mb-4 text-gray-200">FOLLOW US</p>
                            <div className="flex gap-6 justify-center md:justify-start">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                    <FaFacebook className="text-2xl md:text-3xl" />
                                </a>
                                <a href="https://www.instagram.com/edupieglobal?igsh=MTNqeTg1OGRqdmV5cg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-300">
                                    <FaInstagram className="text-2xl md:text-3xl" />
                                </a>
                                <a href="https://www.linkedin.com/company/edu-pie-global-llp/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-800">
                                    <FaLinkedin size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal line with small shadow */}
                <div className="w-full mt-12 mb-6">
                    <hr className="border-t border-gray-700 shadow-sm" />
                </div>

                {/* Copyright Section */}
                <div className="text-center text-sm font-medium text-gray-500">
                    <p>© {new Date().getFullYear()} EduPrime Global Academy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
