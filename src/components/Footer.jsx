import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/eduprimelogo.jpg';

const NAV = ['Home', 'About Us', 'Programs', 'Gallery', 'Contact'];
const NAV_PATHS = ['/', '/about', '/Programs', '/gallery', '/contact'];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={Logo} alt="EduPrime Logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-amber-500/60" />
              <div>
                <span className="block text-white font-bold text-xl leading-tight">EduPrime</span>
                <span className="block text-amber-400 text-xs font-medium tracking-widest uppercase">Global Academy</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Bridging the gap between academic education and the corporate world. Empowering graduates with the skills to succeed in their careers.
            </p>
            <div className="flex gap-4">
              {[
                { href: 'https://www.facebook.com/', Icon: FaFacebook, color: 'hover:text-blue-400' },
                { href: 'https://www.instagram.com/edupieglobal?igsh=MTNqeTg1OGRqdmV5cg==', Icon: FaInstagram, color: 'hover:text-pink-400' },
                { href: 'https://www.linkedin.com/company/edu-pie-global-llp/', Icon: FaLinkedin, color: 'hover:text-blue-300' },
              ].map(({ href, Icon, color }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 ${color} transition-all duration-300 hover:bg-white/20`}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-3">
              {NAV.map((item, i) => (
                <li key={item}>
                  <button onClick={() => navigate(NAV_PATHS[i])}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 hover:translate-x-1 transform block">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Get In Touch</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <FaPhoneAlt className="text-amber-500 mt-0.5 shrink-0" />
                <span>+91 9886537936</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <FaEnvelope className="text-amber-500 mt-0.5 shrink-0" />
                <a href="mailto:contact@eduprimeglobalacademy.com" className="hover:text-amber-400 transition-colors break-all">
                  contact@eduprimeglobalacademy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} EduPrime Global Academy. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Empowering Skills, Transforming Futures</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
