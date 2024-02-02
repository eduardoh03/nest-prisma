import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryDto } from '../dto/category.dto';
import { Category } from '@prisma/client';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(data: CategoryDto): Promise<Category> {
    return this.prismaService.category.create({ data });
  }
}
