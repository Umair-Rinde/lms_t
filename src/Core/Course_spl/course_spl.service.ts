import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourseSpecialization } from './course_spl.model';
import { Category } from '../Category/category.model';
import { Coursecategory } from '../Category/Coursecategory.model';
import { University } from '../University/university.model';

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



async findCOurse_spl(): Promise<CourseSpecialization[]> {
    return this.courseSpecializationModel.findAll({include:[University,Category],});
  }

async findById(id: string): Promise<CourseSpecialization | null> {
    return this.courseSpecializationModel.findByPk(id);
  }

async create(
    createSpecializationDto: Partial<CourseSpecialization>,
  ): Promise<CourseSpecialization> {
    return this.courseSpecializationModel.create(createSpecializationDto);
  }

async update(
    id: string,
    updateSpecializationDto: CourseSpecialization,
  ): Promise<CourseSpecialization> {
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

async addCategoryToSpecialization(
    specializationId: string,
    categoryId: string[],
  ): Promise<CourseSpecialization | null> {
    try {
      const specialization =
        await this.courseSpecializationModel.findByPk(specializationId);
      
      if (!specialization) {
        console.log('Course specialization not found!');
        return null;
      }
      
      for (const categoryID_ of categoryId ) {
        const category = await this.categoryModel.findByPk(categoryID_);
        
        if (!category) {
          console.log('Category not found!');
          return null;
        }  
      
      const existingCategory = await specialization.$get('courses_category', {
        where: { id: categoryID_ },
      });
      
      if (existingCategory.length > 0) {
        console.log('Category already exists in CourseSpecialization!');
        continue
      }

      await specialization.$add('courses_category', category);
      console.log(
        `>> added Category id=${category.id} to CourseSpecialization id=${specialization.id}`,
      );
    }
      return specialization;
    } 
    
    catch (err) {
      console.log(
        '>> Error while adding Category to CourseSpecialization: ',
        err,
      );
      return null;
    }
  }

async deleteCategory(
    specializationId: string,
    categoryId: string,
  ): Promise<void> {
    const specialization =
      await this.courseSpecializationModel.findByPk(specializationId);
    if (!specialization) {
      console.log('Course specialization not found!');
      return null;
    }

    const category = await this.categoryModel.findByPk(categoryId);
    if (!category) {
      console.log('Category not found!');
      return null;
    }
    await specialization.$remove('course_category', category);
  }

async updateCategory(
    specializationId: string,
    updateId: string[],
  ): Promise<void> {
    const specialization =
      await this.courseSpecializationModel.findByPk(specializationId);
    if (!specialization) {
      console.log('Course specialization not found!');
      return null;
    }
    this.addCategoryToSpecialization(specializationId,updateId)
  }
}
    

