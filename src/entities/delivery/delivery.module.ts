import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { deliveryProviders } from './delivery.providers';
import { DeliveryService } from './delivery.service';

@Module({
  imports: [DatabaseModule],
  providers: [...deliveryProviders, DeliveryService],
})
export class DeliveryModule {}
