import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiPhotograph } from "react-icons/hi";

import adi1 from "../assets/gallery/adi1.jpeg";
import adi2 from "../assets/gallery/adi2.jpeg";
import adi from "../assets/gallery/adi.jpeg";
import nag2 from "../assets/gallery/nag2.jpeg";
import adi4 from "../assets/gallery/adi4.jpeg";
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
import acet1 from "../assets/gallery/acet1.jpeg";
import acet2 from "../assets/gallery/acet2.jpeg";
import acet3 from "../assets/gallery/acet3.jpeg";
import angus1 from "../assets/gallery/angus1.jpeg";
import angus2 from "../assets/gallery/angus2.jpeg";
import angus3 from "../assets/gallery/angus3.jpeg";
import moucambridge from "../assets/gallery/moucambridge.jpeg";
import moucambridge1 from "../assets/gallery/moucambridge1.jpeg";
import siddganga from "../assets/gallery/siddganga.jpeg";
import angus4 from "../assets/gallery/angus4.jpeg";
import nagarjuna from "../assets/gallery/nagarjuna.jpeg";
import pic3 from "../assets/gallery/pic3.jpg";

const IMAGES = [
  { url: adi1, caption: "MoU between Edu-pie Global and Aditya College of Engineering and Technology" },
  { url: adi2, caption: "" },
  { url: nag2, caption: "Class in progress in Nagarjuna Degree College" },
  { url: adi, caption: "Reinventing Ourselves in this VUCA World — Dr. Pramod Pathak at Aditya College" },
  { url: adi4, caption: "" },
  { url: fear, caption: "Overcome Stage Fear" },
  { url: interview, caption: "Interview Preparation Sessions" },
  { url: class_college_1, caption: "" },
  { url: class_college_2, caption: "" },
  { url: class_college_3, caption: "" },
  { url: class_college_4, caption: "" },
  { url: rmsit1, caption: "" },
  { url: rmsit2, caption: "" },
  { url: rmsit3, caption: "" },
  { url: rmsit4, caption: "" },
  { url: rmsit5, caption: "" },
  { url: acet1, caption: "Orientation session for freshers at ACET, Bangalore" },
  { url: acet2, caption: "" },
  { url: acet3, caption: "" },
  { url: angus1, caption: "Corporate communication skills session for engineers in Bangalore" },
  { url: angus2, caption: "" },
  { url: angus3, caption: "" },
  { url: moucambridge, caption: "MoU between Cambridge Inst of Tech and EduPrime Global Academy" },
  { url: moucambridge1, caption: "" },
  { url: siddganga, caption: "Siddganga Program" },
  { url: angus4, caption: "" },
  { url: nagarjuna, caption: "Nagarjuna College Session" },
  { url: pic3, caption: "" },
];

const ImageSlider = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-navy-900 py-28 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Photo Gallery
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Moments</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto">
            A glimpse into our training sessions, events, and partnerships across institutions.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              onClick={() => setSelected(img)}
              className="group relative cursor-pointer rounded-xl overflow-hidden bg-slate-100 aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img src={img.url} alt={img.caption || 'Gallery photo'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                {img.caption && (
                  <p className="text-white text-xs font-medium p-3 leading-relaxed line-clamp-2">{img.caption}</p>
                )}
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiPhotograph className="text-white text-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <HiX size={20} />
            </button>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full">
              <img src={selected.url} alt={selected.caption} className="w-full h-full object-contain rounded-xl" />
              {selected.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                  <p className="text-white font-medium text-center">{selected.caption}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
