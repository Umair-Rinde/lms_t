import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';
import { University } from './university.model';
import { CourseSpecializationModule } from '../Course_spl/course_spl.mdoule'; // Import CourseSpecializationModule

@Module({
  imports: [
    SequelizeModule.forFeature([University]),
    CourseSpecializationModule, // Import CourseSpecializationModule here
  ],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
