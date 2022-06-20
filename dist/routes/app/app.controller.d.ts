import UserEntity from '@v1/users/entities/user.entity';
import { Response } from 'express';
import AppService from './app.service';
export default class AppController {
    private readonly appService;
    constructor(appService: AppService);
    root(user: UserEntity, res: Response): void;
}
