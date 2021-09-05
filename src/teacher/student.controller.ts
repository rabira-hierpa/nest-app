import { Get, Controller, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get students that belongs to a teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update student teacher';
  }
}
