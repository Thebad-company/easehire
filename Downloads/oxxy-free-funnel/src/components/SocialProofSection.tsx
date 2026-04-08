import { Star, Users, TrendingUp, Building2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { icon: Users, value: '1,000+', label: 'Active users' },
  { icon: TrendingUp, value: '\u20B92 Cr+', label: 'Total saved' },
  { icon: Building2, value: '500+', label: 'Verified partners' },
];

const testimonials = [
  {
    quote:
      'I saved \u20B91,200 on a single blood test. Oxxy paid for itself the very first time I used it.',
    name: 'Priya Sharma',
    role: 'Working professional',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    saved: '\u20B91,200',
    rating: 5,
  },
  {
    quote:
      'My family spends way less on medicines now. The price comparison feature is genuinely life-changing.',
    name: 'Rahul Mehta',
    role: 'Father of two',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    saved: '\u20B93,400/mo',
    rating: 5,
  },
  {
    quote:
      'I was skeptical at first, but the free trial made it easy to try. Now I recommend Oxxy to everyone.',
    name: 'Ananya Patel',
    role: 'Freelance designer',
    avatar:
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    saved: '\u20B9800',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export default function SocialProofSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 sm:py-28 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Social proof
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Real people. Real savings.
          </h2>
          <p className="text-lg text-slate-500">
            Don't take our word for it — hear from users who tried and stayed.
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-3 gap-6 lg:gap-10 mb-14 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <Icon className="w-6 h-6 text-teal-500 mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <StarRating count={t.rating} />

              <p className="text-slate-700 leading-relaxed mt-4 mb-6 text-[15px]">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
                <div className="bg-emerald-50 text-emerald-600 text-xs font-bold px-2.5 py-1 rounded-full">
                  Saved {t.saved}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
