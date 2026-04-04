import analyticsMain from '../assets/analytics-main.png';
import Reveal from './Reveal';

const rolePaths = [
  'Digital Marketing Specialist',
  'SEO Expert',
  'PPC Specialist',
  'Social Media Manager',
  'E-commerce Marketer',
  'Lead Generation Expert',
  'Marketing Analyst',
  'Digital Entrepreneur',
];

const proofStats = [
  { value: '32%', label: 'average salary hike' },
  { value: '25+', label: 'live sessions' },
  { value: 'Offline', label: 'cohort-first delivery' },
];

const featureNotes = [
  {
    title: 'Execution over theory',
    text: 'Learn by building campaigns, reviewing work, and understanding why performance changes.',
  },
  {
    title: 'Career-first outcomes',
    text: 'Choose a path aligned to hiring demand, freelance growth, or stronger business results.',
  },
];

function RealProblem() {
  return (
    <section id="outcomes" className="section-shell mt-10 sm:mt-16">
      <div className="panel-dark relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(246,182,60,0.18),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%)]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal variant="left">
            <div className="section-kicker border-white/10 bg-white/5 text-white/72">Outcomes Focus</div>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Designed around actual career paths, not just "join now" pressure.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Whether you want your first job, better freelance positioning, or sharper execution skills, the program is built around outcomes employers and clients can understand.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {rolePaths.map((role, index) => (
                <Reveal key={role} delay={60 + index * 40} variant="up" className="chip-dark interactive-card">
                  {role}
                </Reveal>
              ))}
            </div>

            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
              {proofStats.map((stat, index) => (
                <Reveal key={stat.label} delay={150 + index * 80} variant="up">
                  <div className="interactive-card rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="font-display text-2xl font-semibold text-white">{stat.value}</div>
                    <p className="mt-2 text-sm leading-6 text-white/62">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={120} className="space-y-5">
            <div className="interactive-card overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(3,10,24,0.4)]">
              <div className="interactive-media relative overflow-hidden rounded-[24px] border border-white/10">
                <img
                  src={analyticsMain}
                  alt="Analytics dashboard"
                  className="h-[260px] w-full object-cover sm:h-[320px] md:h-[380px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091223] via-[#091223]/75 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93a7c4]">Live Project Mindset</p>
                  <p className="mt-2 max-w-md font-display text-2xl font-semibold text-white">
                    Build proof through practical work, role-based learning, and measurable outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featureNotes.map((item, index) => (
                <Reveal key={item.title} delay={190 + index * 90} variant="up">
                  <div className="interactive-card rounded-[24px] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#93a7c4]">Outcome focus</p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default RealProblem;
