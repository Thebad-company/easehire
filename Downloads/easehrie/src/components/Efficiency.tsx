import React from 'react';
import { efficiency } from '../data/mockData';

export const Efficiency: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          {/* Main Efficiency Highlight */}
          <div className="md:col-span-8 bg-[#fdfcf9] p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-orange-50/50 border border-orange-100/50 flex flex-col justify-center group">
            <div className="text-left">
              <span className="text-[#3b82f6] font-bold text-sm tracking-widest mb-6 block italic uppercase">
                {efficiency.tagline}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-8 max-w-2xl text-slate-900 leading-tight">
                {efficiency.headline.split(' ').map((word: string, i: number) => (
                  <span key={i} className={i > 2 ? 'text-slate-300 block italic opacity-40' : ''}>{word} </span>
                ))}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-12 font-medium">
                {efficiency.description}
              </p>
              <a href="#" className="inline-flex items-center gap-3 text-[#005236] font-black text-xl group-hover:gap-5 transition-all">
                {efficiency.cta}
                <span className="material-symbols-outlined font-black">arrow_right_alt</span>
              </a>
            </div>
          </div>

          {/* Assessment Side Card */}
          <div className="md:col-span-4 bg-[#005236] p-12 rounded-[3rem] text-white flex flex-col justify-between shadow-3xl shadow-emerald-900/40 relative overflow-hidden group">
            {/* Abstract Background Detail */}
            <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-emerald-500/20 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 mb-12">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h3 className="text-2xl font-black mb-6 leading-tight">{efficiency.assessment.title}</h3>
              <p className="text-emerald-100/60 text-base leading-relaxed font-medium">{efficiency.assessment.description}</p>
            </div>
            <button className="relative z-10 bg-white text-[#005236] font-black py-5 rounded-2xl text-lg hover:bg-[#b8e831] hover:text-white transition-all shadow-xl">
              {efficiency.assessment.cta}
            </button>
          </div>
        </div>

        {/* Dynamic Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {efficiency.features.map((feature: any, i: number) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-50 border border-slate-100 transition-all hover:translate-y-[-10px] group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner"
                style={{ backgroundColor: feature.bg }}
              >
                <span className="material-symbols-outlined text-2xl font-black" style={{ color: feature.color }}>{feature.icon}</span>
              </div>
              <h4 className="text-xl font-black mb-4 text-slate-900 tracking-tight">{feature.title}</h4>
              <p className="text-slate-400 font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
