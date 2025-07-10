import * as React from 'react';

import { cn } from '@/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Layout & Sizing
        'flex h-9 w-full min-w-0 rounded-md px-3 py-1 md:text-sm',
        // Border & Background
        'border border-input bg-transparent dark:bg-input/40',
        // Typography
        'text-base file:text-sm file:font-medium',
        // Placeholder & Selection
        'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
        // File Input
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-foreground',
        // Shadow & Transition
        'shadow-xs transition-[color,box-shadow]',
        // Outline & Focus
        'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        // Disabled State
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        // Validation State
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
