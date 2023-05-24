import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import {RouterModule, Routes} from "@angular/router";
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { CourseViewComponent } from './course-view/course-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'course/:id', component: CourseViewComponent },
  { path: 'enrolled-courses', component: EnrolledCoursesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    EnrolledCoursesComponent,
    CourseViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
