import { BookCreateDto } from '../../book/dto/book.dto';

export class FindManyCategoryDto {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  books?: BookCreateDto[];
}
