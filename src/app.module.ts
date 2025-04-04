import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './Core/User/user.module';
import { UniversityModule } from './Core/University/university.module';
import { StudentModule } from './Core/Student/student.module';
import { CourseModule } from './Core/Course/course.module';
import { CourseSpecializationModule } from './Core/Course_spl/course_spl.mdoule';
import { ResourceModule } from './Core/Resources/resource.module';
import { CategoryModule } from './Core/Category/category.module';
import { EventModule } from './Core/Events/event.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '123',
      port: 5432,
      database: 'lms_test',
      schema: 'public',
      autoLoadModels: true,
      sync: { alter: true },
    }),
    UserModule,
    StudentModule,
    CourseModule,
    UniversityModule,
    CourseSpecializationModule,
    ResourceModule,
    EventModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
