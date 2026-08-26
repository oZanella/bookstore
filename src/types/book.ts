export interface Book {
  id: string;
  title: string;
  year: number;
  genre: string;
  description?: string;
  coverUrl?: string;
}

export interface UpdateEntry {
  id: string;
  date: string;
  text: string;
}
