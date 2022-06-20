import { Model, Query, Types } from 'mongoose';
import { User, UserDocument } from '@v1/users/schemas/users.schema';
export default class UsersRepository {
    private usersModel;
    constructor(usersModel: Model<UserDocument>);
    create(user: User): Promise<User>;
    getByEmail(email: string): Promise<User | null>;
    getVerifiedUserById(id: Types.ObjectId): Promise<User | null>;
    getById(id: Types.ObjectId): Promise<User | null>;
    getVerifiedUserByEmail(email: string): Promise<import("mongoose").LeanDocument<UserDocument> | null>;
    getUnverifiedUserByEmail(email: string): Promise<import("mongoose").LeanDocument<UserDocument> | null>;
    getAll(): Query<UserDocument[], UserDocument>;
    getVerifiedUsers(): Query<UserDocument[], UserDocument>;
}
