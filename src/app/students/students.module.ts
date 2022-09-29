import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsService } from './services/students.service';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
