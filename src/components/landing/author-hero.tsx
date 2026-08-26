import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { siteConfig } from '@/lib/site-config';

export function AuthorHero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 md:grid-cols-[minmax(0,300px)_1fr] md:gap-16 lg:px-16 lg:pt-32 lg:pb-20 xl:grid-cols-[minmax(0,360px)_1fr] xl:gap-20">
      <ImagePlaceholder
        label="Foto da autora"
        className="aspect-4/5 w-full max-w-75 rounded-(--radius) xl:max-w-90"
      />

      <div className="max-w-2xl space-y-6 lg:space-y-8">
        <div className="space-y-2">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.authorName}
          </h1>
          <p className="text-base text-accent lg:text-lg">{siteConfig.tagline}</p>
        </div>

        <div className="space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground lg:text-lg lg:leading-relaxed">
          <p>
            Nasci e cresci cercada de livros, e foi na escrita que encontrei a forma mais honesta de contar as histórias
            que carrego. Há mais de dez anos publico romances que exploram memória, pertencimento e os laços que nos
            definem.
          </p>
          <p>
            Hoje vivo entre cadernos de rascunho e xícaras de café, sempre em busca da próxima história que mereça ser
            contada.
          </p>
        </div>
      </div>
    </section>
  );
}
