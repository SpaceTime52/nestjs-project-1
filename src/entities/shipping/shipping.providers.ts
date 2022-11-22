/* eslint-disable @typescript-eslint/typedef */
import { DataSource } from 'typeorm';
import { Shipping } from './shipping.entity';

export const shippingProviders = [
  {
    provide: 'SHIPPING_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Shipping),
    inject: ['DATA_SOURCE'],
  },
];
