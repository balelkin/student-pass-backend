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
const swagger_1 = require("@nestjs/swagger");
class UserProfileDto {
    constructor() {
        this.email = '';
        this.photos = [];
        this.emails = [];
        this.name = {
            givenName: null,
            familyName: null,
        };
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], UserProfileDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array }),
    __metadata("design:type", Array)
], UserProfileDto.prototype, "photos", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [] }),
    __metadata("design:type", Array)
], UserProfileDto.prototype, "emails", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], UserProfileDto.prototype, "name", void 0);
exports.default = UserProfileDto;
//# sourceMappingURL=user-profile.dto.js.map