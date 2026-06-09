import { Controller, Get, Post } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelService } from './hotel.service';

@Controller('hotels')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post()
  async create(dto: CreateHotelDto) {
    return this.hotelService.create(dto);
  }

  @Get()
  async findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  async findOne(id: number) {
    return this.hotelService.findOne(id);
  }
}
