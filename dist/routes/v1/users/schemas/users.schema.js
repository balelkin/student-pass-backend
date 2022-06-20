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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const roles_decorator_1 = require("../../../../decorators/roles.decorator");
let User = class User {
    constructor() {
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
};
__decorate([
    mongoose_1.Prop({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "picture", void 0);
__decorate([
    mongoose_1.Prop({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    mongoose_1.Prop({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    mongoose_1.Prop({
        required: true,
        unique: true,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    mongoose_1.Prop({
        type: roles_decorator_1.RolesEnum,
        required: false,
        default: roles_decorator_1.RolesEnum.user,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    mongoose_1.Prop({
        type: String,
        required: false,
        default: 'ivanov',
    }),
    __metadata("design:type", String)
], User.prototype, "middleName", void 0);
__decorate([
    mongoose_1.Prop({
        type: String,
        required: false,
        default: '0',
    }),
    __metadata("design:type", String)
], User.prototype, "course", void 0);
__decorate([
    mongoose_1.Prop({
        type: String,
        required: false,
        default: '0',
    }),
    __metadata("design:type", String)
], User.prototype, "hostel", void 0);
__decorate([
    mongoose_1.Prop({
        type: String,
        required: false,
        default: 'ivanov',
    }),
    __metadata("design:type", String)
], User.prototype, "headman", void 0);
__decorate([
    mongoose_1.Prop({
        type: String,
        required: false,
        default: 0,
    }),
    __metadata("design:type", Number)
], User.prototype, "room", void 0);
__decorate([
    mongoose_1.Prop({
        type: String,
        required: false,
        default: '0998887766',
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop({
        type: String,
        required: false,
        default: 'ivanov',
    }),
    __metadata("design:type", String)
], User.prototype, "parents", void 0);
User = __decorate([
    mongoose_1.Schema()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User).set('versionKey', false);
//# sourceMappingURL=users.schema.js.map