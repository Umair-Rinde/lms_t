import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Course } from '../Course/course.model';

@Table
export class Resource extends Model {
  @Column
  type: string;

  @Column
  file: string;

  @Column
  is_published: boolean;

 
}
