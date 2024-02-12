import { Table, Column, Model, BelongsTo, HasMany } from 'sequelize-typescript';
import { CourseSpecialization } from '../course_spl/course_spl.model';

@Table
export class University extends Model {
  @Column
  name: string;

  @Column
  location: string;
  
  @HasMany(()=>CourseSpecialization)
  course_spl:CourseSpecialization[]
}
