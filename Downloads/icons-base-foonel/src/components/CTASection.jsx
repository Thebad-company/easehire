import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-[#f5f2eb]">
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          {/* Text Side */}
          <div className="flex-1 space-y-10">
            <div className="inline-block bg-[#e5e1d5] border border-black/5 px-4 py-2 rounded-full">
              <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Free Download</span>
            </div>
            
            <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight text-[#1c1c1c]">
              The AI Marketing <br/>
              <span className="text-primary italic">Starter Kit</span> <br/>
              — completely free.
            </h2>
            
            <p className="text-on-surface-variant text-lg font-light leading-relaxed max-w-xl opacity-80">
              Everything you need to understand AI marketing and take your first real steps — no fluff, no upsell, no "10 steps to success" nonsense. Just practical tools, templates, and frameworks.
            </p>

            <ul className="space-y-4">
              {[
                '47-page AI Marketing Playbook (PDF)',
                '12 AI tools with step-by-step setup guides',
                '5 proven campaign templates (Meta + Google)',
                'AI Prompt Library for content & ads (200+ prompts)',
                'Freelance rate calculator spreadsheet',
                'Checklist: How to get your first 3 clients'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-label text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white/50 p-6 rounded-2xl border border-black/5 flex items-center gap-4 max-w-md">
              <span className="material-symbols-outlined text-on-surface-variant opacity-40">lock</span>
              <p className="text-[10px] text-on-surface-variant/70 italic leading-relaxed">
                Zero spam. Your details are only used to send you the kit and occasional program updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#1c1e26] flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-[#1c1c1c]">Download Free Starter Kit</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Instant Delivery • No credit card needed</p>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#999] ml-4">Your Name *</label>
                    <input 
                      className="w-full bg-[#f8f8f8] border border-black/5 rounded-2xl px-6 py-4 text-[#1c1c1c] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#bbb]" 
                      placeholder="Arjun Sharma" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#999] ml-4">Email Address *</label>
                    <input 
                      className="w-full bg-[#f8f8f8] border border-black/5 rounded-2xl px-6 py-4 text-[#1c1c1c] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#bbb]" 
                      placeholder="arjun@email.com" 
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#999] ml-4">WhatsApp Number *</label>
                    <input 
                      className="w-full bg-[#f8f8f8] border border-black/5 rounded-2xl px-6 py-4 text-[#1c1c1c] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#bbb]" 
                      placeholder="+91 98765 43210" 
                      type="tel"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#999] ml-4">What's your current goal?</label>
                    <select className="w-full bg-[#f8f8f8] border border-black/5 rounded-2xl px-6 py-4 text-[#1c1c1c] focus:border-primary outline-none cursor-pointer appearance-none">
                      <option>Select your goal</option>
                      <option>Land my first marketing job</option>
                      <option>Transition into AI Marketing</option>
                      <option>Scale my freelance business</option>
                      <option>Upskill my current team</option>
                    </select>
                  </div>

                  <button className="w-full premium-gradient text-on-primary font-bold py-5 rounded-2xl text-xs tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(229,196,131,0.2)] mt-4">
                    Send Me the Free Kit →
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 pt-4">
                  <span className="material-symbols-outlined text-[14px] text-green-600">verified_user</span>
                  <p className="text-[9px] text-[#999] font-medium">We never share your information. Ever.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll Final Section (Updated according to theme) */}
      <section className="py-40 px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl space-y-12 relative z-10">
          <h2 className="font-headline text-5xl md:text-8xl font-bold leading-[1.1] text-[#1c1c1c]">
            Stop watching others <br/>
            <span className="text-primary italic">get the jobs</span> you want.
          </h2>
          <p className="text-on-surface-variant text-xl font-light max-w-2xl mx-auto opacity-80 leading-relaxed">
            Join the 1% who are building the future of digital commerce. The system is ready. Are you?
          </p>
          <div className="pt-10">
            <a href="#apply">
              <button className="bg-[#1c1e26] text-white px-12 py-7 rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-primary transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 group">
                Join This Month's Batch
                <span className="material-symbols-outlined ml-3 inline-block group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </a>
          </div>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
      </section>
    </div>
  );
};

export default CTASection;
