import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { orderedMerchandiseProviders } from './orderedMerchandise.providers';
import { OrderedMerchandiseService } from './orderedMerchandise.service';

@Module({
  imports: [DatabaseModule],
  providers: [...orderedMerchandiseProviders, OrderedMerchandiseService],
})
export class OrderedMerchandiseModule {}
