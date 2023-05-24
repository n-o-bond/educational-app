import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../service/course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseId: number | null = null;
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  enrollCourse() {
    this.courseService.enrollCourse(this.course);
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam){
      this.courseId = +idParam;
      this.course = this.courseService.getCourseById(this.courseId);
    }
  }
}
