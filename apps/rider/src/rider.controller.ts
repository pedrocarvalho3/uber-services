import { Controller, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(@Param('id') id: string) {
    return Promise.resolve({
      _id: id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
    });
  }
}
