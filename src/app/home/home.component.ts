import {Component, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {CourseService} from "../service/course.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: Course[] = [];
  enrolledCourses: Set<Course> = new Set<Course>();

  constructor(
    private courseService: CourseService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(c => this.courses = c);
    this.enrolledCourses = this.userService.getEnrolledCourses();
  }

  enrollCourse(course: Course) {
    if (course) {
      this.userService.enrollCourse(course);
    }
  }
}
