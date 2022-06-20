import { Types, Document } from 'mongoose';
import { RolesEnum } from '@decorators/roles.decorator';
export default class UserEntity extends Document {
    readonly _id: Types.ObjectId;
    readonly picture: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly verified: boolean;
    readonly role: RolesEnum;
    middleName: string;
    course: string;
    hostel: string;
    headman: string;
    room: number;
    phone: string;
    parents: string;
}
