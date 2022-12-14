import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../core/components/dashboard/dashboard.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'list', component: CourseListComponent},
    {path: 'new', component: NewDialogComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
