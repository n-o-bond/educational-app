import { Injectable } from '@angular/core';
import {Course} from "../models/course";
import {Observable, of} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Course 1',
      description: 'This is the description for Course 1',
      instructor: 'Mari',
      duration: '2 weeks',
      startDate: new Date('2023-06-01')
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'This is the description for Course 2',
      instructor: 'Instructor 2',
      duration: '1 month',
      startDate: new Date('2023-05-27')
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'This is the description for Course 3',
      instructor: 'Instructor 3',
      duration: '3 weeks'
    },
    {
      id: 4,
      title: 'Course 4',
      description: 'This is the description for Course 4',
      instructor: 'Instructor 4',
      duration: '2 months'
    },
    {
      id: 5,
      title: 'Course 5',
      description: 'This is the description for Course 5',
      instructor: 'Instructor 5',
      duration: '4 weeks'
    }
  ]

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(courseId: number){
    return this.courses.find(course => course.id === courseId);
  }

  enrollCourse(course: Course) {
    if (course) {
      this.userService.enrollCourse(course);
    }
  }

  constructor(
    private userService: UserService
  ) {}
}
