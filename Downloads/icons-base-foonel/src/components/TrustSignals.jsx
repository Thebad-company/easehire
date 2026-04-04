import Reveal from './Reveal';

const trustStats = [
  { value: '18+', label: 'years of digital marketing experience', icon: 'military_tech' },
  { value: '1000+', label: 'individuals coached by the training team', icon: 'groups' },
  { value: '25+', label: 'industry-recognized certifications', icon: 'workspace_premium' },
  { value: '100%', label: 'placement assistance positioning', icon: 'verified_user' },
];

const trustCards = [
  {
    title: 'Google Premier Partner positioning',
    description: 'Signals hands-on platform credibility and performance marketing experience.',
  },
  {
    title: 'Live-project exposure',
    description: 'Helps learners build confidence through guided execution, not only theory.',
  },
  {
    title: 'Certification-backed proof',
    description: 'Gives learners stronger evidence for interviews, clients, and role changes.',
  },
];

const proofBullets = [
  'Mentor-led learning from experienced practitioners',
  'Visible proof across certifications, placement support, and partner credibility',
  'Clear value for students, freelancers, job seekers, and founders',
];

function TrustSignals() {
  const [featuredStat, ...secondaryStats] = trustStats;

  return (
    <section id="trust" className="section-shell mt-10 sm:mt-16">
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch">
        <Reveal variant="left" className="panel-dark relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(246,182,60,0.16),_transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />
          <div className="relative z-10">
            <div className="section-kicker border-white/10 bg-white/5 text-white/72">Trust Signals</div>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Built to earn confidence early, not after the pitch.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              The program is framed around the trust questions serious learners ask first: who is teaching, what proof you
              build, and how the learning connects to real career movement.
            </p>

            <div className="mt-8 space-y-3">
              {proofBullets.map((bullet, index) => (
                <Reveal key={bullet} delay={120 + index * 70} variant="up">
                  <div className="interactive-card rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/74">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-[#ffd98f]">check_circle</span>
                      <span>{bullet}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal variant="right" delay={80}>
            <article className="panel-light interactive-card p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#60708b]">Lead trust marker</p>
                  <p className="mt-4 font-display text-5xl font-semibold text-[#0b1630] sm:text-6xl">{featuredStat.value}</p>
                  <p className="mt-3 max-w-sm text-base leading-7 text-[#60708b]">{featuredStat.label}</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#0b1630] text-white shadow-[0_18px_35px_rgba(11,22,48,0.18)]">
                  <span className="material-symbols-outlined icon-hover text-[24px]">{featuredStat.icon}</span>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {secondaryStats.map((item, index) => (
              <Reveal key={item.label} delay={140 + index * 90} variant="scale">
                <article className="panel-light interactive-card h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1630] text-white shadow-[0_18px_35px_rgba(11,22,48,0.18)]">
                    <span className="material-symbols-outlined icon-hover">{item.icon}</span>
                  </div>
                  <p className="mt-5 font-display text-4xl font-semibold text-[#0b1630]">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-[#60708b]">{item.label}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {trustCards.map((item, index) => (
              <Reveal key={item.title} delay={180 + index * 90} variant="up">
                <article className="panel-light interactive-card h-full p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#60708b]">Why it builds trust</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-[#0b1630]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#60708b]">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSignals;
