import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseSpecializationController } from './course_spl.controller';
import { CourseSpecializationService } from './course_spl.service';
import { CourseSpecialization } from './course_spl.model';
import { Category } from '../Category/category.model';
import { Coursecategory } from '../Category/Coursecategory.model';

@Module({
  imports: [SequelizeModule.forFeature([CourseSpecialization,Category,Coursecategory])],
  controllers: [CourseSpecializationController],
  providers: [CourseSpecializationService],
})
export class CourseSpecializationModule {}
