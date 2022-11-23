import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMerchandiseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
