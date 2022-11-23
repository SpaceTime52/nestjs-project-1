import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database.module';
import { categoryProviders } from './category.providers';
import { CategoryService } from './category.service';

@Module({
  imports: [DatabaseModule],
  providers: [...categoryProviders, CategoryService],
})
export class CategoryModule {}
