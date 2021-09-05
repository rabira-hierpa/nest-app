import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getAllTeachers() {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById() {
    return 'Get teacher by Id';
  }

  @Post()
  addTeacher() {
    return 'Add teacher';
  }
}
