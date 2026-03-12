import React from 'react';

const FacultyCard = ({ image, name, role, expertise }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
    <div className="relative h-56 overflow-hidden bg-slate-100">
      <img src={image} alt={name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-5">
      <h3 className="font-bold text-navy-900 text-lg mb-1 group-hover:text-amber-600 transition-colors duration-300">{name}</h3>
      <p className="text-amber-600 text-sm font-semibold mb-2">{role}</p>
      {expertise && <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{expertise}</p>}
    </div>
  </div>
);

export default FacultyCard;
