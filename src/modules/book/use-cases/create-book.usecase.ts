import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BookCreateDto } from '../dto/book.dto';
import { Book } from '@prisma/client';

@Injectable()
export class CreateBookUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(data: BookCreateDto): Promise<Book> {
    return this.prismaService.book.create({ data });
  }
}
