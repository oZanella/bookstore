import { AuthorHero } from '@/components/landing/author-hero';
import { BooksList } from '@/components/landing/books-list';
import { RecentUpdates } from '@/components/landing/recent-updates';
import { SiteFooter } from '@/components/landing/site-footer';

export default function Home() {
  return (
    <main>
      <AuthorHero />
      <RecentUpdates />
      <BooksList />
      <SiteFooter />
    </main>
  );
}
