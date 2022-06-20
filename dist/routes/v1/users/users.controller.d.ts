import { Response } from 'express';
import { UserDocument } from '@v1/users/schemas/users.schema';
import UserEntity from './entities/user.entity';
import UsersService from './users.service';
export default class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllVerified(): Promise<UserDocument[]>;
    getById(user: UserEntity, res: Response): Promise<void>;
}
