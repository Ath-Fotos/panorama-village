import { cn } from '@/lib/utils';

export function Badge({ className, variant = 'default', children, ...props }) {
  const variants = {
    default: 'bg-stone-900 text-white',
    secondary: 'bg-stone-100 text-stone-700 border border-stone-200',
    emerald: 'bg-emerald-100 text-emerald-800 border border-emerald-200/80',
    emeraldDark: 'bg-emerald-900/90 text-emerald-200 border border-emerald-700/60',
    amber: 'bg-amber-100 text-amber-800 border border-amber-200',
    sky: 'bg-sky-100 text-sky-800 border border-sky-200',
    rose: 'bg-rose-100 text-rose-800 border border-rose-200',
    outline: 'border border-stone-300 text-stone-700 bg-white/80',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors',
        variants[variant] || variants.default,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
