import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-10 w-full rounded-(--radius) border border-border bg-transparent px-3 text-sm text-foreground ' +
          'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
          'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

export { Input };
