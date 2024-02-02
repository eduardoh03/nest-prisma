import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FindManyCategoryDto } from '../dto/category-list-all';
@Injectable()
export class ListCategoryUsecase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<FindManyCategoryDto[]> {
    return this.prismaService.category.findMany();
  }
}
