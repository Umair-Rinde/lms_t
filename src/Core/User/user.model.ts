import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';
import { Gender } from '../enum/gender.enum';
import { DataType } from 'sequelize-typescript';
@Table
export class User extends Model {
  
  @PrimaryKey
  @Column({allowNull:false})
  id: string;

  @Column
  fullName: string;

  @Column
  email: string;

  @Column
  password: string;
  
  @Column
  phone: number;

  @Column(DataType.ENUM('male', 'female'))
  gender: Gender;
}
