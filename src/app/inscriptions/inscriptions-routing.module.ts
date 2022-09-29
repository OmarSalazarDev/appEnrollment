import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';

const routes: Routes = [
  {path: 'inscripcion', children: [
    {path: 'lista', component: InscriptionListComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionsRoutingModule { }
