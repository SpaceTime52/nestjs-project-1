import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('delivery')
export class Delivery {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('int')
  orderId: number;

  @Field()
  @Column('text')
  address: string;

  @Field()
  @Column('text')
  telNumber: string;

  @Field()
  @Column('text')
  currentLocation: string;
}
