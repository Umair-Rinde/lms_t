import { Table, Column, Model, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Resource } from '../Resources/resource.model';

@Table
export class Course extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  course_id: string;

  @Column
  faculty_id: string;


  @HasMany(()=>Resource)
  resource: Resource
  


}