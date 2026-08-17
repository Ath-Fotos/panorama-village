import { Accordion as BaseAccordion } from '@base-ui/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ defaultValue, value, onValueChange, className, children, ...props }) {
  return (
    <BaseAccordion.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={cn('space-y-4', className)}
      {...props}
    >
      {children}
    </BaseAccordion.Root>
  );
}

export function AccordionItem({ value, className, children, ...props }) {
  return (
    <BaseAccordion.Item
      value={value}
      className={cn(
        'rounded-2xl border border-stone-200/80 bg-white overflow-hidden shadow-xs transition-all group',
        className,
      )}
      {...props}
    >
      {children}
    </BaseAccordion.Item>
  );
}

export function AccordionTrigger({ className, children, ...props }) {
  return (
    <BaseAccordion.Header className="flex">
      <BaseAccordion.Trigger
        className={cn(
          'flex w-full items-center justify-between p-5 text-left font-serif-heading text-base sm:text-lg font-bold text-stone-900 transition-all hover:text-emerald-800 cursor-pointer outline-none',
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <ChevronDown className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-300 group-data-[panel-open]:rotate-180 group-data-[panel-open]:text-emerald-700" />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <BaseAccordion.Panel
      className={cn(
        'px-5 pb-5 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-200',
        className,
      )}
      {...props}
    >
      {children}
    </BaseAccordion.Panel>
  );
}
