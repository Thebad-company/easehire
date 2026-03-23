import React from 'react';

const BrokenSystem = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#1a1410]">
      {/* Background Elements - Matching Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,196,131,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,196,131,0.02)_1px,transparent_1px)] bg-[size:80px_80px] -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <p className="font-label text-[#e5c483] tracking-[0.2em] uppercase text-[10px] font-bold">The Broken System</p>
          </div>

          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-[1.1] text-white mb-8">
            The problem isn't <br />
            <span className="italic text-[#e5c483] drop-shadow-[0_0_30px_rgba(229,196,131,0.3)]">your dedication.</span> <br />
            It's the system.
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Most digital marketing courses were designed to be sold, not to produce results. Here's what's actually broken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* Card 1 - High Contrast Dark */}
          <div className="md:col-span-7 bg-gradient-to-br from-[#1f1d1a]/95 to-[#181614]/95 p-10 rounded-[3rem] shadow-2xl space-y-8 flex flex-col justify-center relative overflow-hidden ring-1 ring-white/10 group hover:ring-primary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-all duration-700"></div>
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center relative z-10 border border-primary/30">
              <span className="material-symbols-outlined text-[28px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
            </div>
            <div className="space-y-4 relative z-10">
              <h4 className="font-headline text-2xl md:text-3xl font-bold text-white leading-tight">They teach platforms, not principles.</h4>
              <p className="text-base text-white/90 leading-relaxed font-light">
                Facebook changed its algorithm 14 times last year. Every course built around a platform is already outdated by the time you finish it. Real skill is understanding <span className="text-[#e5c483] font-semibold">why campaigns work</span> — not just which buttons to click.
              </p>
            </div>
          </div>

          {/* Card 2 - Glass Accent */}
          <div className="md:col-span-5 bg-[#1f1d1a] p-10 rounded-[3rem] shadow-2xl border border-white/10 space-y-8 flex flex-col justify-center group hover:border-primary/30 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
              <span className="material-symbols-outlined text-[28px] text-[#e5c483]" style={{ fontVariationSettings: "'FILL' 1" }}>target</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-2xl md:text-3xl font-bold text-white leading-tight">No live campaigns. No real feedback.</h4>
              <p className="text-base text-white/90 leading-relaxed font-light">
                You practice on sandbox accounts with fake budgets. Then you step into a real job and freeze. <span className="text-[#e5c483] italic font-medium">Experience without consequence is not experience.</span>
              </p>
            </div>
          </div>

          {/* Card 3 - Compact Muted */}
          <div className="md:col-span-4 bg-[#1a1816] p-10 rounded-[3rem] space-y-8 flex flex-col justify-center border border-white/10 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#e5c483]/20 flex items-center justify-center border border-[#e5c483]/20">
              <span className="material-symbols-outlined text-[#e5c483] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl font-bold text-white leading-tight">The developer hasn't run a campaign in 3 years.</h4>
              <p className="text-sm text-white/90 leading-relaxed font-light">
                Most "industry experts" built their reputation on 2019 tactics. The market has moved. Their curriculum hasn't.
              </p>
            </div>
          </div>

          {/* Card 4 - Compact Muted */}
          <div className="md:col-span-3 bg-[#1a1816] p-10 rounded-[3rem] space-y-8 flex flex-col justify-center border border-white/10 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#e5c483]/20 flex items-center justify-center border border-[#e5c483]/20">
              <span className="material-symbols-outlined text-[#e5c483] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl font-bold text-white leading-tight">Zero placement support.</h4>
              <p className="text-sm text-white/90 leading-relaxed font-light">
                A certificate is not a job offer. Most institutes hand you a PDF and wish you luck. The hiring part — the part that actually matters — is left to you.
              </p>
            </div>
          </div>

          {/* Card 5 - Gold Dynamic Accent */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#e5c483]/20 to-[#e5c483]/5 p-10 rounded-[3rem] border border-[#e5c483]/30 space-y-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(229,196,131,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-14 h-14 rounded-2xl bg-[#e5c483] flex items-center justify-center shadow-[0_0_30px_rgba(229,196,131,0.4)]">
              <span className="material-symbols-outlined text-[28px] text-[#2a1f0a]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-2xl md:text-3xl font-bold text-[#e5c483] leading-tight">AI is not a module. <br />It's the foundation.</h4>
              <p className="text-base text-white/90 leading-relaxed font-normal">
                Every traditional course adds a "bonus AI module" at the end. That's like teaching someone to drive and adding GPS as an optional extra. At IconsBase, <span className="text-[#e5c483] font-bold">AI is woven</span> into every single skill we teach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokenSystem;
