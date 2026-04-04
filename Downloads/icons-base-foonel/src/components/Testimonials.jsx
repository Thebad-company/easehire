import Reveal from './Reveal';

const audiences = [
  { title: 'Students', icon: 'school', description: 'For learners who want a structured path into digital marketing without guessing what matters first.' },
  { title: 'Entrepreneurs', icon: 'storefront', description: 'For founders who want better growth systems, clearer acquisition thinking, and AI-assisted marketing workflows.' },
  { title: 'Working Professionals', icon: 'badge', description: 'For operators and marketers who need sharper skills and stronger positioning in an AI-shifted market.' },
  { title: 'Job Seekers', icon: 'work', description: 'For candidates trying to turn learning into interviews, portfolios, and credible role readiness.' },
  { title: 'Influencers / YouTubers', icon: 'videocam', description: 'For creators who want better content systems, monetization support, and audience growth mechanics.' },
  { title: 'Freelancers', icon: 'bolt', description: 'For independent marketers looking to package services, improve execution, and raise perceived value.' },
];

function Testimonials() {
  return (
    <section id="audience" className="section-shell mt-10 sm:mt-16">
      <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal variant="left" className="panel-dark p-8 sm:p-10">
          <div className="section-kicker border-white/10 bg-white/5 text-white/72">Who Can Join</div>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Choose the path that matches your stage and ambition.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
            Whether you are starting out, switching roles, freelancing, or growing a brand, the program is designed to meet you where you are.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Students', 'Job seekers', 'Freelancers', 'Professionals'].map((label, index) => (
              <Reveal key={label} delay={110 + index * 70} variant="up">
                <div className="interactive-card rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/74">
                  {label}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((item, index) => (
            <Reveal key={item.title} delay={70 + index * 60} variant="up">
              <article className="panel-light interactive-card h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1630] text-white shadow-[0_18px_35px_rgba(11,22,48,0.18)]">
                  <span className="material-symbols-outlined icon-hover">{item.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-[#0b1630]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#60708b]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
