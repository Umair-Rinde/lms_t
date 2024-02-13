import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category.model';
import { Coursecategory } from './Coursecategory.model';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Category,Coursecategory]),
  ],
  controllers:[CategoryController],
  providers:[CategoryService]
})
export class CategoryModule{}
