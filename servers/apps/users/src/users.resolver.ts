import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterRepose } from './types/user.types';
import { RegisterDto } from './dto/user.dto';
import { Response } from 'express';
import { BadGatewayException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterRepose)
  async register(
    @Args('reginsterInput') registerDto: RegisterDto,
    @Context()
    context: {
      res: Response;
    },
  ): Promise<RegisterRepose> {
    if (!registerDto.email || !registerDto.name || !registerDto.password) {
      throw new BadGatewayException('Please fill all the fields');
    }

    const user = await this.userService.register(registerDto);
    return {
      user,
    };
  }

  @Query(() => [User])
  async getAllUsers() {
    return this.userService.getUsers();
  }
}
