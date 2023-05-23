import {Component, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: Course[] = [];
  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(c => this.courses = c);
  }
}
