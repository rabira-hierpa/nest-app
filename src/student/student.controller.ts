import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getAllStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student with Id ${studentId}`;
  }

  @Post()
  createStudents(@Body() body) {
    return `Create student with the following data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudentById() {
    return 'Update student by Id';
  }
}
