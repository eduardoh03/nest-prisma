import { PrismaService } from '../../database/prisma.service';
import { Injectable } from '@nestjs/common';

import { CreateCategoryUseCase } from './use-cases/create-category.usecase';

@Injectable()
export class CategoryService {
  create = new CreateCategoryUseCase(this.prisma);

  constructor(private prisma: PrismaService) {}
}
