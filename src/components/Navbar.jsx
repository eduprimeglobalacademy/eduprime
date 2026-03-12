import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../assets/eduprimelogo.jpg';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/Programs' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path) => { navigate(path); setIsOpen(false); };
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.toLowerCase().startsWith(path.toLowerCase());

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl' : 'bg-navy-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNavigate('/')} className="flex items-center gap-3 group">
            <img src={Logo} alt="EduPrime Logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-500/60 group-hover:ring-amber-400 transition-all duration-300" />
            <div className="text-left">
              <span className="block text-white font-bold text-lg leading-tight group-hover:text-amber-400 transition-colors duration-300">EduPrime</span>
              <span className="block text-amber-400 text-xs font-medium tracking-widest uppercase">Global Academy</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(link.path) ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}
              >
                {isActive(link.path) && (
                  <motion.span layoutId="activeTab" className="absolute inset-0 bg-white/10 rounded-lg" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavigate('/contact')}
              className="ml-4 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-navy-900 text-sm font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-900 border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive(link.path) ? 'bg-white/10 text-amber-400' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                >
                  {link.label}
                </button>
              ))}
              <button onClick={() => handleNavigate('/contact')} className="w-full mt-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 text-sm font-bold rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
