import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiX } from 'react-icons/hi';
import employeeImg from '../assets/employeeskill.jpg';
import sendEmail from '../services/emailService';

const SKILLS = [
  { title: 'Communication Skills', desc: 'Master both verbal and non-verbal communication to express ideas clearly and confidently.' },
  { title: 'Spoken English', desc: 'Build fluency and confidence in English for professional and social settings.' },
  { title: 'Public Speaking', desc: 'Overcome stage fear and deliver compelling speeches and presentations.' },
  { title: 'Logical Reasoning', desc: 'Sharpen your analytical thinking and problem-solving abilities.' },
  { title: 'Team Building', desc: 'Learn to collaborate effectively and lead high-performing teams.' },
  { title: 'Interview Preparation', desc: 'Ace interviews with practice, confidence-building, and strategic techniques.' },
  { title: 'Personal Branding', desc: 'Develop a professional identity that stands out to employers and peers.' },
  { title: 'Vocabulary Enhancement', desc: 'Expand your word power using the proven RPS Method.' },
];

const EmployeeSkills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(formData.name, formData.email, formData.message);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => { setIsModalOpen(false); setFormStatus(''); }, 2000);
    } catch {
      setFormStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-navy-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Employability</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Employability <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Skills</span> Program
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                A holistic program that sharpens the professional abilities students need to get hired and excel in their careers. From communication to reasoning — we've got you covered.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1"
              >
                Enquire Now
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-navy-500/10 rounded-3xl blur-xl" />
              <img src={employeeImg} alt="Employability Skills" className="relative rounded-2xl w-full h-80 object-cover ring-1 ring-white/10 shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">What You'll Learn</span>
            <h2 className="text-4xl font-extrabold text-navy-900">Skills Covered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map(({ title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <HiCheckCircle className="text-amber-600 text-xl" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-navy-900 mb-4">Start Building Your Future Today</h2>
        <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">Join our program and walk away with the skills employers actually look for.</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-lg"
        >
          Enroll Now
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-navy-900">Enquire Now</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1"><HiX size={24} /></button>
              </div>
              {formStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
                  <HiCheckCircle className="text-2xl shrink-0" /><p className="font-medium">Enquiry sent successfully!</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[{ name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' }, { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' }].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                    <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} required className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={4} required className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 transition-colors resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-slate-300 transition-colors">Cancel</button>
                  <button type="submit" disabled={isLoading} className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all disabled:bg-slate-300">{isLoading ? 'Sending...' : 'Submit'}</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeSkills;
