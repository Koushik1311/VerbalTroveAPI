import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { QuotesModule } from './quotes/quotes.module';
import { CategoriesModule } from './categories/categories.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), PrismaModule, QuotesModule, CategoriesModule],
})
export class AppModule {}
