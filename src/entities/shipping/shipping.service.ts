import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Shipping } from './shipping.entity';

@Injectable()
export class ShippingService {
  constructor(
    @Inject('SHIPPING_REPOSITORY')
    private shippingRepository: Repository<Shipping>,
  ) {}

  async findAll(): Promise<Shipping[]> {
    return this.shippingRepository.find();
  }
}
