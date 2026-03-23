import React from 'react';
import analyticsMain from '../assets/analytics-main.png';
import workspaceImg from '../assets/workspace.png';

const ProofEngine = () => {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4 text-on-surface">The Proof Engine</h2>
          <p className="text-on-surface-variant font-light">Real execution, real results, real students.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          {/* Main Large Card */}
          <div className="md:col-span-8 bg-[#f5f2eb] rounded-3xl overflow-hidden group border border-outline-variant/10 relative shadow-2xl">
            <img 
              alt="Dashboard analytics" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" 
              src={analyticsMain}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
              <div className="text-primary font-bold mb-2 tracking-[0.3em] uppercase text-xs">Campaign Snapshot</div>
              <h4 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">$140k/mo Managed Ad Spend</h4>
            </div>
          </div>
          
          {/* Side Column */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10 hover:shadow-[0_0_50px_rgba(229,196,131,0.15)] transition-all duration-500 group flex flex-col justify-center">
              <div className="text-5xl font-headline font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">320%</div>
              <p className="text-sm font-label uppercase tracking-[0.2em] mb-4 text-on-surface-variant font-bold">Average ROAS</p>
              <p className="text-xs text-on-surface-variant leading-relaxed italic opacity-80">
                "IconsBase taught me more in 3 weeks about execution than my degree did in 3 years."
              </p>
            </div>
            
            <div className="bg-surface-container rounded-3xl overflow-hidden group border border-outline-variant/10 relative shadow-xl">
              <img 
                alt="Workspace" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" 
                src={workspaceImg}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-surface-container-highest/90 to-transparent">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface">Curated Workspace</p>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Execution Specialist Sandbox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofEngine;
