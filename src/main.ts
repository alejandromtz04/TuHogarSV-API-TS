import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('tu-hogar-sv')
  await app.listen(3000);

  app.enableCors({
    origin: "example",
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
    optionsSuccessStatus: 204
  })

}
bootstrap();
