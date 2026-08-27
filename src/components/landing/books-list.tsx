import { BookCard } from '@/components/landing/book-card';
import { books } from '@/data/books';

export function BooksList() {
  return (
    <section className="mx-auto max-w-5xl border-t border-border px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <h2 className="text-center font-serif text-xl font-semibold text-foreground sm:text-left lg:text-2xl">
        Repertório do Autor
      </h2>

      <div className="mt-6 flex flex-col gap-5 lg:mt-8 lg:gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} priority />
        ))}
      </div>
    </section>
  );
}
