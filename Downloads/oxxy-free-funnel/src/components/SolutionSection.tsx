import {
  BarChart3,
  ShieldCheck,
  Wallet,
  Stethoscope,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: BarChart3,
    title: 'Compare prices instantly',
    description:
      'See real-time prices from verified labs and clinics near you. No guessing, no surprises.',
    color: 'teal',
  },
  {
    icon: ShieldCheck,
    title: 'Verified healthcare network',
    description:
      'Every provider on Oxxy is quality-checked and reviewed. Your health, your trust.',
    color: 'cyan',
  },
  {
    icon: Wallet,
    title: 'Save on every transaction',
    description:
      'Average users save 40-60% on tests and consultations. The savings add up fast.',
    color: 'emerald',
  },
  {
    icon: Stethoscope,
    title: 'Smart health guidance',
    description:
      'Get personalized recommendations so you always make the smartest healthcare decisions.',
    color: 'sky',
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconColor: string; border: string }> = {
  teal: {
    bg: 'group-hover:bg-teal-50',
    iconBg: 'bg-teal-50 group-hover:bg-teal-100',
    iconColor: 'text-teal-600',
    border: 'hover:border-teal-200',
  },
  cyan: {
    bg: 'group-hover:bg-cyan-50',
    iconBg: 'bg-cyan-50 group-hover:bg-cyan-100',
    iconColor: 'text-cyan-600',
    border: 'hover:border-cyan-200',
  },
  emerald: {
    bg: 'group-hover:bg-emerald-50',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
    border: 'hover:border-emerald-200',
  },
  sky: {
    bg: 'group-hover:bg-sky-50',
    iconBg: 'bg-sky-50 group-hover:bg-sky-100',
    iconColor: 'text-sky-600',
    border: 'hover:border-sky-200',
  },
};

export default function SolutionSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            The solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            How Oxxy saves you money
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            One platform that gives you everything you need to make smarter,
            cheaper healthcare decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className={`group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-lg ${colors.border} transition-all duration-500 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5 transition-colors`}
                >
                  <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
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
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-[0.97]"
          >
            Start Saving Today
          </a>
        </div>
      </div>
    </section>
  );
}
