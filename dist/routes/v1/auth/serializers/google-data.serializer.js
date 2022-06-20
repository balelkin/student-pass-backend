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
const passport_1 = require("@nestjs/passport");
const users_service_1 = __importDefault(require("../../users/users.service"));
const user_entity_1 = __importDefault(require("../../users/entities/user.entity"));
let GoogleDataSerializer = class GoogleDataSerializer extends passport_1.PassportSerializer {
    constructor(usersService) {
        super();
        this.usersService = usersService;
    }
    serializeUser(user, done) {
        done(null, user);
    }
    async deserializeUser(user, done) {
        const foundUser = await this.usersService.getVerifiedUserByEmail(user.email);
        if (!foundUser) {
            return done(new common_1.UnauthorizedException());
        }
        return done(null, Object.assign(Object.assign({}, user), { role: foundUser.role, _id: foundUser._id }));
    }
};
GoogleDataSerializer = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.default])
], GoogleDataSerializer);
exports.default = GoogleDataSerializer;
//# sourceMappingURL=google-data.serializer.js.map