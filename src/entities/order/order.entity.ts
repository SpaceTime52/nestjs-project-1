import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Delivery } from '../delivery/delivery.entity';
import { OrderedMerchandise } from '../orderedMerchandise/orderedMerchandise.entity';
import { PaymentInfo } from '../paymentInfo/paymentInfo.entity';

enum OrderStatus {
  UNPAID = 'UNPAID',
  PAID = 'PAID',
  SHIPPING = 'SHIPPING',
}

@ObjectType()
@Entity('order')
export class Order {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  merchandiseId: number;

  @Field()
  @Column()
  status: OrderStatus;

  @Field(() => [OrderedMerchandise])
  @Column()
  orderedMerchandises: OrderedMerchandise[];

  @Field()
  @Column()
  paymentInfo: PaymentInfo;

  @Field()
  @Column()
  delivery: Delivery;

  @Field(() => Date)
  @Column()
  createdAt: Date;

  @Field(() => Date)
  @Column()
  updatedAt: Date;
}
