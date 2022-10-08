import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscription } from 'src/app/models/inscription';
import { InscriptionsService } from '../../services/inscriptions.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  fb: FormGroup;

  constructor(
    private inscriptionsService: InscriptionsService,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private inscription: Inscription
  ) {
    this.fb = new FormGroup({
      nameCourses: new FormControl(inscription.nameCourses),
      email: new FormControl(inscription.email)
    });
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editInscription() {
    const c: Inscription = {
      id: this.inscription.id,
      nameCourses: this.fb.value.nameCourses,
      email: this.fb.value.email
    }
    this.inscriptionsService.editInscription(c).subscribe((inscription: Inscription) => {
      this.dialogRef.close(inscription);
    })
  }
}
