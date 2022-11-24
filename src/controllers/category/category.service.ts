import { Injectable } from '@nestjs/common';
import { Category } from 'src/entities/category/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
// import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  create(createCategoryInput: CreateCategoryInput) {
    return createCategoryInput;
  }

  findAll(): Category[] {
    const category_1: Category = new Category();
    const category_2: Category = new Category();
    category_1.name = 'test1';
    category_2.name = 'test2';
    return [category_1, category_2];
  }

  findOne(id: number): Category {
    const category_1: Category = new Category();
    category_1.id = 1;
    category_1.name = 'test1';
    return category_1;
  }

  // update(id: number, updateCategoryInput: UpdateCategoryInput) {
  //   return `This action updates a #${id} category`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
