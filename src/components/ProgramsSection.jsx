import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import programsData from '../assets/programData';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }) };

const ProgramsSection = () => {
  const navigate = useNavigate();
  const programs = Object.values(programsData).filter(p => p.isTopProgram);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4">
            Our Top Programs
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg">
            Carefully designed programs to help you grow professionally and stand out in the corporate world.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => navigate(program.path)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={program.image} alt={program.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{program.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                  Learn More <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/Programs')}
            className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
