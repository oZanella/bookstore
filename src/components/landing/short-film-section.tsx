import { siteConfig } from '@/lib/site-config';

export function ShortFilmSection() {
  return (
    <section className="mx-auto max-w-5xl border-t border-border px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <h2 className="text-center font-serif text-xl font-semibold text-foreground sm:text-left lg:text-2xl">
        {siteConfig.shortFilm.bookTitle} o Curta-metragem 
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:mx-0 sm:text-left lg:mt-4">
        Uma adaptação independente que expande o material original, usando sua narrativa como ponto de partida para criar algo novo.      
      </p>

      <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-(--radius) border border-border bg-black lg:mt-8">
        <video
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          src={siteConfig.shortFilm.videoUrl}
        >
          Seu navegador não suporta a reprodução deste vídeo.
        </video>
      </div>
    </section>
  );
}
