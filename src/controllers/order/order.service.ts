import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  // create(createOrderInput: CreateOrderInput) {
  //   return 'This action adds a new order';
  // }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  // update(id: number, updateOrderInput: UpdateOrderInput) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}