import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'Rider coordinates';
  }

  @Post()
  saveRiderCoordinates(@Body() createCoordinateDto: CreateCoordinatesDto) {
    return createCoordinateDto;
  }
}
