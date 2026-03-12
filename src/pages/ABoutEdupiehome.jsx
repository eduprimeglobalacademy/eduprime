import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import instituteImg from '../assets/institute.jpeg';

const HIGHLIGHTS = [
  'Industry-experienced trainers',
  'Practical, hands-on curriculum',
  'Small batch sizes for personal attention',
  'Placement assistance & career guidance',
  'Flexible schedules for working professionals',
];

const ABoutEdupiehome = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 to-navy-500/10 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img src={instituteImg} alt="EduPrime Institute" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex gap-6">
                  {[{ num: '10+', label: 'Years Experience' }, { num: '500+', label: 'Graduates' }].map(({ num, label }) => (
                    <div key={label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-center">
                      <div className="text-2xl font-extrabold text-amber-400">{num}</div>
                      <div className="text-white text-xs font-medium">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">
              About EduPrime <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Global Academy</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded with a vision to bridge the gap between academic education and corporate readiness, EduPrime Global Academy has been transforming graduates into professionals.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our mission is simple: equip every student with the soft skills, communication abilities, and practical knowledge needed to thrive in today's competitive corporate environment.
            </p>

            <ul className="space-y-3 mb-8">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <HiCheckCircle className="text-amber-500 text-xl shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/about')}
              className="group flex items-center gap-2 px-7 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Learn More About Us
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ABoutEdupiehome;
