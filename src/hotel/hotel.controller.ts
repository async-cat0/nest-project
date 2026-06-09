import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelService } from './hotel.service';

@Controller('hotels')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post()
  async create(@Body() dto: CreateHotelDto) {
    return this.hotelService.create(dto);
  }

  @Get()
  async findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hotelService.findOne(Number(id));
  }
}
