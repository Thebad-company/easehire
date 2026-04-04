import { useState } from 'react';
import Reveal from './Reveal';

const trustPoints = [
  '100% placement-oriented support',
  '73+ modules and 25+ certifications',
  'Scholarships, EMI, and live cohort guidance',
  'Career support for students, professionals, freelancers, and founders',
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  city: '',
  interest: '',
  background: '',
  message: '',
};

function LeadForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus('success');
      setFormData(initialState);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      globalThis.setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <section id="apply" className="section-shell mt-10 sm:mt-16">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal variant="left" className="panel-light p-8 sm:p-10">
          <div className="section-kicker">Apply / Enquire</div>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-[#0b1630] sm:text-4xl">
            Talk to the team about your next step.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#60708b]">
            Share your goals, background, and questions. The team can guide you on batch details, scholarships, curriculum, pricing, and career paths.
          </p>

          <div className="mt-8 space-y-4">
            {trustPoints.map((point, index) => (
              <Reveal key={point} delay={100 + index * 70} variant="up">
                <div className="interactive-card flex items-start gap-3 rounded-[22px] bg-[#edf3fb] px-5 py-4 text-sm leading-7 text-[#21314e]">
                  <span className="material-symbols-outlined mt-0.5 text-[#0b1630]">check_circle</span>
                  <span>{point}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} variant="up" className="mt-8 rounded-[30px] bg-[#0b1630] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9db0cb]">Before you submit</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-[#ffd98f]">arrow_right_alt</span>
                <span>Use this for scholarship requests, next-batch questions, pricing, EMI, or curriculum details.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-[#ffd98f]">arrow_right_alt</span>
                <span>You can ask about batch dates, scholarships, pricing, curriculum, or placement support.</span>
              </li>
            </ul>
          </Reveal>
        </Reveal>

        <Reveal variant="right" delay={120} className="panel-dark p-8 sm:p-10">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9db0cb]">Get a callback</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">Tell the team what you need.</h3>
            </div>
            <div className="rounded-full bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/64">
              Usually within 24h
            </div>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/76">Full name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd98f] focus:bg-white/8"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/76">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd98f] focus:bg-white/8"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/76">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd98f] focus:bg-white/8"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/76">City</span>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd98f] focus:bg-white/8"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/76">What are you asking about?</span>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5 text-white outline-none transition focus:border-[#ffd98f] focus:bg-white/8"
                >
                  <option value="" className="text-[#0b1630]">Select an option</option>
                  <option value="next-batch" className="text-[#0b1630]">Next batch details</option>
                  <option value="curriculum" className="text-[#0b1630]">Curriculum and placement support</option>
                  <option value="scholarship" className="text-[#0b1630]">Scholarship information</option>
                  <option value="emi" className="text-[#0b1630]">Pricing and EMI</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/76">Your background</span>
                <select
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3.5 text-white outline-none transition focus:border-[#ffd98f] focus:bg-white/8"
                >
                  <option value="" className="text-[#0b1630]">Select your background</option>
                  <option value="student" className="text-[#0b1630]">Student</option>
                  <option value="job-seeker" className="text-[#0b1630]">Job seeker</option>
                  <option value="professional" className="text-[#0b1630]">Working professional</option>
                  <option value="entrepreneur" className="text-[#0b1630]">Entrepreneur</option>
                  <option value="freelancer" className="text-[#0b1630]">Freelancer</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/76">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell the team what you want help with."
                className="w-full rounded-[24px] border border-white/12 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd98f] focus:bg-white/8"
              />
            </label>

            <button type="submit" disabled={isSubmitting} className="cta-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? 'Submitting...' : 'Request a Callback'}
            </button>

            {submitStatus === 'success' && (
              <div className="rounded-[22px] border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                Thanks. Your enquiry has been captured in this demo and the form has been reset.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-[22px] border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                Something went wrong while simulating the submission.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default LeadForm;
