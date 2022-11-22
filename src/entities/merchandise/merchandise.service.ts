import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Merchandise } from './merchandise.entity';

@Injectable()
export class MerchandiseService {
  constructor(
    @Inject('MERCHANDISE_REPOSITORY')
    private merchandiseRepository: Repository<Merchandise>,
  ) {}

  async findAll(): Promise<Merchandise[]> {
    return this.merchandiseRepository.find();
  }
}
