import { IsOptional } from 'class-validator';

export class FindManyCategoryDto {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  @IsOptional()
  books?: any;
}
