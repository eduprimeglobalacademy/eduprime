import React, { useState } from 'react';
import sendEmail from '../services/emailService'; // Import the sendEmail function from your email service

const EmployeeSkills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // For success/error message

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission
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
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error sending enquiry:', error);
      setFormStatus('Failed to send message. Please try again later.'); // Error message
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Video Introduction */}
        <div className="w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/your_video_url"
            title="Employee Skills Program Introduction"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Program Title and Description */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Employability Skills Program</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          The Employee Skills program is designed to enhance a wide range of key professional abilities that are essential for success in today's fast-paced and competitive workplace. This comprehensive training covers everything from communication skills to logical reasoning, team building, and personal branding. Whether you are looking to improve your speaking abilities or boost your career with advanced problem-solving and leadership techniques, this program will help you excel in your professional life.
        </p>

        <button
          onClick={openModal}
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Enquire Now
        </button>

        {/* Course List */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-12">Courses Offered</h2>
        <div className="space-y-8">
          {[
            {
              title: 'Spoken English',
              description: 'Improve your verbal communication skills, fluency, and confidence while speaking in English. Focus on pronunciation, accent reduction, and effective articulation for professional and social settings.'
            },
            {
              title: 'Basic Communication',
              description: 'Learn the foundations of effective communication, including verbal and non-verbal techniques, listening skills, and body language. Master how to convey thoughts clearly and confidently.'
            },
            {
              title: 'Presentation Skills',
              description: 'Craft powerful presentations by mastering structuring, visual aids, body language, voice modulation, and engaging your audience effectively.'
            },
            {
              title: 'Vocabulary Enhancement',
              description: 'Expand your vocabulary to articulate thoughts more precisely. Learn context-based usage, synonyms, antonyms, and phrases to enrich your communication.'
            },
            {
              title: 'Verbal Ability',
              description: 'Sharpen your reading comprehension, vocabulary usage, sentence structure, and logical reasoning to analyze and respond effectively in professional settings.'
            },
            {
              title: 'Logical Reasoning',
              description: 'Enhance your analytical thinking and problem-solving skills. Master systematic approaches to decision-making and strategy development in your professional life.'
            },
            {
              title: 'Quantitative Aptitude',
              description: 'Develop strong mathematical problem-solving abilities, including arithmetic, algebra, and data interpretation, critical for analytical thinking in the workplace.'
            },
            {
              title: 'Email Etiquette',
              description: 'Learn the art of writing professional emails, focusing on tone, clarity, structure, and timing for effective written communication.'
            },
            {
              title: 'Group Discussion & Personal Interviews',
              description: 'Refine your communication skills for group discussions and interviews. Learn how to handle stress and answer confidently.'
            },
            {
              title: 'Personal Branding',
              description: 'Build a strong professional identity by learning how to communicate your strengths, values, and expertise to stand out in your career.'
            },
            {
              title: 'Role Play',
              description: 'Simulate real-life scenarios to improve communication, problem-solving, and teamwork skills, boosting your confidence and adaptability.'
            },
            {
              title: 'Team Building',
              description: 'Learn how to foster collaboration, resolve conflicts, and motivate teammates to work efficiently as a unified team.'
            },
          ].map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>

        {/* Enquiry Section */}
        <button
          onClick={openModal}
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Enquire Now
        </button>

        {/* Modal for enquiry */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-96 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Enquire About Employee Skills Program
              </h2>

              {formStatus && (
                <p className="text-center text-lg font-semibold text-gray-700 mb-4">{formStatus}</p>
              )}

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

export default EmployeeSkills;
