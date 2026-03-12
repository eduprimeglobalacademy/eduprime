import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiPhone, HiMail, HiCheckCircle } from 'react-icons/hi';
import sendEmail from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(formData.name, formData.email, formData.message);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-navy-900 py-28 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Reach Out
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-extrabold text-navy-900 mb-8">Contact Information</h2>

            <div className="space-y-6 mb-10">
              {[
                { Icon: HiPhone, label: 'Phone', value: '+91 9886537936', href: 'tel:+919886537936' },
                { Icon: HiMail, label: 'Email', value: 'contact@eduprimeglobalacademy.com', href: 'mailto:contact@eduprimeglobalacademy.com' },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Icon className="text-amber-600 text-2xl" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm mb-1">{label}</div>
                    <a href={href} className="text-navy-900 font-semibold hover:text-amber-600 transition-colors break-all">{value}</a>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-navy-900 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { href: 'https://facebook.com', Icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-500' },
                { href: 'https://twitter.com', Icon: FaTwitter, label: 'Twitter', color: 'hover:text-sky-400' },
                { href: 'https://www.linkedin.com/company/edu-pie-global-llp/', Icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
                { href: 'https://www.instagram.com/edupieglobal?igsh=MTNqeTg1OGRqdmV5cg==', Icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
              ].map(({ href, Icon, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 ${color} transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h2 className="text-3xl font-extrabold text-navy-900 mb-8">Send a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
                  <HiCheckCircle className="text-green-500 text-2xl shrink-0" />
                  <p className="font-medium">Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { name: 'phone', label: 'Phone Number (optional)', type: 'tel', placeholder: '+91 9876543210' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
                    <input
                      type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder}
                      required={name !== 'phone'}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 transition-colors text-slate-800 placeholder-slate-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help..." rows={5} required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 transition-colors text-slate-800 placeholder-slate-400 resize-none"
                  />
                </div>
                <button
                  type="submit" disabled={isLoading}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-slate-300 text-navy-900 font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 text-lg"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
