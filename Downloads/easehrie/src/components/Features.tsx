import React from 'react';
import { features } from '../data/mockData';

export const Features: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#f7f9fb] rounded-[4rem] mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-[#3b82f6] font-bold text-sm tracking-widest mb-6 italic">
            // Our Features //
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight max-w-5xl mx-auto">
            Streamline Your Hiring Workflow <br />
            <span className="text-slate-400 opacity-40 italic">From Start To Finish</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1: Dark Emerald */}
          <div className="bg-[#00422b] rounded-[3rem] p-10 text-white shadow-2xl shadow-emerald-900/20 flex flex-col h-[600px] overflow-hidden group">
            <div className="mb-10">
              <h3 className="text-2xl font-black mb-4">{features.items[0].title}</h3>
              <p className="text-emerald-100/60 leading-relaxed font-medium">
                {features.items[0].description}
              </p>
            </div>
            <div className="mt-auto relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl">work</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Senior Product Manager</h4>
                    <p className="text-emerald-300 text-[10px] uppercase font-bold tracking-widest">Microsoft</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold">Full-Time</div>
                  <div className="bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold">Unlimited</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Light Emerald */}
          <div className="bg-[#e4f6eb] rounded-[3rem] p-10 text-slate-900 shadow-2xl shadow-emerald-100 flex flex-col h-[600px] overflow-hidden group">
            <div className="mb-10">
              <h3 className="text-2xl font-black mb-4">{features.items[1].title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {features.items[1].description}
              </p>
            </div>
            <div className="mt-auto relative">
               <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 border border-slate-100 transition-all duration-300 group-hover:translate-y-[-${i*4}px]`}>
                      <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-slate-100 rounded-full mb-2"></div>
                        <div className="h-1.5 w-16 bg-slate-50 rounded-full"></div>
                      </div>
                      <div className="text-emerald-500 font-bold text-xs">85%</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Card 3: Soft Cream */}
          <div className="bg-[#fffcf0] rounded-[3rem] p-10 text-slate-900 shadow-2xl shadow-orange-50 flex flex-col h-[600px] overflow-hidden group">
            <div className="mb-10">
              <h3 className="text-2xl font-black mb-4">{features.items[2].title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {features.items[2].description}
              </p>
            </div>
            <div className="mt-auto">
               <div className="bg-emerald-600 text-white p-4 rounded-3xl rounded-br-none text-xs font-bold w-[90%] mb-12 shadow-xl shadow-emerald-200">
                  Congrats!! you have been accepted to the next stage
               </div>
               <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden translate-y-[20px] hover:translate-y-0 transition-transform">
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                         <span className="material-symbols-outlined text-slate-400">person</span>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
