import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSearch } from 'react-icons/hi';
import programsData from '../assets/programData';

const Programs = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const programs = Object.values(programsData).filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-navy-900 py-28 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-navy-700/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            What We Teach
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Programs</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto mb-8">
            Industry-aligned courses to fast-track your professional development.
          </motion.p>
          <div className="max-w-lg mx-auto relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search programs..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {programs.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-lg">No programs found matching your search.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={() => navigate(program.path)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  {program.image && <img src={program.image} alt={program.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />}
                  {program.isTopProgram && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Top Pick</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{program.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{program.description}</p>
                  <div className="flex items-center text-amber-600 font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-300">
                    Explore Program <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
