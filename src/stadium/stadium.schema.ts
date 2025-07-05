import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stadium {
  @Prop({ required: true })
  name!: string;

  @Prop()
  location!: string;
}

export type StadiumDocument = Stadium & Document;
export const StadiumSchema = SchemaFactory.createForClass(Stadium);
