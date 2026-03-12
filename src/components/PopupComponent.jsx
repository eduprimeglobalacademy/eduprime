import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiArrowRight } from 'react-icons/hi';

const PopupComponent = ({ isVisible, onClose, program }) => {
  const navigate = useNavigate();
  if (!program) return null;

  const handleGoToProgram = () => { navigate(program.path); onClose(); };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-md w-full"
          >
            <div className="relative h-48 overflow-hidden">
              {program.image && <img src={program.image} alt={program.name} className="w-full h-full object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
              <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                <HiX />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-amber-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Featured Program</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-extrabold text-navy-900 mb-2">{program.name}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{program.description}</p>
              <div className="flex gap-3">
                <button onClick={handleGoToProgram}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold rounded-xl transition-all duration-300 hover:shadow-lg">
                  Explore Program <HiArrowRight />
                </button>
                <button onClick={onClose}
                  className="px-5 py-3 border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-semibold rounded-xl transition-colors">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupComponent;
