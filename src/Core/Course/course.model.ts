import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Course extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  resource_id: string;

  @Column
  faculty_id: string;
}
