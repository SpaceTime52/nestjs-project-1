import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Merchandise } from '../merchandise/merchandise.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity('category')
@ObjectType()
export class Category {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ length: 30 })
  name: string;

  @Field(() => [Merchandise])
  @Column()
  merchandises: Merchandise[];

  @Field(() => Date)
  @Column()
  createdAt: Date;

  @Field(() => Date)
  @Column()
  updatedAt: Date;
}
