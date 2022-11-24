import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDeliveryInput {
  @Field()
  id: number;

  @Field()
  orderId: number;
}
