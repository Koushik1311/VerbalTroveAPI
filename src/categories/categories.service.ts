import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({ data: createCategoryDto });
  }

  createMany(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.createMany({ data: createCategoryDto });
  }

  findAll() {
    return this.prisma.categories.findMany();
  }

  findOne(id: string) {
    return this.prisma.categories.findUnique({ where: { id } });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.categories.update({ 
      where: { id },
      data: updateCategoryDto 
    });
  }

  remove(id: string) {
    return this.prisma.categories.delete({ where: { id } });
  }
}
