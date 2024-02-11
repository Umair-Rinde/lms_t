import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Student extends Model {
  @Column
  phone: string;

  @Column
  qualification: string;

  @Column
  address: string;

  @Column
  is_member: boolean;
}
 