import {Course} from "./course";

export class User{
  id: number = 1;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  enrolledCourses: Set<Course> = new Set<Course>();
}
