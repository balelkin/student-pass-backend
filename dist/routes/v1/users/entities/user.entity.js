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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
const roles_decorator_1 = require("../../../../decorators/roles.decorator");
class UserEntity extends mongoose_1.Document {
    constructor() {
        super(...arguments);
        this._id = new mongodb_1.ObjectId();
        this.picture = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.verified = false;
        this.role = roles_decorator_1.RolesEnum.user;
        this.middleName = '';
        this.course = '';
        this.hostel = '';
        this.headman = '';
        this.room = 0;
        this.phone = '';
        this.parents = '';
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UserEntity.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "picture", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Boolean }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "verified", void 0);
__decorate([
    swagger_1.ApiProperty({ type: 'enum', enum: roles_decorator_1.RolesEnum }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "middleName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "course", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "hostel", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "headman", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], UserEntity.prototype, "room", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "parents", void 0);
exports.default = UserEntity;
//# sourceMappingURL=user.entity.js.map