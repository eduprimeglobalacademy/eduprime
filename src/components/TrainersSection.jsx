import React from "react";
import Slider from "react-slick";
import FacultyCard from "../components/FacultyCard"; // Assuming FacultyCard is already implemented
import facultyData from "../assets/facultyData"; // Import the faculty data from the new file

// Slider settings with responsive adjustments
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  fade: true,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 640, // Mobile devices
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768, // Tablets and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024, // Laptops and above
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const TrainersSection = () => {
  return (
    <div className="text-center my-24 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Meet Our Expert Trainers
      </h2>
      <Slider {...sliderSettings}>
        {facultyData.map((faculty) => (
          <FacultyCard
            key={faculty.id} // Assuming facultyData contains unique ids
            name={faculty.name}
            position={faculty.position}
            image={faculty.image}
            bio={faculty.bio}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TrainersSection;
