import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  merchandiseId: number;

  @Column('text')
  merchandiseName: string;

  @Column('int')
  quantity: number;

  @Column('int')
  paidPrice: number;
}
