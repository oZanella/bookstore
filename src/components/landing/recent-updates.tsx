import { updates } from '@/data/updates';

export function RecentUpdates() {
  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
      <h2 className="font-serif text-2xl font-semibold text-foreground lg:text-3xl">Novidades</h2>

      <div className="mt-8 divide-y divide-border lg:mt-10">
        {updates.map((update) => (
          <article
            key={update.id}
            className="grid grid-cols-1 gap-1 py-5 first:pt-0 lg:grid-cols-[220px_1fr] lg:gap-8 lg:py-7"
          >
            <p className="text-xs font-medium tracking-wide text-accent uppercase lg:text-sm">{update.date}</p>
            <p className="max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground lg:text-base">
              {update.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
