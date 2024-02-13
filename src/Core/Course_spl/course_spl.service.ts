import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourseSpecialization } from './course_spl.model';
import { Category } from '../Category/category.model';
import { Coursecategory } from '../Category/Coursecategory.model';

@Injectable()
export class CourseSpecializationService {
  constructor(
    @InjectModel(CourseSpecialization)
    private readonly courseSpecializationModel: typeof CourseSpecialization,
    @InjectModel(Category)
    private readonly categoryModel: typeof Category,
    @InjectModel(Coursecategory)
    private readonly courseCategoryModel: typeof Coursecategory,
  ) {}

  async findAll(): Promise<CourseSpecialization[]> {
    return this.courseSpecializationModel.findAll();
  }

  async findById(id: string): Promise<CourseSpecialization | null> {
    return this.courseSpecializationModel.findByPk(id);
  }

  async create(createSpecializationDto: Partial<CourseSpecialization>): Promise<CourseSpecialization> {
    return this.courseSpecializationModel.create(createSpecializationDto);
  }

  async update(id: string, updateSpecializationDto: CourseSpecialization): Promise<CourseSpecialization> {
    await this.courseSpecializationModel.update(updateSpecializationDto, {
      where: { id },
    });
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.courseSpecializationModel.destroy({
      where: { id },
    });
  }

  async addCategoryToSpecialization(specializationId: string, categoryId: string): Promise<CourseSpecialization | null> {
    try {
      const specialization = await this.courseSpecializationModel.findByPk(specializationId);
      if (!specialization) {
        console.log("Course specialization not found!");
        return null;
      }

      const category = await this.categoryModel.findByPk(categoryId);
      if (!category) {
        console.log("Category not found!");
        return null;
      }

      await specialization.$add('Category', category);
      console.log(`>> added Category id=${category.id} to CourseSpecialization id=${specialization.id}`);
      return specialization;
    } catch (err) {
      console.log(">> Error while adding Category to CourseSpecialization: ", err);
      return null;
    }
  }
}
