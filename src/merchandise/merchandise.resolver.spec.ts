import { Test, TestingModule } from '@nestjs/testing';
import { MerchandiseResolver } from './merchandise.resolver';
import { MerchandiseService } from './merchandise.service';

describe('MerchandiseResolver', () => {
  let resolver: MerchandiseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchandiseResolver, MerchandiseService],
    }).compile();

    resolver = module.get<MerchandiseResolver>(MerchandiseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
