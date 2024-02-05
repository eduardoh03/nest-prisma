export type BookCreateDto = {
  id?: number;
  title: string;
  author: string;
  description: string;
  bar_code: string;
  categoryId: number;
};
