import {
  Type,
  Transform,
} from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ObjectId } from 'mongodb';
import { RolesEnum } from '@decorators/roles.decorator';

export class UserResponseEntity {
  @Transform(({ value }) => value.toString(), { toPlainOnly: true })
  _id: ObjectId = new ObjectId();

  picture: string = '';

  firstName: string = '';

  middleName: string = '';

  lastName: string = '';

  course: string = '';

  hostel: string = '';

  headman: string = '';

  room: number = 0;

  phone: string = '';

  role: RolesEnum = RolesEnum.user;

  email: string = '';

  parents: string = '';

  verified: boolean = true;
}

export default class AllUsersResponseEntity {
  @ValidateNested({ each: true })
  @Type(() => UserResponseEntity)
  data?: UserResponseEntity[] = []
}
