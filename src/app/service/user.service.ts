import { Injectable } from '@angular/core';
import {Course} from "../models/course";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User;

  enrollCourse(course: Course) {
    this.user.enrolledCourses.add(course);
  }

  getEnrolledCourses() {
    return this.user.enrolledCourses;
  }

  constructor() {
  }
}
