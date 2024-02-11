import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Course } from '../Course/course.model';

@Table
export class Resource extends Model {
  @Column
  type: string;

  @Column
  file: string;

  @ForeignKey(() => Course)
  @Column
  courseId: string;

  @Column
  is_published: boolean;
}
