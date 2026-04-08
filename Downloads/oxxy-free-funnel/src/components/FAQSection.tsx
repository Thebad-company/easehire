import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    question: 'Is Oxxy really free to try?',
    answer:
      'Yes, 100%. You get full access during your trial period with no credit card required. We believe in earning your trust first — if you don\'t see real savings, you owe us nothing.',
  },
  {
    question: 'What if I don\'t end up using it?',
    answer:
      'No problem at all. There\'s no commitment, no penalty, and no awkward cancellation process. Your trial simply ends and you move on. We\'re confident you\'ll stay though.',
  },
  {
    question: 'How does Oxxy make money?',
    answer:
      'We partner with healthcare providers who offer competitive pricing through our platform. When you save money, providers get more customers, and Oxxy earns a small referral fee. Everyone wins.',
  },
  {
    question: 'Is this available in my city?',
    answer:
      'Oxxy is currently available in major Indian cities and expanding rapidly. Sign up to check availability in your area — new cities are added every week.',
  },
  {
    question: 'How much can I actually save?',
    answer:
      'Most users save between 40-60% on lab tests and 20-40% on doctor consultations. The exact amount depends on the services you use, but our average user saves over \u20B91,500 per month.',
  },
];

export default function FAQSection() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-slate-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Common questions
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know before getting started.
          </p>
        </div>

        <div
          className={`space-y-3 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-[15px] font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
