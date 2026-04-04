import workspaceImg from '../assets/workspace.png';
import Reveal from './Reveal';

const pillars = [
  {
    icon: 'co_present',
    title: 'Mentor-led live sessions',
    text: 'Learn from practitioners through live sessions, reviews, and direct guidance.',
  },
  {
    icon: 'lab_profile',
    title: 'Practical and hands-on',
    text: 'Apply concepts through assignments, projects, and performance-led thinking.',
  },
  {
    icon: 'work_history',
    title: 'Career movement built in',
    text: 'Build toward internships, placement support, and role-specific readiness.',
  },
];

const details = [
  'Laptop-friendly learning with a clear path into practical execution.',
  'Suitable for students, job seekers, freelancers, and working professionals.',
  'Balanced across strategy, tools, certification support, and career outcomes.',
];

function ProofEngine() {
  return (
    <section id="experience" className="section-shell mt-10 sm:mt-16">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal variant="left" className="panel-light interactive-card overflow-hidden p-3 shadow-[0_32px_80px_rgba(10,18,35,0.08)]">
          <div className="interactive-media relative overflow-hidden rounded-[28px]">
            <img
              src={workspaceImg}
              alt="Mentor-led classroom and project environment"
              className="h-[260px] w-full object-cover sm:h-[380px] md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1630]/78 via-[#0b1630]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2def1]">Inside the experience</p>
              <p className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Mentor-led sessions, practical work, and career-focused guidance in one learning environment.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="section-kicker">Institute Experience</div>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#0b1630] sm:text-4xl">
            Experience how the program is taught, practiced, and applied.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#60708b]">
            The learning model blends mentor guidance, hands-on practice, and career support so students can move from theory to confident execution.
          </p>

          <div className="mt-8 space-y-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={140 + index * 80} variant="up">
                <article className="panel-light interactive-card p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1630] text-white">
                      <span className="material-symbols-outlined icon-hover">{pillar.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-[#0b1630]">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#60708b]">{pillar.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} variant="up" className="mt-6 rounded-[28px] bg-[#edf3fb] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#60708b]">Useful details</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#21314e]">
              {details.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-[#0b1630]">arrow_right_alt</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

export default ProofEngine;
