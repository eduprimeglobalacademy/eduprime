import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiAcademicCap, HiBriefcase, HiStar } from 'react-icons/hi';
import heroimage from '../assets/heroimage.jpeg';

const STATS = [
  { icon: HiAcademicCap, value: '500+', label: 'Graduates Trained' },
  { icon: HiBriefcase, value: '15+', label: 'Programs Offered' },
  { icon: HiStar, value: '98%', label: 'Satisfaction Rate' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }) };

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-navy-900 flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <HiStar className="text-amber-400" />
              Empowering Skills, Transforming Futures
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Bridge the Gap Between{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                College & Corporate
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              We make professionals out of graduates. Our expert-led training programs are designed to give you real-world skills, confidence, and the corporate edge you need to succeed.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => navigate('/Programs')}
                className="group flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1"
              >
                Explore Programs
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white hover:border-amber-400 hover:text-amber-400 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Us
              </button>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="flex flex-wrap gap-8">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <Icon className="text-amber-400 text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-slate-400 text-sm">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-navy-500/20 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img src={heroimage} alt="Students learning at EduPrime" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-navy-900 font-bold text-xl">✓</div>
                  <div>
                    <div className="text-white font-semibold">Industry-Ready Training</div>
                    <div className="text-slate-300 text-sm">Practical skills for the real world</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
