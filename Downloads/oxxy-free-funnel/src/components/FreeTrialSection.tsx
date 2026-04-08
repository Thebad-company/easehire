import { UserPlus, Search, PiggyBank, ThumbsUp, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Start your free trial',
    description: 'Sign up in 30 seconds. No credit card, no commitment.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Book a test or doctor',
    description: 'Search and compare prices from verified providers near you.',
  },
  {
    icon: PiggyBank,
    number: '03',
    title: 'Save real money',
    description: 'See the savings instantly. Most users save 40-60% on their first booking.',
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'Continue with confidence',
    description: 'Love the savings? Keep going. Not convinced? Walk away free.',
  },
];

export default function FreeTrialSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/60 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Free trial
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Try Oxxy. Save once.{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              You'll never go back.
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We're so confident you'll love the savings that we give you full
            access free. Use it once and it proves itself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative transition-all duration-500 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm h-full hover:shadow-lg hover:border-teal-200/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-widest">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-teal-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#signup"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-[0.97] group"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="text-sm text-slate-400 mt-3">
            Full access. No credit card. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
