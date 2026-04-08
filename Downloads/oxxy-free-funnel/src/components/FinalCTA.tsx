import { ArrowRight, Shield, CreditCard } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function FinalCTA() {
  const { ref, isInView } = useInView();

  return (
    <section id="signup" className="relative py-20 sm:py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-600 to-cyan-600" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 text-balance">
            You're already paying for healthcare.{' '}
            <span className="text-teal-200">Why pay more?</span>
          </h2>

          <p className="text-lg text-teal-100 leading-relaxed mb-10 max-w-xl mx-auto">
            Join thousands of smart users who stopped overpaying. Try Oxxy free
            — one booking is all it takes to see the difference.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your interest! We will contact you shortly.');
            }}
            className="max-w-md mx-auto mb-10 bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-[2rem] border border-white/20 shadow-2xl"
          >
            <div className="flex flex-col gap-4 text-left">
              <div>
                <label className="block text-sm font-medium text-teal-100 mb-1.5 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 rounded-xl text-slate-900 bg-white/95 border-2 border-transparent focus:outline-none focus:border-teal-300 focus:ring-4 focus:ring-teal-300/20 transition-all font-medium placeholder-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-100 mb-1.5 ml-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-5 py-4 rounded-xl text-slate-900 bg-white/95 border-2 border-transparent focus:outline-none focus:border-teal-300 focus:ring-4 focus:ring-teal-300/20 transition-all font-medium placeholder-slate-400"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-3 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-[0.98] group"
              >
                Claim Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-teal-200">
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              Cancel anytime, no questions
            </span>
          </div>

          <p className="text-xs text-teal-300/60 mt-6">
            Limited-time trial access available
          </p>
        </div>
      </div>
    </section>
  );
}
