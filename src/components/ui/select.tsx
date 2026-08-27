import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Select({ className, children, ...props }: React.ComponentProps<'select'>) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          'flex h-10 w-full cursor-pointer appearance-none rounded-(--radius) border border-border bg-transparent ' +
            'px-3 pr-8 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
            'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

export { Select };
