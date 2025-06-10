import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private riderCoordinateModel: Model<RiderCoordinate>,
  ) {}

  async saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinateModel.create(createCoordinateDTO);
  }
}
