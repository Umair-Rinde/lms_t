import { Table, Column, Model,ForeignKey,HasOne, BelongsTo } from 'sequelize-typescript';
import { University } from '../University/university.model';

/* The CourseSpecialization class represents a specialization within a university course, with
properties for name, description, university ID, and a reference to the university it belongs to. */
@Table
export class CourseSpecialization extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(()=> University)
  University_id:string

  @BelongsTo(()=>University)
  University:University
  
}
