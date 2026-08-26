import { BookCard } from '@/components/landing/book-card';
import { books } from '@/data/books';

export function BooksList() {
  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
      <h2 className="font-serif text-2xl font-semibold text-foreground lg:text-3xl">Obras</h2>

      <div className="mt-8 flex flex-col gap-6 lg:mt-10 lg:gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
