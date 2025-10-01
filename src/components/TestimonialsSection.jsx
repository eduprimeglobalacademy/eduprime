import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const TestimonialsSection = () => {
  const [isVideoInView, setIsVideoInView] = useState(false);
  const videoRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVideoInView(true);
        } else {
          setIsVideoInView(false);
        }
      },
      {
        threshold: 0.5, // Video will trigger when 50% of it is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const settings = {
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
  };

  return (
    <div className="max-w-8xl mx-auto px-6 mb-16">
      {/* Heading Section */}
      <div className="w-full text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">What Our Students Say</h2>
      </div>

      {/* Video and Testimonials Section (Next to Each Other) */}
      <div className="flex flex-col md:flex-row items-stretch border-1 border-solid border-black ">
        {/* Video on the left */}
        <div
          className="md:w-1/2 mb-8 md:mb-0 flex items-center"
          ref={videoRef}
        >
          <div className="relative pb-[56.25%]  overflow-hidden shadow-lg w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ${
                isVideoInView ? "?autoplay=1" : ""
              }`} // Autoplay only when in view
              title="Student Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Testimonials on the right */}
        <div className="md:w-1/2 pl-8 flex mt-40 items-center">
          <div className="w-full h-full flex justify-center">
            <Slider {...settings} className="w-full">
              <div className="bg-white p-8 rounded-lg mb-6">
                <p className="italic text-gray-700 text-lg">
                  "Edu-Pie Global transformed my career. The trainers are exceptional!"
                </p>
                <p className="text-gray-700 mt-4 font-medium">- Student Name</p>
              </div>
              <div className="bg-white p-8 rounded-lg mb-6">
                <p className="italic text-gray-700 text-lg">
                  "The program was beyond my expectations! The learning was both fun and impactful."
                </p>
                <p className="text-gray-700 mt-4 font-medium">- Another Student</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
