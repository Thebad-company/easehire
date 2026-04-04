const footerLinks = [
  { label: 'Program', href: '#program' },
  { label: 'Career Paths', href: '#curriculum' },
  { label: 'Scholarship', href: '#scholarship' },
  { label: 'Apply', href: '#apply' },
];

function Footer() {
  return (
    <footer className="mt-12 border-t border-[#0b1630]/10 bg-[#f5f0e7] sm:mt-20">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="mx-auto lg:mx-0">
            <img src="/logo.png" alt="IconsBase" className="h-12 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-7 text-[#60708b]">
              AI-first digital marketing learning with live cohorts, mentor-led guidance, scholarships, and career-focused support.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-[#51617a]">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-[#0b1630]">
                {link.label}
              </a>
            ))}
          </div>

          <a href="#apply" className="cta-primary w-full justify-center sm:w-auto">
            Apply Now
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[#0b1630]/10 pt-6 text-sm text-[#60708b] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 IconsBase. The AI Institute.</p>
          <p>AI-first digital marketing learning with mentor-led guidance and career-focused support.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
