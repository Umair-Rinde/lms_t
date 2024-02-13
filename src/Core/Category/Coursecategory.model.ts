import { Table, Model, ForeignKey } from 'sequelize-typescript';
import { CourseSpecialization } from '../course_spl/course_spl.model';
import { Category } from './category.model';

@Table
export class Coursecategory extends Model<Coursecategory> {

    
  @ForeignKey(() => Category)
  CategoryId: number;

  @ForeignKey(() => CourseSpecialization)
  courseSpecializationId: number;
}
