import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

import { CatsService } from './cats.service';
import { Cat } from './cats.model';

@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    @ApiResponse({ status: 201, description: 'The Cat has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiResponse({ status: 500, description: 'Internal Server Error.'})
    async addReport(@Body() cat: Cat){
        return this.catsService.addCat(cat);
    }

   
}
