import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomsDto } from './dto/create-rooms.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Post()
  async create(@Body() dto: CreateRoomsDto) {
    return this.roomsService.create(dto);
  }

  @Get('hotel/:id')
  async findHotelRooms(@Param('id') id: string) {
    return this.roomsService.findHotelRooms(Number(id));
  }
}
