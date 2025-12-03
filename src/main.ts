import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API MetFlight Radar')
    .setDescription('Dokumentasi API MetFlight Radar')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.use('/openapi.json', (req, res) => res.json(document));

  app.use(
    '/docs',
    apiReference({
      content: document,
      theme: 'default',
    }),
  );

  await app.listen(3000);
}
bootstrap();
