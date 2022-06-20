"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = __importDefault(require("./app.controller"));
const app_service_1 = __importDefault(require("./app.service"));
const v1_module_1 = __importDefault(require("../v1/v1.module"));
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL, {
                autoReconnect: true,
                reconnectTries: Number.MAX_VALUE,
                reconnectInterval: 1000,
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            v1_module_1.default,
        ],
        controllers: [app_controller_1.default],
        providers: [app_service_1.default],
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=app.module.js.map