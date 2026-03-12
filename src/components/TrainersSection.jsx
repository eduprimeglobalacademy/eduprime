import React from 'react';
import { motion } from 'framer-motion';
import FacultyCard from './FacultyCard';
import facultyData from '../assets/facultyData';

const TrainersSection = () => {
  const trainers = Array.isArray(facultyData) ? facultyData : Object.values(facultyData);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Expert Trainers
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4">
            Meet Our Faculty
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg">
            Learn from industry veterans and seasoned professionals who bring real-world experience to every session.
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
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
