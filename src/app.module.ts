import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './cats/cats.module';
import { SourcesModule } from './sources/sources.module';


@Module({
  imports: [CatsModule, SourcesModule, MongooseModule.forRoot('mongodb://localhost:27017/cats-db')],
})


export class AppModule {}
