import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { RolesEnum } from '@decorators/roles.decorator';

@Schema()
export class User {
  @Prop({
    required: true,
    type: String,
  })
  picture: string = '';

  @Prop({
    required: true,
    type: String,
  })
  firstName: string = '';

  @Prop({
    required: true,
    type: String,
  })
  lastName: string = '';

  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  email: string = '';

  @Prop({
    type: Boolean,
  })
  verified: boolean = false;

  @Prop({
    type: RolesEnum,
    required: false,
    default: RolesEnum.user,
  })
  role: RolesEnum = RolesEnum.user;

  @Prop({
    type: String,
    required: false,
    default: 'ivanov',
  })
  middleName: string = '';

  @Prop({
    type: String,
    required: false,
    default: '0',
  })
  course: string = '';

  @Prop({
    type: String,
    required: false,
    default: '0',
  })
  hostel: string = '';

  @Prop({
    type: String,
    required: false,
    default: 'ivanov',
  })
  headman: string = '';

  @Prop({
    type: String,
    required: false,
    default: 0,
  })
  room: number = 0;

  @Prop({
    type: String,
    required: false,
    default: '0998887766',
  })
  phone: string = '';

  @Prop({
    type: String,
    required: false,
    default: 'ivanov',
  })
  parents: string = ''
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User).set('versionKey', false);
