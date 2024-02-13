import { Table, Column, Model,ForeignKey,HasOne, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { University } from '../University/university.model';
import { Course } from '../Course/course.model';
import { Coursecategory} from '../Category/Coursecategory.model';
import { Category } from '../Category/category.model';
@Table
export class CourseSpecialization extends Model <CourseSpecialization>{
  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(()=> University)
  University_id:string


  @BelongsTo(()=>University)
  University:University

  
  @BelongsToMany(() => Category, () => Coursecategory,"courseSpecializationId")
  courses_category: Category[];
}