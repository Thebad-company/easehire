import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[72px]">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src="/oxxy_logo.png" alt="Oxxy Logo" className="h-10 w-auto" />
        </a>

        <a
          href="#signup"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.97]"
        >
          Start Free Trial
        </a>
      </div>
    </header>
  );
}
