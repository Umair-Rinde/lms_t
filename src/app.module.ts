import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './Core/User/user.controller';
import { User } from './Core/User/user.model';
import { University } from './Core/University/university.model';
import { Student } from './Core/Student/student.model';
import { Resource } from './Core/Resources/resource.model';
import { Course } from './Core/Course/course.model';
import { CourseSpecialization } from './Core/Course_spl/course_spl.model';
import { UniversityController } from './Core/University/university.controller';
import { StudentController } from './Core/Student/student.controller';
import { ResourceController } from './Core/Resources/resource.controller';
import { CourseSpecializationController } from './Core/Course_spl/course_spl.controller';
import { CourseController } from './Core/Course/course.controller';
import { UserService } from './Core/User/user.service';
import { UniversityService } from './Core/University/university.service';
import { StudentService } from './Core/Student/student.service';
import { ResourceService } from './Core/Resources/resource.service';
import { CourseSpecializationService } from './Core/Course_spl/course_spl.service';
import { CourseService } from './Core/Course/course.service';
import { UserModule } from './Core/User/user.module';
import { UniversityModule } from './Core/University/university.module';
import { StudentModule } from './Core/Student/student.module';
import { CourseModule } from './Core/Course/course.module';
import { CourseSpecializationModule } from './Core/Course_spl/course_spl.mdoule';
import { ResourceModule } from './Core/Resources/resource.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '123',
      ///port: 3000,
      database: 'lms_test',
      schema:"public",  
      autoLoadModels:true,
      // models:[User,University,Student,Resource,Course,CourseSpecialization],
      sync:{alter:true},

      // synchronize:true,
      
    }),
    UserModule
,StudentModule,
CourseModule,
UniversityModule,
CourseSpecializationModule,
ResourceModule

// UniversityModule
  ],
  controllers: [
  ],
  providers: [

  ],
})
export class AppModule {}
