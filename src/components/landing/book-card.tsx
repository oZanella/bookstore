'use client';

import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { siteConfig } from '@/lib/site-config';
import { redirectToWhatsappPurchase } from '@/lib/whatsapp';
import type { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  function handlePurchaseClick() {
    redirectToWhatsappPurchase(siteConfig.whatsappNumber, book.title);
  }

  return (
    <div className="flex flex-col gap-6 overflow-hidden rounded-(--radius) border border-border bg-card p-6 sm:flex-row sm:gap-8 lg:p-8">
      <ImagePlaceholder
        label="Capa do livro"
        className="aspect-[3/4] w-full max-w-[220px] shrink-0 self-center rounded-(--radius) sm:w-56 sm:self-start md:w-64"
      />

      <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-semibold text-foreground lg:text-3xl">{book.title}</h3>
          <p className="text-sm text-muted-foreground">
            {book.genre} · {book.year}
          </p>
        </div>

        {book.description && (
          <p className="text-[0.975rem] leading-relaxed text-muted-foreground lg:text-base">{book.description}</p>
        )}

        <Button onClick={handlePurchaseClick} className="mt-auto self-start" size="md">
          Comprar pelo WhatsApp
        </Button>
      </div>
    </div>
  );
}
