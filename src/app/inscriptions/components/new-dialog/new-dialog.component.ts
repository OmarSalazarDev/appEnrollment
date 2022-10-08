import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Inscription } from 'src/app/models/inscription';
import { InscriptionsService } from '../../services/inscriptions.service';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {
  fb: FormGroup;

  constructor(
    private inscriptionsService: InscriptionsService,
    private router: Router
  ) {
    this.fb = new FormGroup({
      nameCourses: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  addInscription() {
    const c: Inscription = {
      id: '',
      nameCourses: this.fb.value.nameCourses,
      email: this.fb.value.email
    }
    this.inscriptionsService.newInscription(c).subscribe((inscription: Inscription) => {
      alert(`${inscription.id} - ${inscription.nameCourses} agregado correctamente.`);
      this.router.navigate(['inscriptions/list']);
    });
  }
}
