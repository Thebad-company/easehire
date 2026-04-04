function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav className="section-shell">
        <div className="nav-shell flex items-center justify-between gap-3 rounded-[24px] px-4 py-3 sm:px-6 sm:py-4">
          <a className="min-w-0 flex items-center gap-3" href="#hero" aria-label="IconsBase home">
            <img src="/logo.png" alt="IconsBase" className="h-8 w-auto sm:h-12" />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#program" className="hidden sm:inline-flex cta-secondary border-[#0b1630]/10 bg-white/72">
              Explore Program
            </a>
            <a href="#apply" className="cta-primary px-4 py-3 sm:px-6">
              <span className="sm:hidden">Apply</span>
              <span className="hidden sm:inline">Apply Now</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
