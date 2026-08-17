import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/villageData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Απαντήσεις & Συμβουλές</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 mb-4">
            Συχνές Ερωτήσεις Επισκεπτών
          </h2>
          <p className="text-stone-600 text-base">
            Συγκεντρώσαμε τις πιο συνηθισμένες απορίες για τη διαμονή, την πρόσβαση και τις
            δραστηριότητες στο χωριό.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-emerald-800 transition-colors"
                >
                  <span className="text-base sm:text-lg font-serif-heading">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
