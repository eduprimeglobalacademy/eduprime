import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import programsData from '../assets/programData';
import sendEmail from '../services/emailService';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const program = programsData[id];
  if (!program) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Program not found</h2>
        <button onClick={() => navigate('/Programs')} className="px-6 py-3 bg-amber-500 text-navy-900 font-bold rounded-xl">View All Programs</button>
      </div>
    </div>
  );

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
      <div className="bg-navy-900 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/Programs')} className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors mb-6 text-sm font-medium">
            <HiArrowLeft /> Back to Programs
          </button>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4">{program.name}</motion.h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{program.description}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 aspect-video">
              <iframe
                src={program.videoUrl}
                title={program.name}
                className="w-full h-full"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sticky top-28">
              <h3 className="text-xl font-bold text-navy-900 mb-2">{program.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{program.description}</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
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
                <h2 className="text-2xl font-extrabold text-navy-900">Enquire About Program</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
                  <HiX size={24} />
                </button>
              </div>

              {formStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
                  <HiCheckCircle className="text-2xl shrink-0" />
                  <p className="font-medium">Enquiry sent successfully!</p>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                  Failed to send. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                    <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your interest..." rows={4} required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 transition-colors resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-slate-300 transition-colors">Cancel</button>
                  <button type="submit" disabled={isLoading} className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all disabled:bg-slate-300">
                    {isLoading ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgramDetail;
