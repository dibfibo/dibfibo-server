import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(
        private Cats: CatsService
    ) {

    }

  @Post()
  create(@Body() dto: CreateCatDto) {
    return this.Cats.create(dto)
  }

  @Get()
  findAll() {
    return this.Cats.findAll()
  }
  
}
