/* eslint-disable @typescript-eslint/typedef */
import { DataSource } from 'typeorm';
import { PaymentInfo } from './paymentInfo.entity';

export const paymentInfoProviders = [
  {
    provide: 'PAYMENTINFO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PaymentInfo),
    inject: ['DATA_SOURCE'],
  },
];
