import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { DeliveryService } from './delivery.service';
import { Delivery } from './delivery.entity';
import { CreateDeliveryInput } from './dto/create-delivery.input';

@Resolver(() => Delivery)
export class DeliveryResolver {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Mutation(() => Delivery)
  createDelivery(@Args('createDeliveryInput') createDeliveryInput: CreateDeliveryInput) {
    return this.deliveryService.create(createDeliveryInput);
  }

  @Query(() => [Delivery], { name: 'allDeliveries' })
  findAll() {
    return this.deliveryService.findAll();
  }

  @Query(() => Delivery, { name: 'deliveryById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.deliveryService.findOne(id);
  }

  // @Mutation(() => Delivery)
  // updateDelivery(@Args('updateDeliveryInput') updateDeliveryInput: UpdateDeliveryInput) {
  //   return this.deliveryService.update(updateDeliveryInput.id, updateDeliveryInput);
  // }

  // @Mutation(() => Delivery)
  // removeDelivery(@Args('id', { type: () => Int }) id: number) {
  //   return this.deliveryService.remove(id);
  // }
}
