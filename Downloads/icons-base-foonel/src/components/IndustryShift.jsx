import React from 'react';

const IndustryShift = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#f2f1eb] rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block bg-[#e5e1d5] border border-black/5 px-4 py-2 rounded-full">
              <span className="font-label uppercase tracking-widest text-[10px] text-[#3c475b] font-bold">Industry Shift</span>
            </div>
            
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1c1c1c]">
              The ₹6,000 crore AI marketing industry has a talent problem.
            </h2>
            
            <p className="text-[#3c475b] text-lg font-light leading-relaxed max-w-xl">
              Every brand, agency, and startup in India is scrambling to find people who can execute AI-driven campaigns. The skills gap is real. The opportunity is bigger than ever.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-white p-8 rounded-2xl border border-black/5 hover:translate-y-[-5px] transition-transform duration-300 shadow-sm flex flex-col justify-center">
              <div className="text-3xl font-headline font-bold text-primary mb-2">68%</div>
              <p className="text-[11px] text-[#3c475b]/70 leading-relaxed">
                of marketing roles now require AI proficiency
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-black/5 hover:translate-y-[-5px] transition-transform duration-300 shadow-sm flex flex-col justify-center">
              <div className="text-3xl font-headline font-bold text-primary mb-2">3x</div>
              <p className="text-[11px] text-[#3c475b]/70 leading-relaxed">
                higher salary for AI-skilled marketers vs. traditional
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-black/5 hover:translate-y-[-5px] transition-transform duration-300 shadow-sm flex flex-col justify-center">
              <div className="text-3xl font-headline font-bold text-primary mb-2">2.4M</div>
              <p className="text-[11px] text-[#3c475b]/70 leading-relaxed">
                unfilled AI marketing roles in India by 2026
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-black/5 hover:translate-y-[-5px] transition-transform duration-300 shadow-sm flex flex-col justify-center">
              <div className="text-3xl font-headline font-bold text-primary mb-2">₹8L+</div>
              <p className="text-[11px] text-[#3c475b]/70 leading-relaxed">
                median package for AI marketers with 1yr experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShift;
