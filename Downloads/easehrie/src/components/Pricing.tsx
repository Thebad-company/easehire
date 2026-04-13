import React from 'react';
import { pricing } from '../data/mockData';

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-[#3b82f6] font-bold text-sm tracking-widest mb-6 italic">
            {pricing.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
            Flexible Plans That Scale <br />
            <span className="text-slate-400 opacity-40 italic">With Your Hiring Goals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 max-w-5xl mx-auto">
          {pricing.items.map((item, i) => (
            <div 
              key={i} 
              className={`rounded-[3rem] p-12 flex flex-col h-full transition-all hover:scale-[1.02] border ${
                item.highlighted 
                ? 'bg-[#00422b] text-white shadow-3xl shadow-emerald-900/30 border-transparent' 
                : 'bg-slate-50 text-slate-900 border-slate-100'
              }`}
            >
              <div className="mb-10">
                 <div className={`text-sm font-black uppercase tracking-widest mb-4 ${item.highlighted ? 'text-emerald-300' : 'text-slate-400'}`}>
                    {item.name}
                 </div>
                 <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black">{item.price}</span>
                    <span className={`text-lg ${item.highlighted ? 'text-emerald-200/50' : 'text-slate-300'}`}>{item.period}</span>
                 </div>
                 <p className={`text-sm font-medium leading-relaxed ${item.highlighted ? 'text-emerald-50/70' : 'text-slate-500'}`}>
                    {item.description}
                 </p>
              </div>

              <button className={`w-full py-4 rounded-2xl font-black text-lg mb-10 transition-all ${
                item.highlighted 
                ? 'bg-[#b8e831] text-white shadow-xl shadow-lime-300/20' 
                : 'bg-slate-900 text-white'
              }`}>
                {item.cta}
              </button>

              <div className="space-y-4">
                {item.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className={`material-symbols-outlined text-xl ${item.highlighted ? 'text-emerald-400' : 'text-emerald-600'}`}>check_circle</span>
                    <span className={`text-sm font-bold ${item.highlighted ? 'text-emerald-50' : 'text-slate-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Banner Card */}
        <div className="max-w-5xl mx-auto bg-[#e4f6eb] rounded-[3rem] p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-emerald-100">
           <div className="lg:w-2/3">
              <h3 className="text-3xl font-black text-slate-900 mb-4">{pricing.banner.title}</h3>
              <p className="text-slate-500 font-medium">{pricing.banner.description}</p>
           </div>
           <button className="bg-[#b8e831] text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-lime-300/20 whitespace-nowrap">
              {pricing.banner.cta}
           </button>
        </div>
      </div>
    </section>
  );
};
