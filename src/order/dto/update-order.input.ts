import { CreateOrderInput } from './create-order.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field()
  id: number;

  @Field()
  merchandiseId: number;
}
