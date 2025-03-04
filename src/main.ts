import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loger = new Logger('main');

  app.setGlobalPrefix('api');


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );



  await app.listen(process.env.HOST_PORT ?? 3000);
  loger.log(`app corriendo en el peurto ${process.env.HOST_PORT}`);

}
bootstrap();
