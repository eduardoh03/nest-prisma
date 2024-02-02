import { PrismaService } from '../../database/prisma.service';
import { Injectable } from '@nestjs/common';

import { CreateCategoryUseCase } from './use-cases/create-category.usecase';
import { ListCategoryUsecase } from './use-cases/list-category.usecase';

@Injectable()
export class CategoryService {
  create = new CreateCategoryUseCase(this.prisma);
  list = new ListCategoryUsecase(this.prisma);

  constructor(private prisma: PrismaService) {}
}
