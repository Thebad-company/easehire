import React, { useState } from 'react';

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    { q: "Do I need prior experience in marketing or tech?", a: "No. The program is designed to build your foundation from scratch. We focus on first principles and practical execution, making it suitable for freshers and career switchers alike." },
    { q: "How is this different from YouTube or cheap online courses?", a: "YouTube teaches 'what'. Cheap courses teach 'how to use the tool'. IconsBase teaches 'execution with real stakes'. You work on live ad accounts with real budgets and get 1:1 specialist feedback." },
    { q: "What if I don't get a job after the program?", a: "Our placement cell works with you until you are hired, provided you complete all 12 modules and the capstone project. We have a 94% placement rate for a reason." },
    { q: "How much does the full program cost?", a: "The IconsBase System is a premium intensive. Pricing depends on the cohort. Download the Starter Kit to see the roadmap and tuition details for the next batch." },
    { q: "Is this an online or offline program?", a: "It is a hybrid-style online program. Live group sessions, 1:1 mentorship calls, and an active discord community of execution specialists." },
    { q: "Will I actually work on real campaigns with real budgets?", a: "Yes. Every student is assigned a live project budget as part of their curriculum. You aren't just simulating; you are spending and optimizing in real-time." }
  ];

  return (
    <section className="py-32 px-8 bg-[#f5f2eb]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-24">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-primary"></div>
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-on-surface-variant font-bold">FAQ</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-headline text-5xl font-bold text-[#1c1c1c]">
            Honest answers to <br/>
            <span className="text-primary italic">real questions.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light opacity-70">No marketing fluff. Just straight answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/5 last:border-0 overflow-hidden">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
              >
                <span className="text-lg font-headline font-bold text-[#1c1c1c] group-hover:text-primary">{faq.q}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${active === i ? 'rotate-45 text-primary' : 'text-on-surface-variant/40'}`}>add</span>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${active === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <p className="text-on-surface-variant leading-relaxed opacity-80 font-light">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
