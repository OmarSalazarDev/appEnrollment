import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsService } from './services/inscriptions.service';
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';
import { SharedModule } from '../shared/shared.module';
import { NewDialogComponent } from './components/new-dialog/new-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';

@NgModule({
  declarations: [
    InscriptionListComponent,
    NewDialogComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule
  ],
  providers: [
    InscriptionsService
  ]
})
export class InscriptionsModule { }
