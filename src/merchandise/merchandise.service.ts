import { Injectable } from '@nestjs/common';
import { Merchandise } from 'src/merchandise/merchandise.entity';
import { CreateMerchandiseInput } from './dto/create-merchandise.input';
// import { UpdateMerchandiseInput } from './dto/update-merchandise.input';

@Injectable()
export class MerchandiseService {
  create(createMerchandiseInput: CreateMerchandiseInput) {
    return createMerchandiseInput;
  }

  findAll(): Merchandise[] {
    const merchandise_1: Merchandise = new Merchandise();
    const merchandise_2: Merchandise = new Merchandise();

    merchandise_1.name = 'test1';
    merchandise_2.name = 'test2';
    return [merchandise_1, merchandise_2];
  }

  findOne(id: number): Merchandise {
    const merchandise_1: Merchandise = new Merchandise();

    merchandise_1.id = 1;
    merchandise_1.name = 'test1';

    return merchandise_1;
  }

  // update(id: number, updateMerchandiseInput: UpdateMerchandiseInput) {
  //   return `This action updates a #${id} merchandise`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} merchandise`;
  // }
}
