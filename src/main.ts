import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import cookieParser from 'cookie-parser';

import 'dotenv/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger();

  const PORT = process.env.PORT ?? 3000;

  app.use(cookieParser());

  await app.listen(PORT);

  logger.log(`server is running on: http://localhost:${PORT}`);
}

void bootstrap();
