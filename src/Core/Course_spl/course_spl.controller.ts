import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CourseSpecializationService } from './course_spl.service';
import { CourseSpecialization } from './course_spl.model';

@Controller('course-specializations')
export class CourseSpecializationController {
  constructor(private readonly courseSpecializationService: CourseSpecializationService) {}

  @Get()
  findAll(): Promise<CourseSpecialization[]> {
    return this.courseSpecializationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<CourseSpecialization | null> {
    return this.courseSpecializationService.findById(id);
  }

  @Post()
  create(@Body() createSpecializationDto: Partial<CourseSpecialization>): Promise<CourseSpecialization> {
    return this.courseSpecializationService.create(createSpecializationDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSpecializationDto: CourseSpecialization): Promise<CourseSpecialization> {
    return this.courseSpecializationService.update(id, updateSpecializationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.courseSpecializationService.delete(id);
  }

  @Post(':id/add-category/:categoryId')
  addCategoryToSpecialization(@Param('id') id: string, @Param('categoryId') categoryId: string): Promise<CourseSpecialization | null> {
    return this.courseSpecializationService.addCategoryToSpecialization(id, categoryId);
  }
}
