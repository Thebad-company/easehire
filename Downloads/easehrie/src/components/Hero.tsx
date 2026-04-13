import React, { useState, useEffect } from 'react';
import { heroContent } from '../data/mockData';

const dynamicJobs = [
  { company: "Microsoft", role: "Senior Product Designer", desc: "You'll own the end-to-end process — from discovery to final delivery.", salary: "$8,000/Month", tags: ["• Full-Time", "• Senior Level"] },
  { company: "Google", role: "UX Researcher", desc: "Conduct user studies and transform insights into actionable designs.", salary: "$7,500/Month", tags: ["• Remote", "• Mid Level"] },
  { company: "Apple", role: "Hardware Engineer", desc: "Join the team building the next generation of silicon and architecture.", salary: "$9,500/Month", tags: ["• On-Site", "• Expert"] },
  { company: "Meta", role: "Frontend Developer", desc: "Build immersive social experiences using React and cutting-edge web tech.", salary: "$8,200/Month", tags: ["• Full-Time", "• Senior"] }
];

export const Hero: React.FC = () => {
  const [jobIndex, setJobIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setJobIndex((prev) => (prev + 1) % dynamicJobs.length);
        setIsFading(false);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentJob = dynamicJobs[jobIndex];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center pt-32 sm:pt-48 pb-20 px-4 overflow-x-hidden bg-white shrink-0">
      {/* Background Grid - Increased visibility and central glow */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b8e831]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full transform scale-95 lg:scale-100 transition-transform">
        {/* Headline - Mixed Styles */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black text-slate-900 tracking-tighter leading-[0.85] mb-10 relative">
          <span className="block">{heroContent.headline.part1}</span>
          <span className="block text-slate-400 opacity-40 italic">{heroContent.headline.highlight}</span>
          <span className="block">{heroContent.headline.part2}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium px-4">
          {heroContent.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="bg-[#b8e831] text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-lime-300/40 hover:scale-105 transition-all">
            Get Started
          </button>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-lg font-bold flex items-center gap-3 hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            Watch Demo
          </button>
        </div>

        {/* Floating Elements - Pushed slightly out for more breathing room */}
        {/* Left Profile Card */}
        <div className="hidden xl:block absolute top-[10%] left-[-8%] w-60 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 rotate-[-8deg] z-10 transition-transform hover:rotate-0 duration-500 scale-90 lg:scale-100">
          <div className="flex items-center gap-3 mb-4">
            <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA" alt="Maria" />
            <div className="text-left">
              <h4 className="font-bold text-slate-800 text-sm">Maria Angelica M</h4>
              <p className="text-[10px] text-slate-400 font-medium">Product Designer</p>
            </div>
            <div className="ml-auto text-slate-200">
              <span className="material-symbols-outlined text-xs">more_horiz</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-slate-400 font-bold">Start May 12, 2025</p>
            <div className="flex gap-1">
              <div className="w-5 h-5 rounded-md bg-[#ea4335] flex items-center justify-center text-[10px] text-white font-bold">M</div>
              <div className="w-5 h-5 rounded-md bg-[#0077b5] flex items-center justify-center text-[10px] text-white font-bold">in</div>
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-[10px] text-white font-bold">O</div>
            </div>
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="hidden xl:block absolute top-[10%] right-[-8%] w-60 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 rotate-[8deg] z-10 transition-transform hover:rotate-0 duration-500 scale-90 lg:scale-100">
          <div className="flex items-center gap-3 mb-4">
            <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF-6BKeMjU6b1kgyxMGsZmgnFyak8C6IzEr2V_KLtl7qDl_gUR7LCse710BEQ10sGex6cpNpx1IRh6xFBVyNkMXqaG_YD73ZL3-dprtU1TC3bXETs-wdKfAReasS_J5MWE_BQ--uhvLQi5yK9-vficGOjgbLNRNs09at2CGmTt6KSFSRDBduA8tG6pNzB4o2XU1_ZJwljhhQQ6Na4e2zX-ZFDkchSmIB8ozwPkYLZs1D8gEa80-W28yS_fp3NeanO1kW7g-by6BieH" alt="Marcus" />
            <div className="text-left">
              <h4 className="font-bold text-slate-800 text-sm">Marcus Alexandro</h4>
              <p className="text-[10px] text-slate-400 font-medium">Product Manager</p>
            </div>
            <div className="ml-auto text-slate-200">
              <span className="material-symbols-outlined text-xs">more_horiz</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-slate-400 font-bold">Start May 12, 2025</p>
            <div className="flex gap-1">
              <div className="w-5 h-5 rounded-md bg-[#ea4335] flex items-center justify-center text-[10px] text-white font-bold">M</div>
              <div className="w-5 h-5 rounded-md bg-[#0077b5] flex items-center justify-center text-[10px] text-white font-bold">in</div>
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-[10px] text-white font-bold">O</div>
            </div>
          </div>
        </div>

        {/* Bottom Left Job Card (Animated Content) */}
        <div className={`hidden xl:block absolute bottom-[-15%] left-[0%] w-64 bg-[#005236] text-white p-5 rounded-3xl shadow-2xl rotate-[4deg] z-20 border border-white/20 transition-all duration-500 hover:scale-110 ${isFading ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="text-[10px] text-emerald-300 font-bold uppercase mb-1">{currentJob.company}</div>
          <h4 className="text-lg font-bold mb-1 leading-tight">{currentJob.role}</h4>
          <p className="text-[10px] text-emerald-100/70 mb-2 leading-relaxed h-[30px]">{currentJob.desc}</p>
          <div className="flex gap-2 mb-2">
            {currentJob.tags.map((tag, i) => (
              <span key={i} className="bg-emerald-500/30 text-[9px] px-2 py-1 rounded-full text-emerald-100 font-bold">{tag}</span>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 text-left">
            <div className="text-xs font-bold">{currentJob.salary}</div>
            <div className="text-[10px] opacity-60">Posted recently</div>
          </div>
        </div>

        {/* Bottom Right Pill */}
        <div className="hidden xl:flex absolute bottom-[-15%] right-[0%] bg-[#005236] text-white p-4 rounded-3xl items-center gap-4 shadow-2xl z-10 transition-all hover:scale-105">
          <img className="w-10 h-10 rounded-full border-2 border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvMqyIaPE6E5J61lKtYyzjCQSCUt34J0Gz3hb4jTo8gZD-gWwofVmydHWEsdGHDX72MruWE3cQ8m4cIO7s4OEhgUu4kVrQDzYrIHqZwgx12wEzcI2N6GYP0_uEEgq5E9Q-PPbPNOy3fzLKueiTbuNSb1apzQe1NlCld7fQEg1ywT8kdAVFSZ0zRsGjeE8kuO0YFeipIGyFknOz4PggvH5MCWvolniZ9l7trdeiLiSgULolJQB8S_qWC8XE0qgoxHvtRmNSZ9gfDSI5" alt="Robert" />
          <div className="text-left py-1 pr-6">
            <p className="font-bold text-sm">Robert Williamson</p>
            <p className="text-[10px] text-emerald-300">Head of HRD</p>
          </div>
          <div className="absolute top-[-10px] left-[-10px] text-[#005236] font-black drop-shadow-lg">
            <span className="material-symbols-outlined fill font-black text-3xl">near_me</span>
          </div>
        </div>
      </div>
    </section>
  );
};
