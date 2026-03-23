import React from 'react';

const RealProblem = () => {
  return (
    <section className="py-32 px-8 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#c8a96a]"></div>
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-[#3c475b] font-bold">The Real Problem</span>
          </div>
          
          <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-[#1c1c1c] mb-12">
            The internet taught you <br/>
            <span className="text-[#c8a96a] italic">marketing theory.</span> <br/>
            The market wants <br/>
            <span className="text-[#3c475b] italic">execution.</span>
          </h2>
          
          <div className="space-y-6 max-w-2xl text-[#3c475b] text-lg md:text-xl font-normal leading-relaxed">
            <p>
              There are 2 million people in India calling themselves "digital marketers" right now. 
              Most of them can't run a profitable campaign without a YouTube tutorial open in another tab.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/5 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#f0f0f0] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] text-[#3c475b]">sentiment_dissatisfied</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl font-bold text-[#1c1c1c] leading-tight">You finished 4 courses. Still no clients.</h4>
              <p className="text-sm text-[#3c475b] leading-relaxed">
                Certificates don't pay rent. Every course gives you theory. None of them put you in front of real campaigns with real stakes.
              </p>
            </div>
          </div>

          {/* Card 2 - Dark */}
          <div className="bg-[#1c1e26] p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center relative z-10">
              <span className="material-symbols-outlined text-[28px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div className="space-y-4 relative z-10">
              <h4 className="font-headline text-xl font-bold text-white leading-tight">AI is eating the jobs you were training for.</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Basic content writing, ad setup, and reporting are being automated. The only safe position is the one that uses AI, not the one AI replaces.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/5 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#f0f0f0] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] text-[#3c475b]">payments</span>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl font-bold text-[#1c1c1c] leading-tight">₹5,000 courses can't get you ₹50,000 salaries.</h4>
              <p className="text-sm text-[#3c475b] leading-relaxed">
                Cheap training attracts cheap outcomes. The market can tell the difference between someone who learned for ₹999 and someone who invested in real skill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealProblem;
