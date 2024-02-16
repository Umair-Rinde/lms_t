import { Table, Column, Model, HasMany, HasOne} from 'sequelize-typescript';
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


  @HasOne(()=>Resource)
  resource: Resource
  


}