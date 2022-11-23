import { CreateMerchandiseInput } from './create-merchandise.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMerchandiseInput extends PartialType(CreateMerchandiseInput) {
  @Field(() => Int)
  id: number;
}
