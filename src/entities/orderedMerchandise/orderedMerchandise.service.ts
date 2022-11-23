import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderedMerchandise } from './orderedMerchandise.entity';

@Injectable()
export class OrderedMerchandiseService {
  constructor(
    @Inject('ORDEREDMERCHANDISE_REPOSITORY')
    private orderedMerchandiseRepository: Repository<OrderedMerchandise>,
  ) {}

  async findAll(): Promise<OrderedMerchandise[]> {
    return this.orderedMerchandiseRepository.find();
  }
}
