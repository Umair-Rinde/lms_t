import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { University } from './university.model';
import { CourseSpecialization } from '../course_spl/course_spl.model';

@Injectable()
export class UniversityService {
  constructor(
    @InjectModel(University)
    private readonly universityModel: typeof University,
  ) {}

  async findAll(): Promise<University[]> {
    return this.universityModel.findAll({include:[CourseSpecialization]});
  }

  async findById(id: string): Promise<University | null> {
    return this.universityModel.findByPk(id);
  }

  async create(createUniversityDto: Partial <University>): Promise<University> {
    return this.universityModel.create(createUniversityDto);
  }

  async update(id: string, updateUniversityDto: University): Promise<University> {
    await this.universityModel.update(updateUniversityDto, {
      where: { id },
    });
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.universityModel.destroy({
      where: { id },
    });
  }
}
