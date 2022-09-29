import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './services/courses.service';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CourseListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
