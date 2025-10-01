import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import adi1 from "../assets/gallery/adi1.jpeg";
import adi2 from "../assets/gallery/adi2.jpeg";
import adi from "../assets/gallery/adi.jpeg";
import nag2 from "../assets/gallery/nag2.jpeg";
import adi4 from "../assets/gallery/adi4.jpeg";
import pic3 from "../assets/gallery/pic3.jpg";
import fear from "../assets/gallery/fear.jpeg";
import interview from "../assets/gallery/interview.jpeg";
import class_college_1 from "../assets/gallery/class_college_1.jpeg";
import class_college_2 from "../assets/gallery/class_college_2.jpeg";
import class_college_3 from "../assets/gallery/class_college_3.jpeg";
import class_college_4 from "../assets/gallery/class_college_4.jpeg";
import rmsit1 from "../assets/gallery/rmsit1.jpg";
import rmsit2 from "../assets/gallery/rmsit2.jpg";
import rmsit3 from "../assets/gallery/rmsit3.jpg";
import rmsit4 from "../assets/gallery/rmsit4.jpg";
import rmsit5 from "../assets/gallery/rmsit5.jpg";




const captionStyle = {
  padding: "15px 20px",
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))",
  color: "#fff",
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "1.2rem",  // Adjusted for responsiveness
  fontWeight: "500",
  letterSpacing: "0.5px",
  textAlign: "center",
  borderRadius: "8px",
  width: "80%",
  maxWidth: "600px",
};

const slideStyle = {
  position: "relative",
  width: "",
  height: "75vh",  // Adjust height to be responsive
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const slideImages = [
  {
    url: adi1,
    caption: "MoU between Edu-pie Global and Aditya College of Engineering and Technology",
  },
  {
    url: adi2,
    caption: "",
  },
  {
    url: nag2,
    caption: "Class in progress in Nagarjuna Degree College",
  },
  {
    url: adi,
    caption: "Reinventing Ourselves in this VUCA World, a talk by Dr. Pramod Pathak at Aditya College of Engineering and Technology",
  },
  {
    url: adi4,
    caption: "",
  },
  {
    url: fear,
    caption: "Overcome stage fear",
  },
  {
    url: pic3,
    caption: "",
  },
  {
    url:interview ,
    caption: "",
  },{
    url: class_college_1,
    caption: "",
  },{
    url: class_college_2,
    caption: "",
  },{
    url: class_college_3,
    caption: "",
  },{
    url: class_college_4,
    caption: "",
  },{
    url: rmsit1,
    caption: "",
  },{
    url: rmsit2,
    caption: "",
  },{
    url: rmsit3,
    caption: "",
  },{
    url: rmsit4,
    caption: "",
  },{
    url: rmsit5,
    caption: "",
  },
  
];

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [view, setView] = useState('slider');

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-navy-900 to-bronze-500 bg-clip-text text-transparent mb-4">
          Our Gallery
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Capturing moments of learning, growth, and transformation
        </p>

        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setView('slider')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              view === 'slider'
                ? 'bg-gradient-to-r from-navy-900 to-bronze-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Slideshow View
          </button>
          <button
            onClick={() => setView('grid')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              view === 'grid'
                ? 'bg-gradient-to-r from-navy-900 to-bronze-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* Slider View */}
      {view === 'slider' && (
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Slide
            arrows={true}
            pauseOnHover={true}
            duration={5000}
            transitionDuration={1000}
            infinite={true}
            autoplay={true}
          >
            {slideImages.map((slideImage, index) => (
              <div key={index} style={slideStyle}>
                <img
                  src={slideImage.url}
                  alt={slideImage.caption}
                  style={imageStyle}
                  loading="lazy"
                />
                {slideImage.caption && (
                  <div style={captionStyle}>{slideImage.caption}</div>
                )}
              </div>
            ))}
          </Slide>
        </div>
      )}

      {/* Grid View */}
      {view === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {slideImages.map((slideImage, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
              onClick={() => setSelectedImage(slideImage)}
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden bg-gray-200">
                <img
                  src={slideImage.url}
                  alt={slideImage.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {slideImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium line-clamp-2">{slideImage.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-bronze-400 transition-colors duration-200 z-10"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {selectedImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium text-center">{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;

