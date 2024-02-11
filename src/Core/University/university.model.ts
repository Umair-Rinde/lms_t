import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { CourseSpecialization } from '../course_spl/course_spl.model';

@Table
export class University extends Model {
  @Column
  name: string;

  @Column
  location: string;

  @ForeignKey(() => CourseSpecialization)
  @Column
  specializationId: string;
}
