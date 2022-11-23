/* eslint-disable @typescript-eslint/typedef */
import { DataSource } from 'typeorm';
import { Delivery } from './delivery.entity';

export const deliveryProviders = [
  {
    provide: 'DELIVERY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Delivery),
    inject: ['DATA_SOURCE'],
  },
];
