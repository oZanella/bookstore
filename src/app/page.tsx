import { AuthorHero } from '@/components/landing/author-hero';
import { Biography } from '@/components/landing/biography';
import { BooksList } from '@/components/landing/books-list';
import { SiteFooter } from '@/components/landing/site-footer';

export default function Home() {
  return (
    <main>
      <AuthorHero />
      <Biography />
      <BooksList />
      <SiteFooter />
    </main>
  );
}
