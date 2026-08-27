import './globals.css';
import { Inter, Lora } from 'next/font/google';

import { siteConfig } from '@/lib/site-config';

import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: `Livros - ${siteConfig.authorName} `
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
