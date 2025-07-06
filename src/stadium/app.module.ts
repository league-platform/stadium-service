import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StadiumController } from './stadium.controller';
import { StadiumService } from './stadium.service';
import { Stadium, StadiumSchema } from './stadium.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://mongo:27017/stadium_db'),
    MongooseModule.forFeature([{ name: Stadium.name, schema: StadiumSchema }])
  ],
  controllers: [StadiumController],
  providers: [StadiumService],
})
export class AppModule {}
