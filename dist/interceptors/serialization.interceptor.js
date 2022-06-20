"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const serialization_decorator_1 = require("../decorators/serialization.decorator");
let SerializeInterceptor = class SerializeInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.map((args) => {
            const SerializeType = serialization_decorator_1.getSerializeType(context.getHandler());
            const entity = new SerializeType();
            if (Array.isArray(args)) {
                return Object.assign(entity, { data: args });
            }
            return Object.assign(entity, args);
        }));
    }
};
SerializeInterceptor = __decorate([
    common_1.Injectable()
], SerializeInterceptor);
exports.default = SerializeInterceptor;
//# sourceMappingURL=serialization.interceptor.js.map