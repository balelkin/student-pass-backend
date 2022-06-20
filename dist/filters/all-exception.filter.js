"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const exception_response_interface_1 = require("../interfaces/exception-response.interface");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const exceptionResponse = exception.getResponse
            ? exception.getResponse()
            : null;
        const status = exception.getStatus ? exception.getStatus() : 500;
        const mongodbCodes = {
            bulkWriteError: 11000,
        };
        if (exception.code === mongodbCodes.bulkWriteError) {
            return res.status(common_1.HttpStatus.CONFLICT).json({
                message: exceptionResponse === null || exceptionResponse === void 0 ? void 0 : exceptionResponse.message,
                error: exceptionResponse === null || exceptionResponse === void 0 ? void 0 : exceptionResponse.error,
            });
        }
        return res.status(status).json({
            message: exceptionResponse === null || exceptionResponse === void 0 ? void 0 : exceptionResponse.message,
            error: exceptionResponse === null || exceptionResponse === void 0 ? void 0 : exceptionResponse.error,
        });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.default = AllExceptionsFilter;
//# sourceMappingURL=all-exception.filter.js.map