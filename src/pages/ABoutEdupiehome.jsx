// src/components/AboutEduPie.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutEduPie = () => {
  const navigate = useNavigate();
  return (
   
    <div className="bg-purple-500 text-white pt-16 py-12 px-4 md:px-12">
      <div className="mx-auto text-center max-w-7xl">
        
        <p className="text-lg md:text-xl font-light mb-6">
          Edu-Pie Global is your gateway to success. Our programs are designed to refine your communication skills, master quantitative aptitude, and enhance your presentation abilities. With expert guidance, we help you take the next step in your career.
        </p>

        <p className="text-lg md:text-xl font-light mb-6">
          We focus on practical, real-world skills, not just theory. By joining Edu-Pie, you're joining a community dedicated to growth and success. The world is evolving, and our training ensures you stay ahead of the curve.
        </p>

        <p className="text-lg md:text-xl font-light mb-6">
          Every individual is unique, and we provide personalized mentorship and expert-led programs to help you achieve your goals. Our trainers are passionate about seeing you succeed, both in and out of the classroom.
        </p>

        <p className="text-lg md:text-xl font-light mb-6">
          Thousands of alumni are excelling in top organizations worldwide. Whether preparing for competitive exams or advancing your leadership skills, our tailored programs support you every step of the way.
        </p>

        <p className="text-lg md:text-xl font-light mb-6">
          At Edu-Pie Global, learning is a journey, not just a task. Through workshops and coaching, we ensure you gain the knowledge and confidence to succeed.
        </p>

        <p className="text-lg md:text-xl font-light mb-6">
          Take charge of your future with Edu-Pie Global. Start your transformative journey with us today!
        </p>

        <button onClick={() => navigate('/contact')} className="mt-6 px-8 py-3 bg-white text-purple-500 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300">
          Take the First Step – Join Us Now
        </button>
        <br/>
        <button onClick={() => navigate('/About')} className="mt-6 px-8 py-3 bg-white text-purple-500 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutEduPie;
