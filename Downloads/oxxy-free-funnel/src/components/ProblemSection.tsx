import { AlertTriangle, Search, HelpCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const problems = [
  {
    icon: AlertTriangle,
    headline: 'You never know if you\'re overpaying',
    description:
      'Healthcare prices are a black box. The same test can cost wildly different amounts depending on where you go.',
    stat: '73%',
    statLabel: 'of patients overpay',
  },
  {
    icon: Search,
    headline: 'Same test, 3x different prices',
    description:
      'Labs and clinics charge whatever they want. Without comparison, you\'re always guessing.',
    stat: '3x',
    statLabel: 'price variation',
  },
  {
    icon: HelpCircle,
    headline: 'No guidance, just guesswork',
    description:
      'You deserve clear answers about your healthcare costs, not confusing bills and hidden charges.',
    stat: '89%',
    statLabel: 'want price transparency',
  },
];

export default function ProblemSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 sm:py-28 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Healthcare costs are broken
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            You work hard for your money. You shouldn't have to overpay every
            time you visit a doctor or get a test done.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.headline}
                className={`group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-500 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                  <Icon className="w-6 h-6 text-rose-500" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.headline}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-2xl font-extrabold text-rose-500">
                    {item.stat}
                  </span>
                  <span className="text-sm text-slate-400 ml-2">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
