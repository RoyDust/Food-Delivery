import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({
    message: 'Name is required',
  })
  @IsString({
    message: 'Name must be a string',
  })
  name: string;

  @Field()
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @Field()
  @IsNotEmpty({
    message: 'Password is required',
  })
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}

export class LoginDto {
  @Field()
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @Field()
  @IsNotEmpty({
    message: 'Password is required',
  })
  password: string;
}
