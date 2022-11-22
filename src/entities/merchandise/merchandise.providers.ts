/* eslint-disable @typescript-eslint/typedef */
import { DataSource } from 'typeorm';
import { Merchandise } from './merchandise.entity';

export const merchandiseProviders = [
  {
    provide: 'MERCHANDISE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Merchandise),
    inject: ['DATA_SOURCE'],
  },
];
