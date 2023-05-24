import { Injectable } from '@angular/core';
import {Course} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  enrolledCourses: Set<Course> = new Set<Course>();

  enrollCourse(course: Course) {
    this.enrolledCourses.add(course);
  }

  getEnrolledCourses() {
    return this.enrolledCourses;
  }

  constructor() {
  }
}
