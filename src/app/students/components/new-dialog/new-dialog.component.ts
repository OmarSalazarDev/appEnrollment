import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {
  fb: FormGroup;

  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {
    this.fb = new FormGroup({
      studentName: new FormControl(),
      studentLastName: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      cellPhoneNumber: new FormControl(),
      email: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  addStudent() {
    const c: Student = {
      id: '',
      studentName: this.fb.value.studentName,
      studentLastName: this.fb.value.studentLastName,
      age: this.fb.value.age,
      gender: this.fb.value.gender,
      cellPhoneNumber: this.fb.value.cellPhoneNumber,
      email: this.fb.value.email
    }
    this.studentsService.newStudent(c).subscribe((student: Student) => {
      alert(`${student.id} - ${student.studentName} ${student.studentLastName} agregado correctamente.`);
      this.router.navigate(['students/list']);
    });
  }
}
