import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';
import { University } from './university.model';
import { CourseSpecializationModule } from '../Course_spl/course_spl.mdoule'; // Import CourseSpecializationModule
import { CourseSpecialization } from '../course_spl/course_spl.model';

@Module({
  imports: [
    SequelizeModule.forFeature([University,CourseSpecialization]),
    CourseSpecializationModule, // Import CourseSpecializationModule here
  ],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
