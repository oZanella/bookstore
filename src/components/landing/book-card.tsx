'use client';

import Image from 'next/image';
import { useState } from 'react';

import { PurchaseDialog } from '@/components/landing/purchase-dialog';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import type { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
  priority?: boolean;
}

const priceFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export function BookCard({ book, priority = false }: BookCardProps) {
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const formattedPrice = priceFormatter.format(siteConfig.bookPrice);

  return (
    <div className="flex flex-col overflow-hidden rounded-none border border-border bg-card shadow-sm sm:h-84 sm:flex-row lg:h-96">
      <div className="relative mx-auto aspect-2/3 w-full max-w-56 shrink-0 bg-muted sm:mx-0 sm:h-full sm:w-56 sm:max-w-none md:w-64">
        {book.cover ? (
          <Image
            src={book.cover}
            alt={`Capa do livro ${book.title}`}
            fill
            sizes="(min-width: 768px) 256px, (min-width: 640px) 224px, 100vw"
            className="object-cover"
            placeholder="blur"
            priority={priority}
          />
        ) : (
          <ImagePlaceholder label="Capa do livro" className="h-full w-full" />
        )}
      </div>

      <div className="flex flex-1 flex-col overflow-hidden p-5 sm:h-full sm:p-6 lg:p-7">
        <div className="shrink-0 space-y-1">
          <h3 className="font-serif text-xl font-semibold text-foreground lg:text-2xl">{book.title}</h3>
          <p className="text-xs text-muted-foreground">
            {book.genre} · {book.year}
          </p>
        </div>

        {book.description && (
          <p className="mt-3 min-h-0 flex-1 overflow-hidden text-sm leading-relaxed text-muted-foreground lg:mt-4">
            {book.description}
          </p>
        )}

        <div
          className={cn(
            'flex shrink-0 items-end justify-between gap-4 border-t border-border pt-3',
            book.description ? 'mt-3 lg:mt-4' : 'mt-auto'
          )}
        >
          <div>
            <p className="text-lg font-semibold text-foreground">{formattedPrice}</p>
          </div>

          <Button onClick={() => setPurchaseOpen(true)} size="md">
            Comprar
          </Button>
        </div>
      </div>

      <PurchaseDialog
        open={purchaseOpen}
        onOpenChange={setPurchaseOpen}
        bookTitle={book.title}
        bookPrice={formattedPrice}
      />
    </div>
  );
}
