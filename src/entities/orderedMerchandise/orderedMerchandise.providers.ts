/* eslint-disable @typescript-eslint/typedef */
import { DataSource } from 'typeorm';
import { OrderedMerchandise } from './orderedMerchandise.entity';

export const orderedMerchandiseProviders = [
  {
    provide: 'ORDEREDMERCHANDISE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderedMerchandise),
    inject: ['DATA_SOURCE'],
  },
];
