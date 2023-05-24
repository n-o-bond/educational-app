import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../service/course.service";
import {UserService} from "../service/user.service";
import {Course} from "../models/course";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  courseId: number | null = null;
  course!: Course;
  enrolledCourses: Set<Course> = this.userService.getEnrolledCourses();

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam) {
      this.courseId = +idParam;
      this.course = this.courseService.getCourseById(this.courseId);
    }
  }
}
