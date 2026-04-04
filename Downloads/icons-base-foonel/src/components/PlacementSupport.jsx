import Reveal from './Reveal';

const steps = [
  {
    title: 'Learn in a live cohort',
    description: 'Live sessions and mentor guidance make the training feel more accountable and less like passive course consumption.',
  },
  {
    title: 'Build project evidence',
    description: 'Live projects, practical modules, and execution-oriented assignments create the proof a candidate actually needs.',
  },
  {
    title: 'Add certification leverage',
    description: 'Add certifications and proof that strengthen interviews, client conversations, and your portfolio.',
  },
  {
    title: 'Move into placement support',
    description: 'Move into internship and placement support with clearer role readiness and better confidence.',
  },
];

function PlacementSupport() {
  return (
    <section id="placement" className="section-shell mt-10 sm:mt-16">
      <div className="panel-dark p-8 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal variant="left">
            <div className="section-kicker border-white/10 bg-white/5 text-white/72">Career Support Path</div>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              From learning to placement support in four clear stages.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              The journey combines training, project proof, certifications, and career support so progress feels visible at every step.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9db0cb]">What you get</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/68">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[#ffd98f]">check_circle</span>
                  <span>A clear path from learning to practical proof.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[#ffd98f]">check_circle</span>
                  <span>Career-readiness support before interviews and placements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[#ffd98f]">check_circle</span>
                  <span>Confidence through guided milestones and feedback.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="relative pl-0 md:pl-4">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-white/12 md:block" />
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={100 + index * 90} variant="up">
                  <article className="interactive-card relative rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:ml-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6b63c] text-[#0b1630] md:absolute md:-left-14 md:top-6">
                      <span className="font-display text-xl font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">{step.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacementSupport;
