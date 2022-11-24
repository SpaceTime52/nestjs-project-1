import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { MerchandiseService } from './merchandise.service';
import { Merchandise } from '../../entities/merchandise/merchandise.entity';
import { CreateMerchandiseInput } from './dto/create-merchandise.input';

@Resolver(() => Merchandise)
export class MerchandiseResolver {
  constructor(private readonly merchandiseService: MerchandiseService) {}

  @Mutation(() => Merchandise)
  createMerchandise(
    @Args('createMerchandiseInput') createMerchandiseInput: CreateMerchandiseInput,
  ) {
    return this.merchandiseService.create(createMerchandiseInput);
  }

  @Query(() => [Merchandise], { name: 'allMerchandises' })
  findAll(): Merchandise[] {
    return this.merchandiseService.findAll();
  }

  @Query(() => Merchandise, { name: 'merchandiseById' })
  findOne(@Args('id', { type: () => Int }) id: number): Merchandise {
    return this.merchandiseService.findOne(id);
  }

  // @Mutation(() => Merchandise)
  // updateMerchandise(
  //   @Args('updateMerchandiseInput') updateMerchandiseInput: UpdateMerchandiseInput,
  // ) {
  //   return this.merchandiseService.update(updateMerchandiseInput.id, updateMerchandiseInput);
  // }

  // @Mutation(() => Merchandise)
  // removeMerchandise(@Args('id', { type: () => Int }) id: number) {
  //   return this.merchandiseService.remove(id);
  // }
}
