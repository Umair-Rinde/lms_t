import { Table, Column, Model,ForeignKey,HasOne } from 'sequelize-typescript';

@Table
export class CourseSpecialization extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(() => CourseSpecialization)
  @Column
  specializationId: string;

  @HasOne(() => CourseSpecialization)
  specialization: CourseSpecialization;
}
