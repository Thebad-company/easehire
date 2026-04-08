import { UserPlus, Search, BadgeCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign up free',
    description: 'Create your account in seconds. No credit card, no strings attached.',
    number: 1,
  },
  {
    icon: Search,
    title: 'Search & compare',
    description: 'Find tests, doctors, and medicines. Compare prices across verified providers.',
    number: 2,
  },
  {
    icon: BadgeCheck,
    title: 'Save instantly',
    description: 'Book at the best price and save 40-60% on average. It\'s that simple.',
    number: 3,
  },
];

export default function HowItWorksSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="how-it-works" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Saving money in 3 simple steps
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            No complicated setup. No learning curve. Just real savings from day one.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[72px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`text-center transition-all duration-500 ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-[88px] h-[88px] rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#signup"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-[0.97]"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}
