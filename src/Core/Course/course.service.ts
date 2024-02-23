import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './course.model';
import { Resource } from '../Resources/resource.model';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course)
    private readonly courseModel: typeof Course,
  ) {}

  async findcourse(){
    return this.courseModel.findAll({include:[Resource]})
  }
  async findAll(): Promise<Course[]> {
    return this.courseModel.findAll({include:Resource});
  }

  async findById(id: string): Promise<Course | null> {
    return this.courseModel.findByPk(id);
  }

  async create(createCourseDto:Partial <Course>): Promise<Course> {
    return this.courseModel.create(createCourseDto);
  }

  async update(id: string, updateCourseDto: Course): Promise<Course> {
    await this.courseModel.update(updateCourseDto, {
      where: { id },
    });
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.courseModel.destroy({
      where: { id },
    });
  }
}
