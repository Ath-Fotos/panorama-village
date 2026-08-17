import { Tabs as BaseTabs } from '@base-ui/react';
import { cn } from '@/lib/utils';

export function Tabs({ defaultValue, value, onValueChange, className, children, ...props }) {
  return (
    <BaseTabs.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </BaseTabs.Root>
  );
}

export function TabsList({ className, children, ...props }) {
  return (
    <BaseTabs.List
      className={cn(
        'inline-flex items-center justify-center rounded-2xl bg-stone-200/60 p-1.5 text-stone-600 gap-1 border border-stone-200',
        className,
      )}
      {...props}
    >
      {children}
    </BaseTabs.List>
  );
}

export function TabsTrigger({ value, className, children, ...props }) {
  return (
    <BaseTabs.Tab
      value={value}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-all cursor-pointer select-none border-none outline-none',
        'data-[selected]:bg-white data-[selected]:text-stone-900 data-[selected]:shadow-sm text-stone-600 hover:text-stone-900 hover:bg-white/50',
        className,
      )}
      {...props}
    >
      {children}
    </BaseTabs.Tab>
  );
}

export function TabsContent({ value, className, children, ...props }) {
  return (
    <BaseTabs.Panel
      value={value}
      className={cn('mt-6 focus-visible:outline-none animate-in fade-in duration-200', className)}
      {...props}
    >
      {children}
    </BaseTabs.Panel>
  );
}
