import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#131313]/70 backdrop-blur-xl w-full sticky top-0 z-50 transition-all duration-300 shadow-[0px_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div>
          <img src="/logo.png" alt="IconsBase" className="h-8 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
        <div className="hidden md:flex items-center gap-10">
          {/* Navigation items removed as requested */}
        </div>
        <div className="flex items-center gap-6">
          <a href="#apply">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-xs tracking-widest uppercase font-bold hover:scale-95 transition-transform duration-200 shadow-lg">Join This Month's Batch</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
