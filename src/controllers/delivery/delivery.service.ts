import { Injectable } from '@nestjs/common';
import { Delivery } from 'src/entities/delivery/delivery.entity';

@Injectable()
export class DeliveryService {
  // create(createDeliveryInput: CreateDeliveryInput) {
  //   return 'This action adds a new delivery';
  // }

  findAll(): Delivery[] {
    const delivery_1: Delivery = new Delivery();
    const delivery_2: Delivery = new Delivery();
    delivery_1.orderId = 3;
    delivery_2.orderId = 4;
    return [delivery_1, delivery_2];
  }

  findOne(id: number): Delivery {
    const delivery_1: Delivery = new Delivery();
    delivery_1.id = 1;
    delivery_1.orderId = 5;
    return delivery_1;
  }

  // update(id: number, updateDeliveryInput: UpdateDeliveryInput) {
  //   return `This action updates a #${id} delivery`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} delivery`;
  // }
}
