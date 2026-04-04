import Reveal from './Reveal';

const highlights = [
  {
    icon: 'auto_awesome',
    title: 'Gen AI-first curriculum',
    description: 'Train with tools like ChatGPT, Midjourney, JasperAI, and modern AI workflows.',
  },
  {
    icon: 'school',
    title: '73+ modules and 25+ certifications',
    description: 'Structured learning designed to cover the stack with certification-ready depth.',
  },
  {
    icon: 'groups',
    title: 'Live sessions and offline cohorts',
    description: 'Practical guidance, accountability, and peer momentum built into the delivery model.',
  },
  {
    icon: 'work',
    title: 'Internship and placement support',
    description: 'Built toward internships, role readiness, and placement-focused outcomes.',
  },
  {
    icon: 'credit_score',
    title: 'Flexible start options',
    description: 'EMI and support options make the program easier to start and sustain.',
  },
];

const snapshotBullets = [
  'Two structured tracks with five role-oriented outcomes',
  'Live-project execution built into the learning flow',
  'Support for students, freelancers, job seekers, and professionals',
];

function IndustryShift() {
  const [leadCard, ...supportCards] = highlights;

  return (
    <section id="program" className="section-shell mt-10 sm:mt-16">
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal variant="left" className="panel-light p-8 sm:p-10 lg:p-12">
          <div className="section-kicker">Program Snapshot</div>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#0b1630] sm:text-4xl">
            AI digital marketing is growing fast, and teams need execution-ready talent.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#52627c]">
            Brands, agencies, and startups are hiring marketers who can combine fundamentals, AI workflows, practical
            execution, and measurable outcomes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {snapshotBullets.map((item, index) => (
              <Reveal key={item} delay={90 + index * 70} variant="up">
                <div className="interactive-card rounded-[22px] border border-[#0b1630]/8 bg-[#f5f8fd] px-5 py-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0b1630] text-white">
                      <span className="material-symbols-outlined icon-hover text-[18px]">check</span>
                    </div>
                    <p className="text-sm leading-7 text-[#21314e]">{item}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={300} variant="up" className="sm:col-span-2">
              <div className="rounded-[26px] bg-[#0b1630] px-6 py-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93a7c4]">Built for momentum</p>
                <p className="mt-3 max-w-lg font-display text-2xl font-semibold">
                  Learn with a system that blends AI tools, live practice, and career support in one path.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal variant="right" delay={70} className="md:col-span-2">
            <article className="panel-dark relative overflow-hidden p-7 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(246,182,60,0.18),_transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_48%)]" />
              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-white">
                    <span className="material-symbols-outlined icon-hover">{leadCard.icon}</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-white sm:text-[2rem]">{leadCard.title}</h3>
                  <p className="mt-3 max-w-xl text-base leading-8 text-white/68">{leadCard.description}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[320px]">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9db0cb]">Tracks</p>
                    <p className="mt-2 font-display text-2xl font-semibold text-white">2 structured paths</p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9db0cb]">Outcomes</p>
                    <p className="mt-2 font-display text-2xl font-semibold text-white">5 role directions</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {supportCards.map((item, index) => (
            <Reveal key={item.title} delay={120 + index * 70} variant="up">
              <article className="panel-light interactive-card h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1630] text-white shadow-[0_18px_35px_rgba(11,22,48,0.18)]">
                  <span className="material-symbols-outlined icon-hover">{item.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-[#0b1630]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#60708b]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryShift;
