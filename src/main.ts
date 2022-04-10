import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './configs/helper/validate.pipe';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global prefix
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());

  const config = new DocumentBuilder()
    .setTitle('Assignment Project')
    .setDescription('Assignment API description')
    .setVersion('1.0')
    .addTag('Assignment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/doc', app, document);

  await app.listen(3000);
}
bootstrap();
