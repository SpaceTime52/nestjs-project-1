import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
