import { ObjectId } from 'mongodb';
import { RolesEnum } from '@decorators/roles.decorator';
export declare class UserResponseEntity {
    _id: ObjectId;
    picture: string;
    firstName: string;
    middleName: string;
    lastName: string;
    course: string;
    hostel: string;
    headman: string;
    room: number;
    phone: string;
    role: RolesEnum;
    email: string;
    parents: string;
    verified: boolean;
}
export default class AllUsersResponseEntity {
    data?: UserResponseEntity[];
}
