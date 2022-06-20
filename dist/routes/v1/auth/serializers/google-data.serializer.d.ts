import { PassportSerializer } from '@nestjs/passport';
import UsersService from '@v1/users/users.service';
import UserEntity from '@v1/users/entities/user.entity';
export default class GoogleDataSerializer extends PassportSerializer {
    private readonly usersService;
    constructor(usersService: UsersService);
    serializeUser(user: UserEntity, done: CallableFunction): void;
    deserializeUser(user: UserEntity, done: CallableFunction): Promise<any>;
}
