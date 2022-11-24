import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field()
  id: number;

  @Field()
  merchandiseId: number;
}
