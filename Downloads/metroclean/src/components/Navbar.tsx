import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { mockData } from "../data/mockData";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const { nav } = mockData;

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tight text-primary" onClick={() => setIsOpen(false)}>
          {nav.logo}
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.href}
              className={({ isActive }) => cn(
                "font-body font-semibold text-sm tracking-tight transition-colors py-1",
                isActive ? "text-secondary border-b-2 border-secondary" : "text-slate-600 hover:text-slate-900"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col gap-4 pb-4">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "font-body font-semibold text-base px-2 py-2 rounded-lg transition-colors",
                    isActive ? "bg-secondary/10 text-secondary" : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
