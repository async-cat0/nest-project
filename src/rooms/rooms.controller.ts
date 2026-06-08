import { Controller, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomsDto } from './dto/create-rooms.dto';

@Controller('Rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}
  @Post()
  async create(dto: CreateRoomsDto) {
    return this.roomsService.create(dto);
  }
}
