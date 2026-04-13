import React from 'react';
import { showcase } from '../data/mockData';

export const SoftwareShowcase: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 text-left">
            <p className="text-[#3b82f6] font-bold text-sm tracking-widest mb-6 italic">
              {showcase.tagline}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1] mb-12">
              Explore Our <br />
              <span className="text-slate-400 opacity-40 italic">Recruitment Software</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-medium">
              {showcase.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#b8e831] text-white px-12 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-lime-300/40 hover:scale-105 active:scale-95 transition-all">
                {showcase.cta}
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="relative z-10 p-6 bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-3xl border border-white/60 transition-transform group-hover:scale-[1.02] duration-500">
              <img
                src={showcase.image}
                alt="Software Dashboard"
                className="w-full h-auto rounded-[2rem] shadow-2xl"
              />
            </div>
            {/* Background geometric accents */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#b8e831]/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-emerald-50 rounded-full blur-[60px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
