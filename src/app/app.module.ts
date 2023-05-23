import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'course/:id', component: CourseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    UserComponent,
    EnrollFormComponent
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
