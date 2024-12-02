import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // 注册用户
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const user = {
      name,
      email,
      password,
    };
    return user;
  }

  // 登录用户
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    };
    return user;
  }

  // 获取所有用户
  async getUsers() {
    const users = [
      {
        id: '123',
        name: 'test',
        email: 'test@qq.com',
        password: '123456',
      },
    ];
    return users;
  }
}
