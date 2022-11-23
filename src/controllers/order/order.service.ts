import { Injectable } from '@nestjs/common';
import { Order } from 'src/entities/order/order.entity';

@Injectable()
export class OrderService {
  // create(createOrderInput: CreateOrderInput) {
  //   return 'This action adds a new order';
  // }

  findAll(): Order[] {
    const order_1: Order = new Order();
    const order_2: Order = new Order();
    order_1.merchandiseId = 3;
    order_2.merchandiseId = 4;
    return [order_1, order_2];
  }

  findOne(id: number): Order {
    const order_1: Order = new Order();
    order_1.id = 1;
    order_1.merchandiseId = 1;
    return order_1;
  }

  // update(id: number, updateOrderInput: UpdateOrderInput) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
