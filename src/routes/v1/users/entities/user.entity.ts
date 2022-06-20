import { Types, Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

import { RolesEnum } from '@decorators/roles.decorator';

export default class UserEntity extends Document {
  @ApiProperty({ type: String })
  readonly _id: Types.ObjectId = new ObjectId();

  @ApiProperty({ type: String })
  readonly picture: string = '';

  @ApiProperty({ type: String })
  readonly firstName: string = '';

  @ApiProperty({ type: String })
  readonly lastName: string = '';

  @ApiProperty({ type: String })
  readonly email: string = '';

  @ApiProperty({ type: Boolean })
  readonly verified: boolean = false;

  @ApiProperty({ type: 'enum', enum: RolesEnum })
  readonly role: RolesEnum = RolesEnum.user;

  @ApiProperty({ type: String })
  middleName: string = '';

  @ApiProperty({ type: String })
  course: string = '';

  @ApiProperty({ type: String })
  hostel: string = '';

  @ApiProperty({ type: String })
  headman: string = '';

  @ApiProperty({ type: Number })
  room: number = 0;

  @ApiProperty({ type: String })
  phone: string = '';

  @ApiProperty({ type: String })
  parents: string = '';
}
