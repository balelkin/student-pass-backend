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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_user_decorator_1 = __importDefault(require("../../decorators/request-user.decorator"));
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = __importDefault(require("../v1/users/entities/user.entity"));
const app_service_1 = __importDefault(require("./app.service"));
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    root(user, res) {
        if (user) {
            console.log(user);
            res.redirect('/v1/users/profile');
        }
        else {
            res.render('index');
        }
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Displays hello message' }),
    common_1.Get(),
    __param(0, request_user_decorator_1.default()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.default, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
AppController = __decorate([
    swagger_1.ApiTags('App'),
    common_1.Controller('/'),
    __metadata("design:paramtypes", [app_service_1.default])
], AppController);
exports.default = AppController;
//# sourceMappingURL=app.controller.js.map