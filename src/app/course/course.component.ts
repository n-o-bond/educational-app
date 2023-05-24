import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../service/course.service";
import {UserService} from "../service/user.service";
import {Course} from "../models/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course!: Course;
  @Input() hasEnroll!: boolean;
  @Input() enabledDetails!: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  enrollCourse() {
      if(this.course) {
        this.userService.enrollCourse(this.course);
      }
  }

  ngOnInit() {
  }
}
