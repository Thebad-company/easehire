import React from 'react';
import { stats } from '../data/mockData';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Column: Content */}
        <div className="lg:w-1/2 text-left">
          <p className="text-[#3b82f6] font-bold text-sm tracking-widest mb-6 italic">
            // About Our Platform //
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1] mb-12">
            {stats.headline.split('With').map((part, i) => (
              <span key={i} className={i === 1 ? 'text-slate-300 block' : ''}>
                {i === 1 ? `With ${part}` : part}
              </span>
            ))}
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-medium">
            {stats.description}
          </p>
          <button className="bg-[#b8e831] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg shadow-lime-300/40 hover:scale-105 transition-all">
            {stats.cta}
          </button>
        </div>

        {/* Right Column: Stat Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 gap-8 w-full">
          {stats.items.map((stat, i) => (
            <div 
              key={i} 
              className="relative p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-slate-100 group transition-all hover:translate-x-2"
            >
              {/* Corner Accents */}
              <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#b8e831]/30"></div>
              <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#b8e831]/30"></div>
              
              <div className="flex flex-col md:flex-row items-baseline gap-6 mb-6">
                <span className="text-6xl md:text-7xl font-black text-slate-900">{stat.value}</span>
                <span className="text-2xl font-bold text-slate-300 uppercase tracking-widest">{stat.label}</span>
              </div>
              <p className="text-slate-400 text-lg max-w-sm font-medium leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
