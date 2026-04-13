import React from 'react';
import { integrations } from '../data/mockData';

export const Integrations: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-24 relative arc-container flex flex-col items-center">
          {/* Subtle Grid Arc */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] border-t-2 border-dashed border-slate-100 rounded-[500px_500px_0_0] pointer-events-none"></div>
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border-t-2 border-dashed border-slate-50 rounded-[400px_400px_0_0] pointer-events-none"></div>
          
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Core Icon */}
            <div className="relative z-30 w-28 h-28 bg-[#005236] text-white rounded-3xl flex items-center justify-center shadow-3xl shadow-emerald-500/30 animate-float border-4 border-white">
              <span className="material-symbols-outlined text-5xl font-black">hub</span>
            </div>

            {/* Orbiting Apps */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {integrations.apps.map((app, i) => (
                <div
                  key={i}
                  className="absolute animate-orbit flex items-center justify-center"
                  style={{ 
                    animationDelay: app.delay,
                    animationDuration: '30s'
                  }}
                >
                  <div className="w-18 h-18 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-2 border-slate-50 p-4 transition-transform hover:scale-125 pointer-events-auto">
                    <img src={app.icon} alt={app.name} className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[-100px] relative z-40 bg-white pt-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            Connect With The <br />
            <span className="text-slate-400 opacity-40 italic">Tools</span> You Already Use Daily
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            {integrations.subheadline}
          </p>
          <button className="bg-[#b8e831] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-lime-300/40 hover:scale-105 transition-all">
            {integrations.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
