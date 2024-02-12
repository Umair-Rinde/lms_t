import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { CourseSpecializationService } from './course_spl.service';
import { CourseSpecialization } from './course_spl.model';

@Controller('course-specializations')
export class CourseSpecializationController {
  constructor(private readonly courseSpecializationService: CourseSpecializationService) {}

  @Get()
  async findAll(): Promise<CourseSpecialization[]> {
    return this.courseSpecializationService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CourseSpecialization> {
    const specialization = await this.courseSpecializationService.findById(id);
    if (!specialization) {
      throw new NotFoundException('Course Specialization not found');
    }
    return specialization;
  }

  @Post()
  async create(@Body() createSpecializationDto: CourseSpecialization): Promise<CourseSpecialization> {
    return this.courseSpecializationService.create(createSpecializationDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSpecializationDto: CourseSpecialization): Promise<CourseSpecialization> {
    await this.findById(id); 
    return this.courseSpecializationService.update(id, updateSpecializationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.findById(id); 
    await this.courseSpecializationService.delete(id);
  }
}
