import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseSpecializationController } from './course_spl.controller';
import { CourseSpecializationService } from './course_spl.service';
import { CourseSpecialization } from './course_spl.model';

@Module({
  imports: [SequelizeModule.forFeature([CourseSpecialization])],
  controllers: [CourseSpecializationController],
  providers: [CourseSpecializationService],
})
export class CourseSpecializationModule {}
