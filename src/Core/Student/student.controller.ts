import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Student> {
    const student = await this.studentService.findById(id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  @Post()
  async create(@Body() createStudentDto: Student): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: Student): Promise<Student> {
    await this.findById(id); // Check if student exists
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.findById(id); // Check if student exists
    await this.studentService.delete(id);
  }
}
