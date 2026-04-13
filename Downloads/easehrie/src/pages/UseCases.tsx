import React from 'react';
import { Rocket, Target, Users, HeartPulse, Leaf, ShoppingCart, Factory, Landmark } from 'lucide-react';

const industries = [
  {
    icon: Rocket,
    title: "SaaS & Tech",
    description: "Scalable hiring for developers and technical roles in fast-paced environments.",
    color: "blue"
  },
  {
    icon: Target,
    title: "Marketing",
    description: "Attracting creative talent and marketing experts to grow your brand.",
    color: "purple"
  },
  {
    icon: Users,
    title: "Staffing Agencies",
    description: "Managing multiple clients and large candidate pools with total efficiency.",
    color: "emerald"
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Finding qualified medical professionals and administrative staff.",
    color: "rose"
  },
  {
    icon: Leaf,
    title: "Green Energy",
    description: "Powering the future by connecting engineers and renewable specialists.",
    color: "lime"
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Fast-track hiring for retail staff and frontline service teams.",
    color: "orange"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Specialized roles for supply chain, logistics, and plant operations.",
    color: "amber"
  },
  {
    icon: Landmark,
    title: "Fintech",
    description: "Secure and compliant hiring for the banking and financial sector.",
    color: "indigo"
  }
];

const UseCases: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            Hiring Built For <span className="text-emerald-600 italic">Every Industry</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Whether you're a lean startup or a global enterprise, EaseHire provides vertical-specific features tailored to your unique recruitment workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <div 
              key={item.title}
              className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 border border-transparent hover:border-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3.5rem] bg-slate-900 text-white flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-black mb-6">Why Choose EaseHire?</h2>
            <div className="space-y-6">
              {[
                "Accelerate Time-to-Hire by 40%",
                "Reduce Recruitment Costs significantly",
                "Enhance Candidate Experience with automated updates",
                "Data-driven decisions with real-time analytics"
              ].map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#b8e831]" />
                  <span className="text-lg text-slate-300 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[80px] opacity-20" />
              <button className="relative bg-[#b8e831] text-emerald-950 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-lime-300/20">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
