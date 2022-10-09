import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../core/components/dashboard/dashboard.component';
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'list', component: InscriptionListComponent},
    {path: 'new', component: NewDialogComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionsRoutingModule { }
