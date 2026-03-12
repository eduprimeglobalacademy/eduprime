import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const TESTIMONIALS = [
  { name: 'Priya Sharma', role: 'Software Engineer', text: 'EduPrime transformed my career trajectory. The trainers were exceptional and the curriculum was exactly what I needed to land my dream job.' },
  { name: 'Rohan Mehta', role: 'Marketing Executive', text: 'The College to Corporate program was eye-opening. I walked in as a fresh grad and walked out as a confident professional. Highly recommend!' },
  { name: 'Anjali Verma', role: 'HR Manager', text: 'The business communication course is worth every minute. My presentation skills and confidence have grown tremendously since I enrolled.' },
  { name: 'Karthik Nair', role: 'Business Analyst', text: 'Excellent faculty, structured curriculum, and real-world focus. EduPrime is the best investment I made in my professional development.' },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const videoRef = useRef(null);
  const [videoInView, setVideoInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVideoInView(entry.isIntersecting), { threshold: 0.4 });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => { if (videoRef.current) observer.unobserve(videoRef.current); };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Student Stories
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold text-navy-900">
            What Our Students Say
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            ref={videoRef} className="rounded-2xl overflow-hidden shadow-xl aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/WESGDi_ajUU${videoInView ? '?autoplay=1&mute=1' : ''}`}
              title="Student Testimonial"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 min-h-[240px]">
              <FaQuoteLeft className="text-amber-400 text-4xl mb-6 opacity-60" />
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 italic">"{TESTIMONIALS[active].text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">
                    {TESTIMONIALS[active].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">{TESTIMONIALS[active].name}</div>
                    <div className="text-slate-500 text-sm">{TESTIMONIALS[active].role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => <HiStar key={i} className="text-amber-400 text-lg" />)}
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex gap-2 justify-center mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-amber-500 w-8' : 'bg-slate-300 w-2'}`} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
