import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsService } from './services/students.service';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SharedModule } from '../shared/shared.module';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [
    StudentListComponent,
    NewDialogComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
