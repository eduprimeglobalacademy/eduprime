import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import programsData from '../assets/programData'; // Import the program data
import sendEmail from '../services/emailService'; // Import the sendEmail function (assuming you've created this file)

const ProgramDetail = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For tracking loading state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // For showing success or error messages

  // Fetch the program details based on the ID
  const program = programsData[id];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      // Send the email
      await sendEmail(name, email, message);
      setFormStatus('Message sent successfully!'); // Success message
      setName('');
      setEmail('');
      setMessage('');
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error sending enquiry:', error);
      setFormStatus('Failed to send message. Please try again later.'); // Error message
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <section className="py-20 px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          {/* Embed YouTube video instead of an image */}
          <div className="w-full h-96 mb-8">
            <iframe 
              src={program.videoUrl} 
              title={program.name} 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="text-4xl font-semibold">{program.name}</h1>
          <p className="text-lg text-gray-700 mt-4">{program.description}</p>

          <button onClick={openModal} className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg">Enquire</button>
        </div>
        
        {/* Modal for enquiry */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Enquire About {program.name}</h2>
              
              {formStatus && <p className="text-center text-lg font-semibold text-gray-700 mb-4">{formStatus}</p>}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded mt-2" 
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded mt-2" 
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Your Message</label>
                  <textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded mt-2" 
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button 
                    type="button" 
                    onClick={closeModal} 
                    className="px-4 py-2 bg-gray-300 text-black rounded-lg mr-4"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    disabled={isLoading} // Disable the button while loading
                  >
                    {isLoading ? 'Sending...' : 'Submit'} {/* Show loading text */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramDetail;
