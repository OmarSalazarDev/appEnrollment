import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  fb: FormGroup;

  constructor(
    private studentsService: StudentsService,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private student: Student
  ) {
    this.fb = new FormGroup({
      studentName: new FormControl(student.studentName),
      studentLastName: new FormControl(student.studentLastName),
      age: new FormControl(student.age),
      gender: new FormControl(student.gender),
      cellPhoneNumber: new FormControl(student.cellPhoneNumber),
      email: new FormControl(student.email),
    });
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editStudent() {
    const c: Student = {
      id: this.student.id,
      studentName: this.fb.value.studentName,
      studentLastName: this.fb.value.studentLastName,
      age: this.fb.value.age,
      gender: this.fb.value.gender,
      cellPhoneNumber: this.fb.value.cellPhoneNumber,
      email: this.fb.value.email,
    }
    this.studentsService.editStudent(c).subscribe((student: Student) => {
      this.dialogRef.close(student);
    })
  }
}
