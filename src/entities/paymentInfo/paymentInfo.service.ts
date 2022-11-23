import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaymentInfo } from './paymentInfo.entity';

@Injectable()
export class PaymentInfoService {
  constructor(
    @Inject('PAYMENTINFO_REPOSITORY')
    private paymentInfoRepository: Repository<PaymentInfo>,
  ) {}

  async findAll(): Promise<PaymentInfo[]> {
    return this.paymentInfoRepository.find();
  }
}
