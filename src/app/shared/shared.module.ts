import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleDirectiveDirective } from './directives/title-directive.directive';
import { FullnamePipesPipe } from './pipes/fullname-pipes.pipe';
import { GenderPipesPipe } from './pipes/gender-pipes.pipe';


@NgModule({
  declarations: [
    TitleDirectiveDirective,
    FullnamePipesPipe,
    GenderPipesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
