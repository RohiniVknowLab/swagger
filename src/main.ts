import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { CatsModule } from './cats/cats.module';
import { SourcesModule } from './sources/sources.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  


  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .build();
  const catDocument = SwaggerModule.createDocument(app, options,{
    include: [CatsModule],
  });
  SwaggerModule.setup('api/cats', app, catDocument);


  const secondOptions = new DocumentBuilder()
    .setTitle('Sources example')
    .setDescription('The sources API description')
    .setVersion('1.0')
    .build();
  const sourceDocument = SwaggerModule.createDocument(app, secondOptions, {
    include: [SourcesModule],
  });
  SwaggerModule.setup('api/sources', app, sourceDocument);  


  await app.listen(3000);
}
bootstrap();
