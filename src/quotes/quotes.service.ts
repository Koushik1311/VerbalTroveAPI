import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class QuotesService {
  constructor(private prisma: PrismaService) {}

  create(createQuoteDto: CreateQuoteDto) {
    return this.prisma.quotes.create({ data: createQuoteDto });
  }

  // Create multiple quotes at the same time
  createMany(createQuoteDto: CreateQuoteDto) {
    return this.prisma.quotes.createMany({ data: createQuoteDto })
  }

  findAll() {
    return this.prisma.quotes.findMany();
  }

  // Get Random Quotes 
  // Raw Query
  findRandom() {
    return this.prisma.$queryRaw(
      // TODO: Get the LIMIT dinamicly
      Prisma.sql`SELECT * FROM "Quotes" ORDER BY RANDOM() LIMIT 1`
    )
  }

  findAllByCategory(categoriesId: string) {
    return this.prisma.$queryRaw(
      Prisma.sql`SELECT * FROM "Quotes" WHERE "categoriesId"=${categoriesId}::UUID 
    ORDER BY RANDOM() LIMIT 1`
    )
  }

  findOne(id: string) {
    return this.prisma.quotes.findUnique({ where: { id } });
  }

  update(id: string, updateQuoteDto: UpdateQuoteDto) {
    return this.prisma.quotes.update({ 
      where: { id },
      data: updateQuoteDto 
     });
  }

  remove(id: string) {
    return this.prisma.quotes.delete({ where: { id } });
  }
}
