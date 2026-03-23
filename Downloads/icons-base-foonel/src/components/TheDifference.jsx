import React from 'react';

const BrokenSystem = () => {
  return (
    <section className="py-32 px-8 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight text-[#1c1c1c] mb-8">
            The problem isn't <br/>
            <span className="text-primary-fixed-dim italic opacity-80">your dedication.</span> <br/>
            It's the system.
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-80">
            Most digital marketing courses were designed to be sold, not to produce results. Here's what's actually broken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* Card 1 - Dark */}
          <div className="md:col-span-7 bg-[#1c1e26] p-10 rounded-[2.5rem] shadow-2xl space-y-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center relative z-10">
              <span className="material-symbols-outlined text-[28px] text-white">sync</span>
            </div>
            <div className="space-y-4 relative z-10">
              <h4 className="font-headline text-2xl font-bold text-white leading-tight">They teach platforms, not principles.</h4>
              <p className="text-base text-white/60 leading-relaxed font-light">
                Facebook changed its algorithm 14 times last year. Every course built around a platform is already outdated by the time you finish it. Real skill is understanding why campaigns work — not just which buttons to click.
              </p>
            </div>
          </div>

          {/* Card 2 - White */}
          <div className="md:col-span-5 bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/5 space-y-8 flex flex-col justify-center">
            <div className="w-14 h-14 rounded-2xl bg-[#f0f0f0] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>target</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-2xl font-bold text-on-surface leading-tight">No live campaigns. No real feedback.</h4>
              <p className="text-base text-on-surface-variant/70 leading-relaxed font-light">
                You practice on sandbox accounts with fake budgets. Then you step into a real job and freeze. Experience without consequence is not experience.
              </p>
            </div>
          </div>

          {/* Card 3 - Grey */}
          <div className="md:col-span-4 bg-[#e5e1d5] p-10 rounded-[2.5rem] space-y-8 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center">
              <span className="material-symbols-symbols-outlined text-primary text-2xl">calendar_today</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl font-bold text-on-surface leading-tight">The instructor hasn't run a campaign in 3 years.</h4>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed font-light">
                Most "industry experts" built their reputation on 2019 tactics. The market has moved. Their curriculum hasn't.
              </p>
            </div>
          </div>

          {/* Card 4 - Grey */}
          <div className="md:col-span-3 bg-[#e5e1d5] p-10 rounded-[2.5rem] space-y-8 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">description</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl font-bold text-on-surface leading-tight">Zero placement support.</h4>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed font-light">
                A certificate is not a job offer. Most institutes hand you a PDF and wish you luck. The hiring part — the part that actually matters — is left to you.
              </p>
            </div>
          </div>

          {/* Card 5 - Gold Big */}
          <div className="md:col-span-5 bg-primary/20 p-10 rounded-[2.5rem] border border-primary/20 space-y-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10"></div>
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-2xl font-bold text-on-surface leading-tight">AI is not a module. It's the foundation.</h4>
              <p className="text-base text-on-surface-variant/80 leading-relaxed font-light">
                Every traditional course adds a "bonus AI module" at the end. That's like teaching someone to drive and adding GPS as an optional extra. At IconsBase, AI is woven into every single skill we teach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokenSystem;
