import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Delivery } from './delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @Inject('DELIVERY_REPOSITORY')
    private deliveryRepository: Repository<Delivery>,
  ) {}

  async findAll(): Promise<Delivery[]> {
    return this.deliveryRepository.find();
  }
}
