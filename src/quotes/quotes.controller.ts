import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.create(createQuoteDto);
  }

  /* 
  * Create multiple quotes at the same time
  */
  @Post('/multi')
  createMany(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.createMany(createQuoteDto);
  }

  /* 
  * All Quotes
  * ENDPOINT: /quotes
  */
  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  /* 
  * Random Quotes
  * ENDPOINT: /quotes/random
   */
  @Get('/random')
  findRandom() {
    return this.quotesService.findRandom();
  }

  /* 
  * Get all by category
  * ENDPOINT: /quotes/<categoryId>
  */
  @Get(':categoriesId')
  findAllByCategory(@Param('categoriesId')  categoriesId: string) {
    return this.quotesService.findAllByCategory(categoriesId);
  }

  /* 
  * Single Quote get by id
  * ENDPOINT: /quotes
  */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotesService.findOne(id);
  }

  /* 
  * Update Quotes by id
  * ENDPOINT: /quotes
  */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
    return this.quotesService.update(id, updateQuoteDto);
  }

  /* 
  * Delete Quotes by id
  * ENDPOINT: /quotes
  */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotesService.remove(id);
  }
}
