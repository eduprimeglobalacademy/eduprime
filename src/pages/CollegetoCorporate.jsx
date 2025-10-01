import React, { useState } from 'react';
import sendEmail from '../services/emailService'; // Import the sendEmail function from your email service

const CollegeToCorporate = () => {
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
            title="College to Corporate Program Introduction"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Program Title and Description */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">College to Corporate Program</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          The College to Corporate program is designed to bridge the gap between academic learning and professional success. It prepares students for the transition from college life to the corporate world by focusing on essential workplace skills such as communication, leadership, decision-making, and time management. This program helps students adapt to the demands of the corporate environment and ensures they have the right mindset and tools to succeed in their careers.
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
              title: 'Interpersonal Skills',
              description: 'Interpersonal skills are essential for building strong relationships at work. This course focuses on improving communication, empathy, active listening, and conflict resolution, helping students navigate professional interactions with ease and confidence.'
            },
            {
              title: 'Business Communication',
              description: 'Business communication teaches the fundamentals of clear and effective communication in the workplace. This course covers both written and verbal communication, helping students refine their presentation skills and email etiquette to be professional in every interaction.'
            },
            {
              title: 'Presentation Skills',
              description: 'Presentation skills are critical in conveying ideas effectively in a corporate setting. This course focuses on structuring and delivering presentations with confidence, using visual aids, body language, and techniques to engage the audience.'
            },
            {
              title: 'Critical Thinking',
              description: 'Critical thinking involves analyzing and evaluating information to make reasoned decisions. This course teaches how to approach problems logically, assess various perspectives, and develop solutions that are effective and efficient in the workplace.'
            },
            {
              title: 'Decision Making',
              description: 'Decision making is a key skill in the workplace. This course provides tools and frameworks to help students make informed, timely, and effective decisions that positively impact their work and career development.'
            },
            {
              title: 'Course of Action',
              description: 'This course focuses on how to develop actionable plans and strategies to achieve professional goals. It teaches students how to prioritize tasks, manage projects, and follow through on their commitments effectively.'
            },
            {
              title: 'Stress and Time Management',
              description: 'Time and stress management are crucial in a fast-paced corporate environment. This course helps students learn how to manage workloads, meet deadlines, and maintain a healthy work-life balance by developing effective stress management techniques and time management skills.'
            },
            {
              title: 'Personal Grooming',
              description: 'Personal grooming plays an important role in creating a professional image. This course covers essential grooming tips, including attire, body language, and hygiene, to help students make a positive and lasting impression in the corporate world.'
            },
            {
              title: 'Email Etiquette',
              description: 'Email etiquette is an essential skill in today’s workplace. This course teaches the do\'s and don\'ts of professional email communication, ensuring students can write clear, concise, and professional emails in any business context.'
            },
            {
              title: 'Office Etiquette',
              description: 'Office etiquette helps students navigate the workplace with professionalism. This course covers behaviors, expectations, and proper communication in an office setting, ensuring students can fit in and thrive in a corporate environment.'
            },
            {
              title: 'Negotiation Skills',
              description: 'Negotiation is a crucial skill in business. This course teaches students how to negotiate effectively, whether in salary discussions, project management, or client interactions, focusing on strategies for win-win outcomes.'
            },
            {
              title: 'Leadership',
              description: 'Leadership skills are essential for career growth. This course helps students develop leadership qualities such as communication, empathy, decision-making, and team-building, preparing them to lead in the corporate world.'
            },
            {
              title: 'Team Building',
              description: 'Team building is essential for fostering collaboration and trust. This course teaches students how to work effectively with others, resolve conflicts, and lead or contribute to a team’s success.'
            },
            {
              title: 'SOP for Those Who Wish to Go Abroad',
              description: 'This course helps students develop a compelling Statement of Purpose (SOP) for applications to universities or jobs abroad. It focuses on writing skills, personal branding, and presenting a strong case for studying or working overseas.'
            },
            {
              title: 'Counseling',
              description: 'Counseling provides students with guidance on career choices, mental health, and personal development. This course offers techniques for self-reflection, managing career stress, and seeking guidance for personal growth.'
            },
            {
              title: 'NLP (Neuro-Linguistic Program)',
              description: 'NLP teaches students how to harness the power of language and psychology to change behavior, overcome challenges, and enhance communication. This course is designed to improve personal effectiveness and success in a corporate environment.'
            },
            {
              title: 'Advanced Communication',
              description: 'Advanced communication focuses on improving communication skills at a higher level, emphasizing persuasion, negotiation, and conflict resolution. This course helps students master communication in complex or high-pressure professional environments.'
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
                Enquire About College to Corporate Program
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

export default CollegeToCorporate;
