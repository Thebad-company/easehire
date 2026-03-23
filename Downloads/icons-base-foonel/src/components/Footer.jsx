import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] full-width border-t border-[#4d463a]/20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-12 gap-8 max-w-screen-2xl mx-auto">
        <div><img src="/logo.png" alt="IconsBase" className="h-8 w-auto object-contain opacity-90 brightness-0 invert" /></div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Privacy", "Terms", "Editorial Guidelines", "Support"].map((item) => (
            <a
              key={item}
              className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant opacity-60">
          © 2026 IconsBase. The Digital Curator.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
