import { CreateDeliveryInput } from './create-delivery.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDeliveryInput extends PartialType(CreateDeliveryInput) {
  @Field()
  id: number;

  @Field()
  orderId: number;
}
