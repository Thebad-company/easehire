import React, { useState } from 'react';
import { Mail, MessageCircle, ChevronDown, Rocket, Users, Globe, Settings } from 'lucide-react';

const supportCategories = [
  { icon: Rocket, title: "Getting Started", desc: "Setting up your company profile and posting your first job." },
  { icon: Users, title: "Candidate Management", desc: "How to screen, interview, and manage your applicant pool." },
  { icon: Globe, title: "Job Postings", desc: "Optimizing your job ads for maximum reach across 15+ portals." },
  { icon: Settings, title: "Account & Settings", desc: "Managing team permissions, billing, and system preferences." }
];

const faqs = [
  {
    q: "How does the 15-day risk-free trial work?",
    a: "You get full access to all Growth plan features for 15 days. No credit card is required to start, and you can upgrade anytime during or after the trial."
  },
  {
    q: "Can I post jobs to multiple sites simultaneously?",
    a: "Yes! EaseHire allows you to advertise your job openings across 15+ major and specialized job portals with a single click."
  },
  {
    q: "Is the platform mobile-responsive for my team?",
    a: "Absolutely. The recruiter dashboard and candidate management tools are 100% cloud-based and optimized for mobile browsers, allowing you to hire on the go."
  },
  {
    q: "What is included in the dedicated support?",
    a: "Pro plan members receive a dedicated account manager, screen-share onboarding, and priority email/chat support with sub-2 hour response times."
  }
];

const Support: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-40 pb-32 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            EaseHire Support Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            We're Here To <span className="text-emerald-600">Help You Hire.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Search our knowledge base or reach out to our team of experts for personalized assistance with your recruitment workflow.
          </p>
        </div>

        {/* Search Bar Placeholder */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search for articles, guides, and FAQs..." 
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] px-10 py-6 text-xl text-slate-900 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-slate-200"
            />
            <button className="absolute right-4 top-4 bottom-4 bg-emerald-600 text-white px-8 rounded-full font-black text-lg hover:bg-emerald-700 transition-all">
              Search
            </button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {supportCategories.map((cat) => (
            <div key={cat.title} className="p-8 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all border border-transparent hover:border-slate-100 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                <cat.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-3xl border border-slate-100 bg-slate-50 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-8 pt-0 text-slate-600 leading-relaxed font-medium text-lg">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-4">Still need assistance?</h2>
            <p className="text-slate-400 text-lg font-medium">Our help desk is available Monday to Friday from 9AM to 6PM IST.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="mailto:hello@easehire.org" className="flex items-center gap-4 bg-white/10 px-8 py-5 rounded-3xl hover:bg-white/20 transition-all border border-white/10 group">
              <Mail className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs font-black uppercase text-emerald-400 opacity-60">Email Support</div>
                <div className="font-bold">hello@easehire.org</div>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-[#b8e831] px-8 py-5 rounded-3xl hover:scale-105 transition-all group cursor-pointer">
              <MessageCircle className="w-6 h-6 text-emerald-950 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs font-black uppercase text-emerald-950 opacity-60">Live Chat</div>
                <div className="font-bold text-emerald-950">Start Chat Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
