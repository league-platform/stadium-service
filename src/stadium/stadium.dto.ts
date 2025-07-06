import { ApiProperty } from '@nestjs/swagger';

export class CreateStadiumDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  location: string;
}
