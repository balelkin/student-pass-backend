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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_schema_1 = require("./schemas/users.schema");
const roles_decorator_1 = require("../../../decorators/roles.decorator");
const users_repository_1 = __importDefault(require("./users.repository"));
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(user) {
        return this.usersRepository.create(Object.assign(Object.assign({}, user), { role: roles_decorator_1.RolesEnum.user, verified: true }));
    }
    getByEmail(email) {
        return this.usersRepository.getByEmail(email);
    }
    async getVerifiedUserByEmail(email) {
        return this.usersRepository.getVerifiedUserByEmail(email);
    }
    getById(id) {
        return this.usersRepository.getById(id);
    }
    getVerifiedUserById(id) {
        return this.usersRepository.getVerifiedUserById(id);
    }
    async createIfDoesNotExist(user) {
        console.log(user);
        const foundUser = await this.usersRepository.getUnverifiedUserByEmail(user.email);
        if (!foundUser) {
            return this.usersRepository.create(Object.assign(Object.assign({}, user), { role: roles_decorator_1.RolesEnum.user, verified: true }));
        }
        return foundUser;
    }
    getAllVerified() {
        return this.usersRepository.getVerifiedUsers();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_repository_1.default])
], UsersService);
exports.default = UsersService;
//# sourceMappingURL=users.service.js.map