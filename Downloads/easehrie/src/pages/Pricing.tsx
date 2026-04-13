import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/mo",
    description: "Ideal for small teams and startups starting their hiring journey.",
    features: [
      "3 Active Job Posts",
      "Unlimited Team Members",
      "Standard Hiring Essentials",
      "Email Support",
      "Basic Analytics"
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Growth",
    price: "₹11,999",
    period: "/mo",
    description: "Perfect for growing companies with more frequent hiring needs.",
    features: [
      "10 Active Job Posts",
      "Screening Questions",
      "Customizable Pipelines",
      "Team @Mentions",
      "Priority Support"
    ],
    cta: "Best Value",
    highlight: true
  },
  {
    name: "Pro",
    price: "₹19,999",
    period: "/mo",
    description: "A comprehensive solution for organizations with large-scale hiring goals.",
    features: [
      "Unlimited Job Posts",
      "Video Questionnaires",
      "Interview Scorecards",
      "Automated Stage Actions",
      "Dedicated Account Manager"
    ],
    cta: "Scale Now",
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Plans That Scale With <span className="text-emerald-600">Your Growth</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Start your 15-day risk-free trial today. No credit card required. Experience the ultimate recruitment solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white p-8 rounded-[2.5rem] shadow-xl border ${plan.highlight ? 'border-emerald-500 ring-4 ring-emerald-500/10' : 'border-slate-100'} flex flex-col transition-all hover:scale-[1.02]`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-bold">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-emerald-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none grid-pattern"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">Need a Custom Enterprise Solution?</h2>
          <p className="text-emerald-100/80 mb-8 max-w-2xl mx-auto text-lg relative z-10">
            For large organizations requiring custom integrations, security features, and dedicated support.
          </p>
          <button className="bg-[#b8e831] text-emerald-950 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all relative z-10">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
