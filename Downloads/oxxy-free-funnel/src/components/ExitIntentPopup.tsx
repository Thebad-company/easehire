import { useState, useEffect, useCallback } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (dismissed) return;
      if (e.clientY <= 0) {
        setShow(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('oxxy-exit-popup');
    if (alreadyShown) {
      setDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const close = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('oxxy-exit-popup', '1');
    document.removeEventListener('mouseleave', handleMouseLeave);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-400/25">
            <Gift className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
            Wait — don't miss this!
          </h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Get <span className="font-bold text-emerald-600">50% off</span>{' '}
            your first month if you start your free trial today. This offer
            won't last.
          </p>

          <a
            href="#signup"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/25 active:scale-[0.97] group mb-3"
          >
            Claim 50% Off
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={close}
            className="text-sm text-slate-400 hover:text-slate-500 transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}
