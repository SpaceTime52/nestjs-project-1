import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('paymentInfo')
export class PaymentInfo {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  pgId: number;

  @Field()
  @Column('int')
  amount: number;

  @Field(() => Date)
  @Column()
  paidAt: Date;
}
