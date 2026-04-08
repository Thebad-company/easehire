

const links = {
  Product: ['Features', 'Pricing', 'How It Works', 'FAQ'],
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <img src="/oxxy_logo.png" alt="Oxxy Logo" className="h-12 w-auto" />
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Making healthcare affordable for everyone. Compare, save, and
              take control of your health expenses.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-4">
          <p className="text-xs text-slate-500 order-3 sm:order-1">
            &copy; {new Date().getFullYear()} Oxxy Health Technologies. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-3 order-1 sm:order-2">

            <div className="flex items-center gap-6 bg-slate-800/50 px-5 py-3 rounded-2xl border border-slate-700/50">
              <a href="https://fabulousmedia.in" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <img src="/sitecredits/fabulous.png" alt="Fabulous Media" className="h-8 w-auto object-contain" />
              </a>
              <div className="w-px h-6 bg-slate-700"></div>
              <a href="https://gocommercially.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <img src="/sitecredits/gocomercially.svg" alt="Go Commercially" className="h-7 w-auto object-contain brightness-0 invert" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-500 order-2 sm:order-3">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
