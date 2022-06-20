import { Document } from 'mongoose';
import { RolesEnum } from '@decorators/roles.decorator';
export declare class User {
    picture: string;
    firstName: string;
    lastName: string;
    email: string;
    verified: boolean;
    role: RolesEnum;
    middleName: string;
    course: string;
    hostel: string;
    headman: string;
    room: number;
    phone: string;
    parents: string;
}
export declare type UserDocument = User & Document;
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any>, undefined, {}>;
