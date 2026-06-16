import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../dist/src/prisma/prisma.service';
import { UsersCreateDto } from './dto/users-create.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: UsersCreateDto){
    return this.prisma.user.create({
      data: dto,
    })
  }

  findMany(){
    return this.prisma.user.findMany()
  }

}