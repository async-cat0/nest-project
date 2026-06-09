import { Controller, Post, Get } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomsDto } from './dto/create-rooms.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Post()
  async create(dto: CreateRoomsDto) {
    return this.roomsService.create(dto);
  }

  @Get('hotel/:id')
  async findHotelRooms(id: string) {
    return this.roomsService.findHotelRooms(Number(id));
  }
}
