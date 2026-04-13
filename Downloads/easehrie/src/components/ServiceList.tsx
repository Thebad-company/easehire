import React from 'react';
import { serviceCatalog } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

export const ServiceList: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8e831]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#005236]/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Intro */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#b8e831]/10 rounded-full text-[#005236] font-bold text-sm tracking-wider uppercase">
              // Product Services //
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Features
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {serviceCatalog.headline}
            </p>
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-6 group hover:translate-y-[-4px] transition-all duration-300">
               <div className="w-16 h-16 bg-[#005236] rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-3xl">star</span>
               </div>
               <div>
                 <h4 className="text-lg font-bold text-slate-900">Digital Concierge</h4>
                 <p className="text-sm text-slate-500">Premium support and strategy for your hiring success.</p>
               </div>
            </div>
          </div>

          {/* Right Column: List */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">
              {serviceCatalog.description}
            </h3>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {serviceCatalog.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                   <div className="mt-1">
                     <CheckCircle2 className="w-5 h-5 text-[#b8e831] group-hover:scale-110 transition-transform" />
                   </div>
                   <span className="text-slate-700 font-semibold group-hover:text-[#005236] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
