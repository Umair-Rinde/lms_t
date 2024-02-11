import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { Resource } from './resource.model';
import { CourseModule } from '../Course/course.module'; // Import CourseModule

@Module({
  imports: [
    SequelizeModule.forFeature([Resource]),
    CourseModule, // Import CourseModule here if it's not already imported in AppModule
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
