import React from 'react';
import { footer } from '../data/mockData';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white px-8 pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-24">
          {/* Brand Info */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <Link to="/">
                <img src={footer.logo} alt="EaseHire" className="h-10 w-auto" />
              </Link>
              <div className="text-2xl font-black text-slate-900 tracking-tighter">{footer.name}</div>
            </div>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-12">
              {footer.description}
            </p>
            <div className="flex items-center gap-2 max-w-md">
               <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-slate-50 border-none rounded-xl px-6 py-4 text-slate-900 font-medium focus:ring-2 focus:ring-[#b8e831] transition-all"
               />
               <button className="bg-[#b8e831] text-white px-6 py-4 rounded-xl font-black transition-all hover:scale-105 active:scale-95">
                  Subscribe
               </button>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footer.columns.map((col, i) => (
              <div key={i}>
                <h5 className="text-slate-900 font-black text-lg mb-8 tracking-tight">{col.title}</h5>
                <div className="flex flex-col gap-4">
                  {col.links.map((link, j) => (
                    <Link key={j} to={link.href} className="text-slate-400 hover:text-[#005236] font-bold transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-slate-300 font-bold text-sm tracking-widest">{footer.copyright}</p>
           <div className="flex gap-10">
              <a href="https://twitter.com/easehire" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-900 font-bold text-sm transition-colors">Twitter</a>
              <a href="https://linkedin.com/company/easehire" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-900 font-bold text-sm transition-colors">LinkedIn</a>
              <a href="https://instagram.com/easehire" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-900 font-bold text-sm transition-colors">Instagram</a>
           </div>
        </div>
      </div>
    </footer>
  );
};
