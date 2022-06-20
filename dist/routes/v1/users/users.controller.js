"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const request_user_decorator_1 = __importDefault(require("../../../decorators/request-user.decorator"));
const roles_decorator_1 = require("../../../decorators/roles.decorator");
const is_logged_guard_1 = __importDefault(require("../../../guards/is-logged.guard"));
const roles_guard_1 = __importDefault(require("../../../guards/roles.guard"));
const users_schema_1 = require("./schemas/users.schema");
const serialization_decorator_1 = __importDefault(require("../../../decorators/serialization.decorator"));
const wrap_response_interceptor_1 = __importDefault(require("../../../interceptors/wrap-response.interceptor"));
const user_response_entity_1 = __importStar(require("./entities/user-response.entity"));
const user_entity_1 = __importDefault(require("./entities/user.entity"));
const users_service_1 = __importDefault(require("./users.service"));
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getAllVerified() {
        return this.usersService.getAllVerified();
    }
    async getById(user, res) {
        const foundUser = await this.usersService.getVerifiedUserById(user._id);
        if (!foundUser) {
            throw new common_1.NotFoundException('The user does not exist');
        }
        res.render('profile', { foundUser });
    }
};
__decorate([
    swagger_1.ApiOkResponse({
        type: [user_entity_1.default],
        description: 'Returns all verified users',
    }),
    swagger_1.ApiUnauthorizedResponse({
        description: '401. UnauthorizedError',
    }),
    common_1.Get(),
    common_1.UseGuards(roles_guard_1.default),
    serialization_decorator_1.default(user_response_entity_1.default),
    roles_decorator_1.Roles(roles_decorator_1.RolesEnum.admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllVerified", null);
__decorate([
    swagger_1.ApiOkResponse({
        type: user_entity_1.default,
        description: 'Returns a found user',
    }),
    swagger_1.ApiNotFoundResponse({ description: '404...' }),
    common_1.Get('/profile'),
    serialization_decorator_1.default(user_response_entity_1.UserResponseEntity),
    common_1.UseGuards(is_logged_guard_1.default),
    __param(0, request_user_decorator_1.default()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.default, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getById", null);
UsersController = __decorate([
    swagger_1.ApiTags('users'),
    common_1.UseInterceptors(wrap_response_interceptor_1.default),
    common_1.Controller(),
    __metadata("design:paramtypes", [users_service_1.default])
], UsersController);
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map