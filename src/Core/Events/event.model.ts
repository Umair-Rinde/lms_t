import { DATE,  } from "sequelize";
import { Column, DataType, PrimaryKey, Table,Model } from "sequelize-typescript";

@Table({})
export class Events extends Model{
    
    @PrimaryKey
    @Column
    id:string

    @Column(DataType.STRING)
    name:string

    @Column(DataType.STRING)
    description:string

    @Column(DataType.STRING)
    eventImage:string

    @Column(DataType.DATE)
    startDayTime:Date

    @Column(DataType.DATE)
    endDayTime:Date

    @Column(DataType.BOOLEAN)
    isFeatured:boolean
}