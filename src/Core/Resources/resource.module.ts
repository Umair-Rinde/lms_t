import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { Resource } from './resource.model';
import { CourseModule } from '../Course/course.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Resource]),
    CourseModule,
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
