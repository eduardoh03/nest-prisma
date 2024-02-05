import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { BookCreateDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post()
  async create(@Body(ValidationPipe) data: BookCreateDto) {
    return this.bookService.create.execute(data);
  }
}
