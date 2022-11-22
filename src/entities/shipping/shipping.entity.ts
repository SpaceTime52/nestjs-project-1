import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shipping')
export class Shipping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  orderId: number;

  @Column('text')
  address: string;

  @Column('text')
  telNumber: string;

  @Column('text')
  currentLocation: string;
}
