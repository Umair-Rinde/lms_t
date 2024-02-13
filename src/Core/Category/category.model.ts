import { Table , Model, Column, BelongsTo, BelongsToMany} from "sequelize-typescript";
import { CourseSpecialization } from "../course_spl/course_spl.model";
import { Coursecategory } from "./Coursecategory.model";

@Table
export class Category extends Model{

    @Column
    Cat_Name:string

    @Column
    Cat_desc:string

    @BelongsToMany(()=>CourseSpecialization,()=>Coursecategory)
    course_spl:CourseSpecialization[]

}