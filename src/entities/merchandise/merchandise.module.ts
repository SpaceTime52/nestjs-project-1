import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { merchandiseProviders } from './merchandise.providers';
import { MerchandiseService } from './merchandise.service';

@Module({
  imports: [DatabaseModule],
  providers: [...merchandiseProviders, MerchandiseService],
})
export class MerchandiseModule {}
