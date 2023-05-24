import {Component, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit{

  enrolledCourses: Set<Course> = new Set<Course>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.enrolledCourses = this.userService.getEnrolledCourses();
  }

}
