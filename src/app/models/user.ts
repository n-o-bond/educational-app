import {Course} from "./course";

export class User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enrolledCourses: Course[] = [];
}
