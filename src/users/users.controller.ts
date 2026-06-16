import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersCreateDto } from './dto/users-create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSerivce: UsersService) {}

  @Post()
  async create(@Body() dto: UsersCreateDto){
    return this.usersSerivce.create(dto)
  }

  @Get()
  async findMany(){
    return this.usersSerivce.findMany()
  }
}