import { Module } from '@nestjs/common';
import { MerchandiseService } from './merchandise.service';
import { MerchandiseResolver } from './merchandise.resolver';

@Module({
  providers: [MerchandiseResolver, MerchandiseService],
})
export class MerchandiseModule {}
