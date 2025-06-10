import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}

  @Get()
  getRiderCoordinates() {
    return 'Rider coordinates';
  }

  @Post()
  async saveRiderCoordinates(
    @Body() createCoordinateDTO: CreateCoordinatesDTO,
  ) {
    return this.riderCoordinatesService.saveRiderCoordinates(
      createCoordinateDTO,
    );
  }
}
