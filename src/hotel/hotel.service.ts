import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Injectable()
export class HotelService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateHotelDto) {
    return this.prisma.hotel.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.hotel.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotel.findUnique({
      where: { id },
    });
  }
}
