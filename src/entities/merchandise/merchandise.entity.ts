import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('merchandise')
export class Merchandise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column('text')
  categoryName: string;

  @Column('int')
  stock: number;
}
