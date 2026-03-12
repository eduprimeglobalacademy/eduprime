import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import FacultyCard from './FacultyCard';
import facultyData from '../assets/facultyData';

const ProfileModal = ({ trainer, onClose }) => {
  if (!trainer) return null;
  const paragraphs = trainer.bio
    ? trainer.bio.trim().split('\n').map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-navy-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
          onClick={e => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          <div className="relative bg-navy-900 px-8 pt-8 pb-6 flex gap-6 items-end shrink-0">
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <HiX size={18} />
              </button>
            </div>

            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-amber-500/60 shrink-0 bg-slate-200">
              <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top" />
            </div>

            <div className="pb-1">
              <h2 className="text-2xl font-extrabold text-white leading-tight mb-1">{trainer.name}</h2>
              <p className="text-amber-400 font-semibold text-sm leading-snug">{trainer.position || trainer.role}</p>
            </div>
          </div>

          <div className="overflow-y-auto px-8 py-6 flex-1">
            {paragraphs.length > 0 ? (
              <div className="space-y-3">
                {paragraphs.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-[15px]">{para}</p>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 italic">No bio available.</p>
            )}
          </div>

          <div className="px-8 py-5 border-t border-slate-100 shrink-0">
            <button
              onClick={onClose}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all duration-300"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const TrainersSection = () => {
  const [selected, setSelected] = useState(null);
  const trainers = Array.isArray(facultyData) ? facultyData : Object.values(facultyData);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Expert Trainers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4"
          >
            Meet Our Faculty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Click on any faculty member to read their full profile and experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <FacultyCard
                image={trainer.image}
                name={trainer.name}
                role={trainer.position || trainer.role || trainer.designation}
                expertise={trainer.bio}
                onClick={() => setSelected(trainer)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selected && <ProfileModal trainer={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default TrainersSection;
