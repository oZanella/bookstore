import Image from 'next/image';

import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { siteConfig } from '@/lib/site-config';

export function AuthorHero() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 pt-12 pb-10 sm:px-8 sm:pt-16 md:grid-cols-[minmax(0,260px)_1fr] md:gap-12 lg:px-10 lg:pt-20 lg:pb-14 xl:grid-cols-[minmax(0,300px)_1fr] xl:gap-16">
      {siteConfig.authorPhotoUrl ? (
        <div className="relative aspect-4/5 w-full max-w-64 overflow-hidden rounded-(--radius) bg-muted xl:max-w-72">
          <Image
            src={siteConfig.authorPhotoUrl}
            alt={`Foto de ${siteConfig.authorName}`}
            fill
            sizes="(min-width: 1280px) 288px, (min-width: 768px) 260px, 256px"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <ImagePlaceholder label="Foto da autora" className="aspect-4/5 w-full max-w-64 rounded-(--radius) xl:max-w-72" />
      )}

      <div className="max-w-2xl space-y-3">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {siteConfig.authorName}
        </h1>
        <p className="h-px w-16 bg-border" aria-hidden />
        <p className="text-base text-accent lg:text-lg">{siteConfig.tagline}</p>
      </div>
    </section>
  );
}
