import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { shippingProviders } from './shipping.providers';
import { ShippingService } from './shipping.service';

@Module({
  imports: [DatabaseModule],
  providers: [...shippingProviders, ShippingService],
})
export class ShippingModule {}
