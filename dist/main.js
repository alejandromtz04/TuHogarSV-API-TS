"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.setGlobalPrefix('tu-hogar-sv');
    await app.listen(3000);
    app.enableCors({
        origin: "example",
        methods: 'GET, POST, PUT, PATCH, DELETE',
        allowedHeaders: 'Content-Type, Accept',
        credentials: true,
        optionsSuccessStatus: 204
    });
}
bootstrap();
//# sourceMappingURL=main.js.map