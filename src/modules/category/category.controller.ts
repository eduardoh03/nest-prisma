import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  async create(@Body(ValidationPipe) data: CategoryDto) {
    return this.categoryService.create.execute(data);
  }
  @Get()
  async list() {
    return this.categoryService.list.execute();
  }
}
