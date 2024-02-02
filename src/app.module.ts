import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category/category.module';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [BookModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
