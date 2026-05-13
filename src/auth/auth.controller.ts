import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import type { RequestWithCookies } from '../common/types/RequestWithCookies';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: RequestWithCookies,
  ) {
    const result = await this.authService.login(dto);

    res.cookies('access_token', result.access_token, {
      httpOnly: true,
      secure: false,
    });
  }
}
