import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create.user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: CreateUserDto) {
    return this.authService.login(data);
  }

  @Post('register')
  async register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }
}
