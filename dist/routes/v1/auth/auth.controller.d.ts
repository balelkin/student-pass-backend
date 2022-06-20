import { Response, Request as ExpressRequest } from 'express';
import UsersService from '@v1/users/users.service';
import AuthService from './auth.service';
export default class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    googleAuth(): Promise<void>;
    googleAuthRedirect(req: ExpressRequest, res: Response): Promise<any>;
    logout(req: ExpressRequest): Promise<{}>;
}
