import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../category/category.entity';

@Entity('merchandise')
@ObjectType()
export class Merchandise {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ length: 30 })
  name: string;

  @Field(() => String)
  @Column('text')
  categoryName: string;

  @Field(() => Int)
  @Column('int')
  stockQuantity: number;

  @Field(() => Int)
  @Column('int')
  price: number;

  @Field(() => [Category])
  @Column()
  categories: Category[];

  @Field(() => Date)
  @Column()
  createdAt: Date;

  @Field(() => Date)
  @Column()
  updatedAt: Date;
}
