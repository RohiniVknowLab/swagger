import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SourcesService } from './sources.service';
import { SourcesController } from './sources.controller';
import { SourceSchema } from './sources.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Source', schema: SourceSchema}])],
  providers: [SourcesService],
  controllers: [SourcesController]
})
export class SourcesModule {}
