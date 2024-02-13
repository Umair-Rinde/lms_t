// category.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryModel.findByPk(id);
  }

  async create(categoryData: Partial<Category>): Promise<Category> {
    return this.categoryModel.create(categoryData);
  }

  async update(id: number, categoryData: Partial<Category>): Promise<Category> {
    await this.categoryModel.update(categoryData, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.categoryModel.destroy({ where: { id } });
  }
}
