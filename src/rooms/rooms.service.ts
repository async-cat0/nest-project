import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomsDto } from './dto/create-rooms.dto';

@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) {}

   async create(dto: CreateRoomsDto) {
    return this.prisma.room.create({
      data: dto,
    });
  }

  async findHotelRooms(id: number) {
    const hotel = await this.prisma.hotel.findUnique({
      where: { id },
    });

    if (!hotel) {
      throw new Error('not found');
    }

    return this.prisma.room.findMany({
      where: { hotelId: id },
    });
  }
}
