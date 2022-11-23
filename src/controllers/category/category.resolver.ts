import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from '../../entities/category/category.entity';
// import { CreateCategoryInput } from './dto/create-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  // @Mutation(() => Category)
  // createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
  //   return this.categoryService.create(createCategoryInput);
  // }

  @Query(() => [Category], { name: 'allCategories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { name: 'categoryById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.findOne(id);
  }

  // @Mutation(() => Category)
  // updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
  //   return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  // }

  // @Mutation(() => Category)
  // removeCategory(@Args('id', { type: () => Int }) id: number) {
  //   return this.categoryService.remove(id);
  // }
}
