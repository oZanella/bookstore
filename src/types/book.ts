import type { StaticImageData } from 'next/image';

export interface Book {
  id: string;
  title: string;
  year: number;
  genre: string;
  description?: string;
  cover?: StaticImageData;
}
