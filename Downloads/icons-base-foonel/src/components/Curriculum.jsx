import React from 'react';

const Curriculum = () => {
  const modules = [
    {
      icon: "smart_toy",
      title: "AI Tools stack",
      desc: "Mastering Claude, GPT-4, and Midjourney for creative at scale."
    },
    {
      icon: "ads_click",
      title: "Paid Media",
      desc: "Meta, Google, and TikTok ads from setup to optimization."
    },
    {
      icon: "rocket_launch",
      title: "Live Campaigns",
      desc: "Running actual budgets on live projects for real clients."
    },
    {
      icon: "work",
      title: "Freelance OS",
      desc: "The business of marketing: Pricing, Proposals, and High-ticket sales."
    }
  ];

  return (
    <section className="py-32 px-8 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold mb-4 text-[#1c1c1c]">A Curriculum Designed for the 1%.</h2>
            <p className="text-[#666]">We don't teach "social media posting." We teach digital engineering.</p>
          </div>
          <button className="text-primary font-label text-xs tracking-widest uppercase flex items-center gap-2 group transition-all hover:text-primary-container">
            View Full Curriculum <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:bg-surface-container transition-all duration-300 hover:border-primary/20 group">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{module.icon}</span>
              </div>
              <h4 className="font-bold mb-2 text-on-surface uppercase tracking-wide text-sm">{module.title}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{module.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
