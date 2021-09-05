import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { CourseController } from './course/course.controller';
import { TeacherController } from './teacher/teacher.controller';
import { StudentTeacherController } from './teacher/student.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    StudentController,
    TeacherController,
    StudentTeacherController,
    CourseController,
  ],
  providers: [AppService],
})
export class AppModule {}
