import Reveal from './Reveal';

const scholarshipGroups = [
  'Applicants from financially weaker sections',
  'Scholarship support for orphaned applicants',
  'Support for applicants with physical disabilities',
  'Immediate family members of martyred defense personnel',
];

const mentorPoints = [
  'Chief mentor Nikhil Sharma guides the learning journey.',
  'The program is shaped by 18+ years of digital marketing experience.',
  'Direct mentor feedback helps students turn ideas into action.',
];

function CTASection() {
  return (
    <section id="scholarship" className="section-shell mt-8 sm:mt-12 xl:max-w-[84rem]">
      <div className="grid gap-5 xl:grid-cols-[1.03fr_0.97fr]">
        <Reveal variant="left" className="panel-dark p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <div className="section-kicker border-white/10 bg-white/5 text-white/72">Scholarship Program</div>
              <h2 className="mt-4 max-w-[14ch] font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Scholarship support for eligible learners.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
                Scholarships are available for learners who need financial support to begin building valuable digital marketing skills.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#apply" className="cta-primary w-full sm:w-auto">
                  Apply for Scholarship
                </a>
                <a
                  href="#apply"
                  className="cta-secondary w-full border-white/12 bg-white/5 text-white hover:border-white/20 hover:bg-white/10 sm:w-auto"
                >
                  Speak to an Advisor
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9db0cb]">Fee reduction range</p>
                <p className="mt-3 font-display text-4xl font-semibold text-white">50%–100%</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/64">
                  Designed to help eligible learners start learning without unnecessary financial pressure.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {scholarshipGroups.map((item, index) => (
                  <Reveal
                    key={item}
                    as="li"
                    delay={120 + index * 70}
                    variant="up"
                    className="interactive-card flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-white/68"
                  >
                    <span className="material-symbols-outlined mt-0.5 text-[#ffd98f]">check_circle</span>
                    <span>{item}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="panel-light overflow-hidden p-3 sm:p-4">
          <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="interactive-media overflow-hidden rounded-[30px] border border-[#d7e2f1] bg-[#dbe5f2] p-2.5 shadow-[0_24px_60px_rgba(11,22,48,0.08)]">
              <img
                src="/mentor.webp"
                alt="Chief mentor Nikhil Sharma"
                className="aspect-[1.05] w-full rounded-[22px] object-cover object-[52%_35%] sm:aspect-[1.14] xl:aspect-[1.2]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#60708b]">Mentor-Led Positioning</p>
              <div className="mt-2 section-kicker">Chief Mentor</div>
              <h3 className="mt-3 font-display text-3xl font-semibold text-[#0b1630] sm:text-[2.35rem]">
                Meet chief mentor Nikhil Sharma.
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-[#60708b]">
                Learn in a mentor-led system built on experience, practical feedback, and clear direction at every stage.
              </p>

              <div className="mt-5 rounded-[24px] bg-[#edf3fb] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#60708b]">Mentor advantages</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#21314e]">
                  {mentorPoints.map((item, index) => (
                    <Reveal key={item} as="li" delay={180 + index * 70} variant="up" className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-[#0b1630]">check_circle</span>
                      <span>{item}</span>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
