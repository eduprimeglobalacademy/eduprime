import React from "react";

// Import images
import PramodImage from "/src/assets/Pramod.jpeg";
import HarishImage from "/src/assets/harish.jpeg";
import DirectorImage from "/src/assets/director.jpeg";
import InstituteImage from "/src/assets/institute.jpeg";
import YoginderImage from "/src/assets/brig.jpeg";  // Assuming you have an image for Brigadier Yoginder Parimu

// Reusable Card component for advisory members and faculty members
const MemberCard = ({ image, name, role, additionalInfo = [] }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full shadow-lg"
      />
      <h4 className="text-xl font-medium text-gray-800 mt-4">{name}</h4>
      <p className="text-lg text-gray-600">{role}</p>
      {additionalInfo.length > 0 && (
        <div className="mt-4 text-lg text-gray-600">
          {additionalInfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Institute Image */}
      <section className="mb-8">
        <img
          src={InstituteImage}
          alt="Institute"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* About the Institute */}
      <section className="mb-8">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-700">
          EduPrime Global Academy was established with the vision to bridge the gap between academic education and the corporate world. Our mission is to make graduates and undergraduates 'corporate-ready' by equipping them with necessary soft skills, communication abilities, and practical knowledge.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our goal is to help students and professionals enhance their skills through various courses and workshops. We aim to create professionals who are well-prepared to meet the demands of the corporate world.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Over the years, we have trained hundreds of graduates, helping them secure jobs and excel in their careers. Our vision for the future is to continue to empower the youth and shape the future of corporate professionals.
        </p>
      </section>

      {/* Advisory Members Section */}
      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Advisory Committee
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <MemberCard
            image={PramodImage}
            name="Dr. Pramod Pathak"
            role="Senior Advisor"
            additionalInfo={[
              "Co-Founder of Kaizen Mantra (Consultancy & Training) and The Goodness Movement",
              "Ph.D. in Stress Management, M.Sc. in Psychology, MBA in HR (BHU)",
              "Former Professor of Management at IIT (ISM), Dhanbad",
              "Management Consultant and Corporate Trainer with clients such as World Bank, Ministry of Coal, Indian Oil, NTPC, TATA Steel, and more",
            ]}
          />
          <MemberCard
            image={YoginderImage}  // Use the image path of Brigadier Yoginder Parimu
            name="Brigadier Yoginder Parimu (Retd)"
            role="Advisor"
            additionalInfo={[
              "Graduate from J & K University",
              "Served in the 1965 and 1971 wars",
              "Served along the Indo-China border in Ladakh and Indo-Tibet border in UP",
              "Chief Engineer (Army) in Kashmir Valley/Ladakh during insurgency",
              "PGDBA from Symbiosis Pune",
              "Led Indian Rowing Team to Asian Games in Beijing (1990)",
              
            ]}
          />
          <MemberCard
            image={HarishImage}
            name="Dr. Harish Babu S"
            role="Advisor"
            additionalInfo={[
              "Principal, Nagarjuna Degree College",
              "Director, Management Studies - NGI",
              "Vice President, Indian Council for Management Research and Development (ICMRD)",
              "Vice Chairmen, Research and Publication committee, National Institute of Personnel Management, Karnataka Chapter",
              "Chief Editor, Indian Journal of Emerging Research in Business and Technology",
            ]}
          />
        </div>
      </section>

      {/* Director's Section */}
      <section className="mb-8">
       
        <div className="flex flex-col justify-center items-center space-x-6">
          <img
            src={DirectorImage}
            alt="Director"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
          <h4 className="text-2xl font-medium text-gray-800">M Bhimsen</h4>
          <p className="text-lg text-gray-600">Director, EduPrime Global Academy</p>
          <p className="mt-4 text-lg text-gray-700">
            M Bhimsen is a seasoned educator with 35 years of teaching experience. He began his career in the Indian Air Force, in the Education Department. He transitioned to the private sector, working with T.I.M.E ,where he was imparting verbal ability training to aspirants of CAT & GMAT. Later, he joined as the VP (Marketing) at SilverPeak Global Pvt Ltd. Since 2021, he has been freelancing, offering Verbal Ability classes, soft skills training. Currently, he is the Director of EduPrime Global Academy.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
