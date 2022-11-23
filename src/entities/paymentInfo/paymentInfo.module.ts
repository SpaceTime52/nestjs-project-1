import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { paymentInfoProviders } from './paymentInfo.providers';
import { PaymentInfoService } from './paymentInfo.service';

@Module({
  imports: [DatabaseModule],
  providers: [...paymentInfoProviders, PaymentInfoService],
})
export class PaymentInfoModule {}
