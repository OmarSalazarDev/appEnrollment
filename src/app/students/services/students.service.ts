import { Injectable } from '@angular/core';
import { StudentsModule } from '../students.module';

@Injectable({
  providedIn: StudentsModule
})
export class StudentsService {

  constructor() { }
}
