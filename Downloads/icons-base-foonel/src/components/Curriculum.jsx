import Reveal from './Reveal';

const tracks = [
  {
    tag: 'Track 01',
    title: 'Core learning foundation',
    description: 'Built for fundamentals, AI workflow fluency, platform understanding, and certification-ready confidence.',
    bullets: ['Gen AI tools and prompt workflows', 'Marketing basics across major channels', 'Structured modules and mentor checkpoints'],
  },
  {
    tag: 'Track 02',
    title: 'Career launch and execution',
    description: 'Built for practical work, live-project thinking, internship pathways, and placement-focused preparation.',
    bullets: ['Live sessions and project feedback', 'Internship and placement support', 'Role clarity for job seekers and upskillers'],
  },
];

const roleOutcomes = [
  'Digital Marketing Specialist',
  'SEO Expert',
  'PPC Specialist',
  'Social Media Manager',
  'E-commerce Marketer',
];

function Curriculum() {
  return (
    <section id="curriculum" className="section-shell mt-10 sm:mt-16">
      <Reveal variant="up" className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="section-kicker">Career Paths</div>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#0b1630] sm:text-4xl">
            Two tracks that take you from foundation to execution.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-[#60708b]">
          Move from foundations to execution through two clear tracks built for modern digital marketing careers.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {tracks.map((track, index) => (
          <Reveal key={track.title} delay={100 + index * 90} variant="up">
            <article className="panel-light interactive-card p-8 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#60708b]">{track.tag}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-[#0b1630]">{track.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#52627c]">{track.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#21314e]">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="material-symbols-outlined icon-hover mt-0.5 text-[#0b1630]">check_circle</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} variant="up" className="mt-6 panel-light p-8 sm:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#60708b]">Role Outcomes</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-[#0b1630]">Career paths you can grow into.</h3>
          </div>
          <div className="gold-badge">5 role paths</div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {roleOutcomes.map((role, index) => (
            <Reveal key={role} delay={140 + index * 70} variant="scale">
              <div className="interactive-card rounded-[24px] border border-[#0b1630]/10 bg-[#f7f3eb] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b1630] text-white">
                  <span className="material-symbols-outlined icon-hover">trending_up</span>
                </div>
                <p className="mt-4 font-display text-xl font-semibold leading-tight text-[#0b1630]">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Curriculum;
