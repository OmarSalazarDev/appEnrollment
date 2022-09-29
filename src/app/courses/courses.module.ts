import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './services/courses.service';
import { CourseListComponent } from './components/course-list/course-list.component';



@NgModule({
  declarations: [
    CourseListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
