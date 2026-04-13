import React, { useState } from 'react';
import { navigation } from '../data/mockData';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 rounded-[2rem] w-[90%] max-w-6xl bg-white/70 backdrop-blur-xl shadow-xl z-50 flex flex-col border border-white/20 transition-all duration-300 ${isOpen ? 'py-6 px-6' : 'py-2.5 px-8'}`}>
      <div className="flex justify-between items-center w-full">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={navigation.logo} alt="EaseHire" className="h-8 w-auto object-contain" />
          {navigation.name && (
            <span className="text-xl font-black text-emerald-800 tracking-tight hidden sm:inline">
              {navigation.name}
            </span>
          )}
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden lg:flex items-center">
          {navigation.links.map((link, i) => (
            <React.Fragment key={link.label}>
              <div 
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1">
                  <Link
                    className={`text-slate-900 font-bold text-base px-3.5 hover:text-emerald-600 transition-colors flex items-center gap-1 ${location.pathname === link.href ? 'text-emerald-600' : ''}`}
                    to={link.href}
                  >
                    {link.label}
                    {link.children && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </Link>
                </div>
                
                {location.pathname === link.href && !link.children && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#b8e831] rounded-full"></div>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-slate-700 font-bold text-sm hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {i < navigation.links.length - 1 && (
                <div className="w-[1px] h-6 bg-slate-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Actions - Desktop & Minimal Mobile */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:block bg-[#b8e831] text-white px-6 py-2 rounded-xl font-bold text-base shadow-lg shadow-lime-300/40 hover:scale-105 transition-all">
            {navigation.actions.getStarted}
          </button>
          <button className="sm:hidden bg-[#b8e831] text-white px-4 py-1.5 rounded-lg font-bold text-xs shadow-lg shadow-lime-300/40">
            Start
          </button>
          
          <button className="hidden sm:block border-2 border-[#b8e831] text-[#b8e831] px-6 py-2 rounded-xl font-bold text-base hover:bg-lime-50 transition-all">
            {navigation.actions.signIn}
          </button>

          {/* Hamburger Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links Overlay */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6">
          {navigation.links.map((link) => (
            <div key={link.label}>
              <div 
                className={`flex items-center justify-between text-lg font-bold text-slate-800 px-4 py-2 hover:bg-emerald-50 rounded-xl transition-all cursor-pointer ${location.pathname === link.href ? 'text-emerald-600 bg-emerald-50' : ''}`}
                onClick={() => link.children ? setActiveDropdown(activeDropdown === link.label ? null : link.label) : (setIsOpen(false), window.location.href = link.href)}
              >
                {link.label}
                {link.children && <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
              </div>
              
              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-slate-50 rounded-xl mt-2 mx-2"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-8 py-3 text-slate-600 font-bold text-base hover:text-emerald-600 border-b border-slate-100 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <button className="sm:hidden border-2 border-[#b8e831] text-[#b8e831] px-6 py-3 rounded-xl font-bold text-base">
              {navigation.actions.signIn}
            </button>
            <button className="sm:hidden bg-[#b8e831] text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg shadow-lime-300/40">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
