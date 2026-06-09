import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from '../../generated/prisma/client';

@Injectable()
export class HotelService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateHotelDto) {
    return this.prisma.hotel.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.hotel.findMany();
  }

  async findOne(id: number) {
    const hotel = await this.prisma.hotel.findUnique({
      where: { id },
    });

    if (!hotel) {
      throw new Error('Not found');
    }

    return hotel;
  }
}
