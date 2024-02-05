import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateBookUseCase } from './use-cases/create-book.usecase';

@Injectable()
export class BookService {
  create = new CreateBookUseCase(this.prisma);

  constructor(private prisma: PrismaService) {}
}
