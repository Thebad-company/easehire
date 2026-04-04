import heroDashboard from '../assets/hero-dashboard.png';
import Reveal from './Reveal';

const metrics = [
  { value: '73+', label: 'career-building modules' },
  { value: '25+', label: 'industry certifications' },
  { value: '18+', label: 'years of mentor experience' },
  { value: '100%', label: 'placement-focused support' },
];

const promiseChips = ['Gen AI workflows', 'Live projects', 'Scholarships', 'EMI options'];

const quickCards = [
  { label: 'Program', value: '2 tracks' },
  { label: 'Outcomes', value: '5 paths' },
];

function Hero() {
  return (
    <section id="hero" className="w-full px-0">
      <div className="panel-dark hero-surface relative overflow-hidden rounded-none px-5 py-5 sm:px-8 sm:py-6 lg:px-12 lg:py-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(246,182,60,0.2),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(66,108,212,0.25),_transparent_28%),radial-gradient(circle_at_50%_120%,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_22%,rgba(255,255,255,0.02)_100%)]" />
        <div className="absolute left-[-8%] top-[18%] h-40 w-40 rounded-full bg-[#f6b63c]/12 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute right-[-6%] top-[10%] h-48 w-48 rounded-full bg-[#4169c9]/18 blur-3xl sm:h-64 sm:w-64" />

        <div className="relative z-10 lg:flex lg:min-h-[calc(72svh-4.5rem)] lg:flex-col lg:justify-center">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(430px,0.96fr)] xl:items-center">
            <Reveal variant="left" className="max-w-2xl">
              <h1 className="max-w-[11ch] font-display text-[clamp(3.1rem,8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white">
                Build digital marketing skills that actually move your career.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Learn AI workflows, performance marketing, and live execution through structured cohorts, project feedback,
                certifications, and career support built for students, freelancers, founders, and working professionals.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {promiseChips.map((chip, index) => (
                  <Reveal key={chip} delay={index * 70} variant="up" className="chip-dark interactive-card">
                    {chip}
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#apply" className="cta-primary w-full sm:w-auto">
                  Apply for Next Batch
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a href="#curriculum" className="cta-secondary w-full border-white/12 bg-white/5 text-white hover:border-white/20 hover:bg-white/10 sm:w-auto">
                  Explore Curriculum
                </a>
              </div>

            </Reveal>

            <Reveal variant="right" delay={120} className="space-y-4">
              <div className="relative">
                <div className="interactive-card overflow-hidden rounded-[32px] border border-white/10 bg-[#08101d] p-3 shadow-[0_40px_100px_rgba(3,10,24,0.5)]">
                  <div className="interactive-media relative overflow-hidden rounded-[28px] border border-white/10">
                    <img
                      src={heroDashboard}
                      alt="IconsBase digital dashboard"
                      className="h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[390px]"
                    />

                    <div className="absolute left-4 right-4 top-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="rounded-full border border-white/12 bg-[#0c162a]/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#9db0cb] backdrop-blur-sm">
                        Program preview
                      </div>
                      <div className="rounded-full border border-[#ffd98f]/22 bg-[#f6b63c]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd98f] backdrop-blur-sm">
                        Scholarships available
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/84 to-transparent p-4 sm:p-6">
                      <div className="max-w-sm rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9db0cb]">Program snapshot</p>
                        <p className="mt-3 font-display text-xl font-semibold text-white">One system, multiple outcomes.</p>
                        <p className="mt-2 text-sm leading-6 text-white/66">
                          Scholarships, role-based tracks, and practical learning in one clear roadmap.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {quickCards.map((item, index) => (
                  <Reveal key={item.label} delay={220 + index * 80} variant="up">
                    <div className="hero-mini-panel interactive-card rounded-[24px] p-4 text-white/78">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ca0be]">{item.label}</p>
                      <p className="mt-2 font-display text-2xl text-white">{item.value}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative z-10 mt-5 grid gap-4 sm:grid-cols-3">
          {metrics.slice(0, 3).map((metric, index) => (
            <Reveal key={metric.label} delay={260 + index * 70} variant="up">
              <div className="hero-mini-panel interactive-card rounded-[24px] p-4 sm:p-5 backdrop-blur-sm">
                <div className="font-display text-2xl font-semibold text-white sm:text-3xl">{metric.value}</div>
                <p className="mt-2 text-sm leading-6 text-white/62">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
