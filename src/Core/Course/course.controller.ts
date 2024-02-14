import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.model';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async findcourse(): Promise<Course[]> {
    return this.courseService.findcourse();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Course> {
    const course = await this.courseService.findById(id);
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  @Post()
  async create(@Body() createCourseDto: Course): Promise<Course> {
    return this.courseService.create(createCourseDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCourseDto: Course): Promise<Course> {
    await this.findById(id); 
    return this.courseService.update(id, updateCourseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.findById(id); 
    await this.courseService.delete(id);
  }

  @Post('upload-course')
  @UseInterceptors(FileInterceptor('courseFile'))
  courseAdd(@UploadedFile() courseFile:Express.Multer.File):object{
    console.log(courseFile)
    return{
      message:"File uploaded sucessfully"
    }
  }
}
