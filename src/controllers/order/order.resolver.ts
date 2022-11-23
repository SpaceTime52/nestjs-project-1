import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from '../../entities/order/order.entity';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  // @Mutation(() => Order)
  // createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
  //   return this.orderService.create(createOrderInput);
  // }

  @Query(() => [Order], { name: 'allOrders' })
  findAll() {
    console.log('allOrders serviced!');
    return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'orderById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    console.log('orderById serviced!');
    return this.orderService.findOne(id);
  }

  // @Mutation(() => Order)
  // updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
  //   return this.orderService.update(updateOrderInput.id, updateOrderInput);
  // }

  // @Mutation(() => Order)
  // removeOrder(@Args('id', { type: () => Int }) id: number) {
  //   return this.orderService.remove(id);
  // }
}
