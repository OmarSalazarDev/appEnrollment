import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsService } from './services/students.service';
import { StudentListComponent } from './components/student-list/student-list.component';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
