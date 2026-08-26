import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-(--radius) text-sm font-medium ' +
    'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-2 ' +
    'ring-offset-background disabled:pointer-events-none disabled:opacity-50 ' +
    '[&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg]:size-4',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-border bg-transparent text-foreground hover:bg-muted',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild = false, type = 'button', ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp data-slot="button" type={type} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
