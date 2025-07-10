import { Body, Controller, Get, Post } from '@nestjs/common';
import { StadiumService } from './stadium.service';
import { CreateStadiumDto } from './stadium.dto';
import { Stadium } from './stadium.schema';

@Controller('stadiums')
export class StadiumController {
  constructor(private readonly stadiumService: StadiumService) {}

  @Post()
  async create(@Body() dto: CreateStadiumDto): Promise<Stadium> {
    console.log(`EVENT: stadium.created -> ${dto.name}`);
    return this.stadiumService.create(dto);
  }

  @Get()
  async findAll(): Promise<Stadium[]> {
    return this.stadiumService.findAll();
  }
}
