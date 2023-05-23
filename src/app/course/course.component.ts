import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // @Input()
  courseId: number | null = null;
  course: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService){
  }

  enrollCourse() {
    // Implement your enrollment logic here
    console.log('Enrolling in course:', this.course.title);
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam){
      this.courseId = +idParam;
      this.course = this.courseService.getCourseById(this.courseId);
    }
  }
}
