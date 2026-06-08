import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomsDto } from './dto/create-rooms.dto';

@Injectable()
export class RoomsService {
  constructor(private readonly Prisma: PrismaService) {}
  create(dto: CreateRoomsDto) {
    return this.Prisma.room.create({
      data: dto,
    });
  }

  async findHotelRooms(id: number) {
    const hotel = await this.Prisma.hotel.findUnique({
      where: { id },
    });

    if (!hotel) {
      throw new Error('not found');
    }

    return this.Prisma.room.findMany({
      where: { hotelId: id },
    });
  }
}
