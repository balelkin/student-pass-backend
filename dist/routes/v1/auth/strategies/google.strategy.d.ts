import { Strategy } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UserGooglePayload } from '../interfaces/user-google-payload.interface';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export default class GoogleStrategy extends GoogleStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(accessToken: string, refreshToken: string, profile: unknown, done: (err: null | Error, data: object | UserGooglePayload) => void): Promise<void>;
}
export {};
