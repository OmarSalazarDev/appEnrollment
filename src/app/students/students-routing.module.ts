import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../core/components/dashboard/dashboard.component';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'list', component: StudentListComponent},
    {path: 'new', component: NewDialogComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
