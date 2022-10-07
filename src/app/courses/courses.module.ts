import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './services/courses.service';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';

@NgModule({
  declarations: [
    CourseListComponent,
    EditDialogComponent,
    NewDialogComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
