import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMerchandiseInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
