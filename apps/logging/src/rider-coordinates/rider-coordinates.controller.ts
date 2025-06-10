import { Controller, Get, Param, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}

  @Get(':id')
  async getRiderCoordinates(@Param('id') id: string) {
    return this.riderCoordinatesService.getRiderCoordinates(id);
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
