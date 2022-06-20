"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = __importDefault(require("../users/users.service"));
const is_logged_guard_1 = __importDefault(require("../../../guards/is-logged.guard"));
const user_dto_1 = __importDefault(require("../users/dto/user.dto"));
const google_auth_guard_1 = __importDefault(require("./guards/google-auth.guard"));
const auth_service_1 = __importDefault(require("./auth.service"));
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async googleAuth() { }
    async googleAuthRedirect(req, res) {
        if (!req.user) {
            throw new common_1.ForbiddenException('No user from google');
        }
        const _a = req.user, { accessToken, refreshToken } = _a, user = __rest(_a, ["accessToken", "refreshToken"]);
        const foundUser = await this.usersService.getVerifiedUserByEmail(user.email);
        if (!foundUser) {
            const saveUser = await this.usersService.createIfDoesNotExist(user);
            return saveUser;
        }
        res.render('profile', { foundUser });
        return user;
    }
    async logout(req) {
        console.log('logout');
        await req.logout();
        return {};
    }
};
__decorate([
    swagger_1.ApiMovedPermanentlyResponse({ description: 'Does redirect to route' }),
    common_1.Get(),
    common_1.UseGuards(google_auth_guard_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    swagger_1.ApiOkResponse({
        description: 'User registered/authorized successfully',
    }),
    swagger_1.ApiInternalServerErrorResponse({
        schema: {
            type: 'object',
            example: {
                message: 'string',
                details: {},
            },
        },
        description: 'InternalServerError. User was not authorized/registered',
    }),
    common_1.UseGuards(google_auth_guard_1.default),
    common_1.Get('redirect'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    swagger_1.ApiNoContentResponse({ description: 'No content. 204' }),
    common_1.UseGuards(is_logged_guard_1.default),
    common_1.Delete('logout'),
    common_1.HttpCode(204),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    swagger_1.ApiTags('Auth'),
    common_1.Controller('google'),
    __metadata("design:paramtypes", [auth_service_1.default,
        users_service_1.default])
], AuthController);
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map