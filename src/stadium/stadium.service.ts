import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stadium, StadiumDocument } from './stadium.schema';
import { CreateStadiumDto } from './stadium.dto';

@Injectable()
export class StadiumService {
  constructor(@InjectModel(Stadium.name) private stadiumModel: Model<StadiumDocument>) {}

  async create(dto: CreateStadiumDto): Promise<Stadium> {
    const created = new this.stadiumModel(dto);
    return created.save();
  }

  async findAll(): Promise<Stadium[]> {
    return this.stadiumModel.find().exec();
  }
}
