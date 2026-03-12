import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import PramodImage from '/src/assets/Pramod.jpeg';
import YoginderImage from '/src/assets/brig.jpeg';
import HarishImage from '/src/assets/harish.jpeg';
import DirectorImage from '/src/assets/director.jpeg';
import InstituteImage from '/src/assets/institute.jpeg';

const ADVISORY = [
  {
    image: PramodImage, name: 'Dr. Pramod Pathak', role: 'Senior Advisor',
    bio: 'Co-Founder of Kaizen Mantra. Ph.D. in Stress Management, MBA in HR (BHU). Former IIT Professor. Clients include World Bank, NTPC, TATA Steel.',
  },
  {
    image: YoginderImage, name: 'Brig. Yoginder Parimu (Retd)', role: 'Advisor',
    bio: 'Graduate from J&K University. Served in 1965 and 1971 wars. PGDBA from Symbiosis Pune. Led Indian Rowing Team to Asian Games 1990.',
  },
  {
    image: HarishImage, name: 'Harish Kohli', role: 'Advisor',
    bio: 'Seasoned corporate professional with decades of expertise in management and leadership development.',
  },
  {
    image: DirectorImage, name: 'Dr. Ravi Director', role: 'Director',
    bio: 'Visionary leader driving EduPrime\'s mission to create corporate-ready professionals through innovative training methodologies.',
  },
];

const VALUES = [
  { title: 'Excellence', desc: 'We uphold the highest standards in training and mentoring.' },
  { title: 'Impact', desc: 'Every program is designed to create measurable career outcomes.' },
  { title: 'Integrity', desc: 'Honest, transparent guidance at every stage of your journey.' },
  { title: 'Innovation', desc: 'Continuously evolving our methods to match industry demands.' },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const About = () => (
  <div className="min-h-screen bg-white">
    <div className="relative bg-navy-900 py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-navy-700/30 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
          Our Story
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">EduPrime</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-300 text-xl max-w-2xl mx-auto">
          Bridging the gap between academic education and the corporate world since day one.
        </motion.p>
      </div>
    </div>

    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 to-navy-500/10 rounded-3xl blur-xl" />
          <img src={InstituteImage} alt="Institute" className="relative rounded-2xl shadow-2xl w-full h-96 object-cover ring-1 ring-slate-200" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</span>
          <h2 className="text-4xl font-extrabold text-navy-900 mb-6 leading-tight">Making graduates <span className="text-amber-500">corporate-ready</span></h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>EduPrime Global Academy was established with the vision to bridge the gap between academic education and the corporate world. We equip graduates with essential soft skills, communication abilities, and practical knowledge.</p>
            <p>We believe every graduate deserves a fair shot at a fulfilling career. Our goal is not just to train but to transform — building confident, skilled professionals who exceed corporate expectations.</p>
            <p>Over the years, we have helped hundreds of graduates secure meaningful employment and accelerate their careers through targeted, industry-aligned training.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Values</span>
          <h2 className="text-4xl font-extrabold text-navy-900">What Drives Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ title, desc }, i) => (
            <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <HiCheckCircle className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Leadership</span>
        <h2 className="text-4xl font-extrabold text-navy-900 mb-4">Advisory Committee</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Guided by distinguished professionals who bring decades of expertise and a shared passion for education.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ADVISORY.map(({ image, name, role, bio }, i) => (
          <motion.div key={name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="relative h-52 overflow-hidden bg-slate-100">
              <img src={image} alt={name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-navy-900 text-lg mb-1">{name}</h3>
              <p className="text-amber-600 text-sm font-semibold mb-3">{role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
