import { Query, Types } from 'mongoose';
import { User, UserDocument } from '@v1/users/schemas/users.schema';
import UserDto from './dto/user.dto';
import UsersRepository from './users.repository';
export default class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(user: UserDto): Promise<User>;
    getByEmail(email: string): Promise<User | null>;
    getVerifiedUserByEmail(email: string): Promise<import("mongoose").LeanDocument<UserDocument> | null>;
    getById(id: Types.ObjectId): Promise<User | null>;
    getVerifiedUserById(id: Types.ObjectId): Promise<User | null>;
    createIfDoesNotExist(user: any): Promise<User | null>;
    getAllVerified(): Query<UserDocument[], UserDocument>;
}
