import { Dialog as BaseDialog } from '@base-ui/react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Dialog({ open, onOpenChange, children }) {
  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </BaseDialog.Root>
  );
}

export function DialogTrigger({ className, children, ...props }) {
  return (
    <BaseDialog.Trigger className={cn('cursor-pointer', className)} {...props}>
      {children}
    </BaseDialog.Trigger>
  );
}

export function DialogContent({ className, children, ...props }) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm transition-opacity animate-in fade-in" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <BaseDialog.Popup
          className={cn(
            'relative z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-200 duration-200 outline-none',
            className,
          )}
          {...props}
        >
          <BaseDialog.Close
            className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Κλείσιμο"
          >
            <X className="w-5 h-5" />
          </BaseDialog.Close>
          {children}
        </BaseDialog.Popup>
      </div>
    </BaseDialog.Portal>
  );
}

export function DialogHeader({ className, ...props }) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 pb-4 border-b border-stone-100 text-left',
        className,
      )}
      {...props}
    />
  );
}

export function DialogTitle({ className, children, ...props }) {
  return (
    <BaseDialog.Title
      className={cn(
        'text-xl sm:text-2xl font-bold font-serif-heading text-stone-900 leading-none tracking-tight pr-8',
        className,
      )}
      {...props}
    >
      {children}
    </BaseDialog.Title>
  );
}

export function DialogDescription({ className, children, ...props }) {
  return (
    <BaseDialog.Description
      className={cn('text-sm text-stone-500 leading-relaxed mt-1', className)}
      {...props}
    >
      {children}
    </BaseDialog.Description>
  );
}

export function DialogFooter({ className, ...props }) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t border-stone-100 mt-6',
        className,
      )}
      {...props}
    />
  );
}

export function DialogClose({ className, children, ...props }) {
  return (
    <BaseDialog.Close className={cn('cursor-pointer', className)} {...props}>
      {children}
    </BaseDialog.Close>
  );
}
