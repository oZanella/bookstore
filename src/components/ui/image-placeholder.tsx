import { ImageIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 border border-dashed border-border bg-muted text-muted-foreground',
        className
      )}
    >
      <ImageIcon className="size-8" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs">{label}</span>
    </div>
  );
}
