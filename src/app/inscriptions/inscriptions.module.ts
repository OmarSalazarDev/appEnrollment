import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsService } from './services/inscriptions.service';
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InscriptionListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    InscriptionsService
  ]
})
export class InscriptionsModule { }
