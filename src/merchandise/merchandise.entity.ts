import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../category/category.entity';

@Entity('merchandise')
@ObjectType()
export class Merchandise {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column({ length: 30 })
  @Field(() => String, { nullable: true })
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Int)
  stockQuantity: number;

  @ManyToMany(() => Category)
  @Field(() => [Category], { nullable: true })
  categories?: Category[];

  @Column({ type: 'timestamp', nullable: true })
  @Field()
  createdAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Field()
  updatedAt?: Date;
}
