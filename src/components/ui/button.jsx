import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const buttonVariants = ({ variant = 'default', size = 'default', className = '' } = {}) => {
  const base =
    'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none';

  const variants = {
    default: 'bg-stone-900 text-white hover:bg-stone-800 shadow-sm',
    emerald:
      'bg-emerald-700 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-950/30 border border-emerald-500/30',
    primary: 'bg-emerald-700 text-white hover:bg-emerald-600 shadow-md',
    secondary: 'bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200/80',
    outline: 'border border-stone-300 bg-white hover:bg-stone-100 text-stone-800 shadow-xs',
    ghost: 'hover:bg-stone-100 hover:text-stone-900 text-stone-600',
    link: 'text-emerald-800 underline-offset-4 hover:underline p-0 h-auto',
    glass:
      'bg-stone-900/80 hover:bg-stone-800/90 text-white backdrop-blur-md border border-stone-700/80 shadow-lg',
  };

  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-8 rounded-lg px-3 text-xs',
    lg: 'h-12 rounded-xl px-6 text-base',
    xl: 'h-14 rounded-2xl px-8 py-3.5 text-base sm:text-lg font-bold',
    hero: 'min-h-[52px] px-7 py-3.5 text-base sm:text-lg font-bold rounded-2xl w-full sm:w-auto',
    icon: 'h-10 w-10 p-0',
    iconSm: 'h-8 w-8 p-0 rounded-lg',
  };

  return cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className);
};

export const Button = forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />;
  },
);

Button.displayName = 'Button';
