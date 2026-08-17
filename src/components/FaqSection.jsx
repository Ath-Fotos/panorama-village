import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { faqs } from '@/data/villageData';

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <Badge variant="emerald" className="gap-1.5 py-1 px-3">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>Απαντήσεις & Συμβουλές</span>
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 mb-4">
            Συχνές Ερωτήσεις Επισκεπτών
          </h2>
          <p className="text-stone-600 text-base">
            Συγκεντρώσαμε τις πιο συνηθισμένες απορίες για τη διαμονή, την πρόσβαση και τις
            δραστηριότητες στο χωριό.
          </p>
        </div>

        {/* Base UI Accordion list */}
        <Accordion defaultValue="faq-0" className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`faq-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
