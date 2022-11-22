import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { orderProviders } from './order.providers';
import { OrderService } from './order.service';

@Module({
  imports: [DatabaseModule],
  providers: [...orderProviders, OrderService],
})
export class OrderModule {}
