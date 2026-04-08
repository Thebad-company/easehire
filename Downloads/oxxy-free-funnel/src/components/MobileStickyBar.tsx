import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href="#signup"
          className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-full text-sm transition-all active:scale-[0.97]"
        >
          Start Free Trial
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
