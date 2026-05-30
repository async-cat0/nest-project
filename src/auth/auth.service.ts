import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import { ExistingUserAtAuthException } from 'src/common/exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ExistingUserAtAuthException();
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
    };
  }

  async login(dto: LoginDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!existingUser) {
      throw new ExistingUserAtAuthException();
    }
    const isComparePassword = await bcrypt.compare(
      dto.password,
      existingUser.password,
    );
    if (!isComparePassword) {
      throw new UnauthorizedException('неверный логин или пароль');
    }

    const access_token = this.jwtService.sign({
      email: existingUser.email,
      id: existingUser.id,
    });

    return {
      access_token,
      email: existingUser.email,
      name: existingUser.name,
      id: existingUser.id,
    };
  }
}
