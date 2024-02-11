import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourseSpecialization } from './course_spl.model';

@Injectable()
export class CourseSpecializationService {
  constructor(
    @InjectModel(CourseSpecialization)
    private readonly courseSpecializationModel: typeof CourseSpecialization,
  ) {}

  async findAll(): Promise<CourseSpecialization[]> {
    return this.courseSpecializationModel.findAll();
  }

  async findById(id: string): Promise<CourseSpecialization | null> {
    return this.courseSpecializationModel.findByPk(id);
  }

  async create(createSpecializationDto: Partial <CourseSpecialization>): Promise<CourseSpecialization> {
    return this.courseSpecializationModel.create(createSpecializationDto);
  }

  async update(id: string, updateSpecializationDto: CourseSpecialization): Promise<CourseSpecialization> {
    await this.courseSpecializationModel.update(updateSpecializationDto, {
      where: { id },
    });
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.courseSpecializationModel.destroy({
      where: { id },
    });
  }
}
