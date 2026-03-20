import { Link } from "react-router-dom";
import { mockData } from "../data/mockData";

export const Footer = () => {
  const { footer, nav, services, contact } = mockData;

  return (
    <footer className="w-full pt-20 pb-10 px-6 bg-primary text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tight">{nav.logo}</div>
            <p className="text-secondary font-bold text-sm tracking-wide uppercase italic">
              "{footer.tagline}"
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {footer.mission}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-300 hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link to="/#about" className="text-slate-300 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/#services" className="text-slate-300 hover:text-secondary transition-colors text-sm">Services</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-secondary transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-secondary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50">Our Expertise</h4>
            <ul className="space-y-4">
              {services.categories.map((cat, i) => (
                <li key={i}>
                  <Link to="/#services" className="text-slate-300 hover:text-secondary transition-colors text-sm">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">location_on</span>
                <span className="text-slate-300 text-sm leading-relaxed">{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">call</span>
                <a href={`tel:${contact.phones[0]}`} className="text-slate-300 hover:text-secondary transition-colors text-sm">{contact.phones[0]}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">mail</span>
                <a href={`mailto:${contact.emails[0]}`} className="text-slate-300 hover:text-secondary transition-colors text-sm">{contact.emails[0]}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 font-body text-[10px] uppercase tracking-[0.2em]">
            {footer.copyright}
          </p>
          
          <div className="flex items-center gap-6">
            {/* Credit Section */}
            <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-white/30 bg-white/15 shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-300">
              <a
                href="https://fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="FabulousMedia"
              >
                <img
                  src="/sitecredits/fabulous.png"
                  alt="FabulousMedia"
                  className="h-3 w-auto"
                  loading="lazy"
                />
              </a>
              <div className="h-3 w-px bg-white/30 transition-colors duration-300"></div>
              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GoCommercially"
              >
                <img
                  src="/sitecredits/gocomercially.svg"
                  alt="GoCommercially"
                  className="h-3 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
