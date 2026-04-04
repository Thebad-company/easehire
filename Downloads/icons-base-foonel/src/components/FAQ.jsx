import { useState } from 'react';
import Reveal from './Reveal';

const faqs = [
  {
    question: 'Do I need prior experience to join?',
    answer: 'No. Advanced technical skills are not required, and basic comfort with a computer and online research is enough to begin.',
  },
  {
    question: 'Is the learning format offline or live?',
    answer: 'IconsBase emphasizes live learning and cohort-based guidance, with strong focus on offline or live-session-driven delivery depending on the batch.',
  },
  {
    question: 'Are scholarships and EMI options available?',
    answer: 'Yes. Eligible learners can apply for scholarships, and EMI options are available for flexible payment.',
  },
  {
    question: 'Is placement support included?',
    answer: 'Yes. Placement assistance, internship opportunities, and role-readiness support are part of the learning journey.',
  },
  {
    question: 'How long is the program?',
    answer: 'Program structure can vary by batch. The best approach is to confirm the current duration, schedule, and learning format directly with the team.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-shell mt-10 sm:mt-16">
      <Reveal variant="up" className="panel-light p-8 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal variant="left">
            <div className="section-kicker">FAQ</div>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-[#0b1630] sm:text-4xl">
              Clear answers to the questions learners ask most.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#60708b]">
              Find answers to the questions most learners ask before joining.
            </p>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal key={item.question} delay={70 + index * 70} variant="up">
                  <article className="interactive-card rounded-[26px] border border-[#0b1630]/10 bg-white/75 px-5 py-4 shadow-[0_16px_35px_rgba(10,18,35,0.05)]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="font-display text-xl font-semibold text-[#0b1630]">{item.question}</span>
                      <span className={`material-symbols-outlined transition-transform ${isOpen ? 'rotate-45 text-[#0b1630]' : 'text-[#60708b]'}`}>
                        add
                      </span>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="pt-4 text-sm leading-7 text-[#60708b]">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default FAQ;
