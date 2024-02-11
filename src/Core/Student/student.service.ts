import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student)
    private readonly studentModel: typeof Student,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentModel.findAll();
  }

  async findById(id: string): Promise<Student | null> {
    return this.studentModel.findByPk(id);
  }

  async create(createStudentDto:Partial <Student>): Promise<Student> {
    return this.studentModel.create(createStudentDto);
  }

  async update(id: string, updateStudentDto: Student): Promise<Student> {
    await this.studentModel.update(updateStudentDto, {
      where: { id },
    });
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.studentModel.destroy({
      where: { id },
    });
  }
}
