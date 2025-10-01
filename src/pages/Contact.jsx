import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import sendEmail from '../services/emailService'; // Import the sendEmail function

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      await sendEmail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Contact Form Section */}
      <section className="mb-12">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-navy-900 to-bronze-500 bg-clip-text text-transparent mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-bronze-500 focus:ring-2 focus:ring-bronze-200 transition-all duration-200 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-bronze-500 focus:ring-2 focus:ring-bronze-200 transition-all duration-200 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-navy-900 to-bronze-500 hover:from-navy-800 hover:to-bronze-600 transform hover:scale-105 shadow-lg'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* Get In Touch via Social Media */}
      <section className="mb-8 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-700 mb-4">Follow us on social media or get in touch directly via email.</p>

        <div className="flex justify-center space-x-6">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/company/edu-pie-global-llp/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-800">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/edupieglobal?igsh=MTNqeTg1OGRqdmV5cg==" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600">
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Email Section */}
        <div className="mt-6 text-lg text-gray-700">
          <p className="mb-2">Or reach out to us via email:</p>
          <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">
            <FaEnvelope size={20} className="inline mr-2" />
            contact@eduprimeglobalacademy.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
