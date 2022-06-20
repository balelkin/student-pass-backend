"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const all_exception_filter_1 = __importDefault(require("./filters/all-exception.filter"));
const app_module_1 = __importDefault(require("./routes/app/app.module"));
const MongoDBStore = require('connect-mongodb-session')(express_session_1.default);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.default);
    app.useStaticAssets(path_1.join(__dirname, '..', 'src/public'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'src/views'));
    app.setViewEngine('hbs');
    app.enableCors({ origin: '*' });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new all_exception_filter_1.default());
    app.use(express_session_1.default({
        secret: process.env.PASSPORT_SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new MongoDBStore({
            uri: process.env.MONGODB_URL,
            collection: 'sessions',
        }),
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Api v1')
        .setDescription('The boilerplate API for nestjs devs')
        .setVersion('1.0')
        .addCookieAuth('connect.sid')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = process.env.SERVER_PORT || 3000;
    await app.listen(port, async () => {
        console.log(`The server is running on ${port} port: http://localhost:${port}/api`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map