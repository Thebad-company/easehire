import { useEffect, useState } from 'react';
import { ArrowRight, Shield, Clock, CreditCard } from 'lucide-react';

const savingsItems = [
  { service: 'Blood Test (CBC)', oldPrice: 1500, newPrice: 600 },
  { service: 'Doctor Consultation', oldPrice: 800, newPrice: 350 },
  { service: 'Monthly Medicines', oldPrice: 1200, newPrice: 680 },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return value;
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const totalOld = savingsItems.reduce((s, i) => s + i.oldPrice, 0);
  const totalNew = savingsItems.reduce((s, i) => s + i.newPrice, 0);
  const totalSaved = totalOld - totalNew;
  const animatedSavings = useCountUp(totalSaved, loaded);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-100/60 to-cyan-100/40 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-100/50 to-teal-100/30 blur-3xl animate-pulse-soft stagger-3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-teal-50/40 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/60 text-teal-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Trusted by 1,000+ users saving every month
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance">
              Most people overpay for healthcare.{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                You don't have to.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-xl">
              Try Oxxy free and unlock real savings on tests, medicines, and
              doctor visits — before you commit.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <a
                href="#signup"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-[0.97] group"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-slate-50"
              >
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                100% secure
              </span>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/30 to-cyan-200/20 rounded-3xl blur-xl" />

              <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
                  <p className="text-white font-semibold text-sm tracking-wide uppercase">
                    Your Healthcare Savings
                  </p>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">
                    <span>Service</span>
                    <div className="flex gap-8">
                      <span>Regular</span>
                      <span className="text-teal-600">Oxxy</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {savingsItems.map((item, i) => (
                      <div
                        key={item.service}
                        className={`flex items-center justify-between p-3 rounded-xl bg-slate-50/80 transition-all duration-500 ${
                          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ transitionDelay: `${400 + i * 150}ms` }}
                      >
                        <span className="text-sm font-medium text-slate-700">
                          {item.service}
                        </span>
                        <div className="flex items-center gap-6">
                          <span className="text-sm text-slate-400 line-through">
                            {'\u20B9'}{item.oldPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-sm font-bold text-emerald-600 min-w-[56px] text-right">
                            {'\u20B9'}{item.newPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-dashed border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900">
                        Monthly Total
                      </span>
                      <div className="flex items-center gap-6">
                        <span className="text-sm text-slate-400 line-through">
                          {'\u20B9'}{totalOld.toLocaleString('en-IN')}
                        </span>
                        <span className="text-base font-bold text-emerald-600">
                          {'\u20B9'}{totalNew.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 rounded-xl p-4 text-center">
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
                      You save every month
                    </p>
                    <p className="text-3xl font-extrabold text-emerald-600">
                      {'\u20B9'}{animatedSavings.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-3 -right-3 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-float"
              >
                Save 53%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
