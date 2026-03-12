import React from 'react';
import { HiUser } from 'react-icons/hi';

const FacultyCard = ({ image, name, role, expertise, onClick }) => (
  <div
    onClick={onClick}
    className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
  >
    <div className="relative h-56 overflow-hidden bg-slate-100">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <span className="flex items-center gap-1.5 text-white text-xs font-semibold bg-amber-500 px-3 py-1.5 rounded-full">
          <HiUser size={12} /> View Profile
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-navy-900 text-base mb-1 group-hover:text-amber-600 transition-colors duration-300 leading-tight">{name}</h3>
      <p className="text-amber-600 text-xs font-semibold leading-snug line-clamp-2">{role}</p>
    </div>
  </div>
);

export default FacultyCard;
