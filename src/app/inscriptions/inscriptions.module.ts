import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsService } from './services/inscriptions.service';
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';

@NgModule({
  declarations: [
    InscriptionListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    InscriptionsService
  ]
})
export class InscriptionsModule { }
