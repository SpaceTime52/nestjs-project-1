import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Merchandise } from '../merchandise/merchandise.entity';
import { Order } from '../order/order.entity';

@ObjectType()
@Entity('orderedMerchandise')
export class OrderedMerchandise {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('int')
  quantity: number;

  @Field()
  @Column()
  merchandise: Merchandise;

  @Field(() => [Order])
  @Column()
  order: Order;

  @Field(() => Date)
  @Column()
  createdAt: Date;

  @Field(() => Date)
  @Column()
  updatedAt: Date;
}
