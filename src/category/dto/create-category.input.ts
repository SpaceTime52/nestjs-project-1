import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
