import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Course } from './course.model';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [SequelizeModule.forFeature([Course]), MulterModule.register({
    dest:"src/Core/Course/files"
  })],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
