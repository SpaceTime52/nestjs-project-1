import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  merchandiseId: number;
}
