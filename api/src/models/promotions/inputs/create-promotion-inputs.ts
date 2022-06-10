import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePromotionInputs {
  @Field()
  name: string;
  @Field({ nullable: true })
  description: string;
  @Field(() => Float)
  discount: number;
}
