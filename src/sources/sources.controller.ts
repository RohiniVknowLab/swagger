import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

import { SourcesService } from './sources.service';
import { Source } from './sources.model';

@ApiUseTags('cats')
@Controller('sources')
export class SourcesController {
    constructor(private sourcesService: SourcesService){}

    @Post()
    @ApiResponse({ status: 201, description: 'The Source has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 500, description: 'Internal Server Error.'})
    async addSource(@Body() source: Source){
        return this.sourcesService.addSource(source);
    }

   
}
