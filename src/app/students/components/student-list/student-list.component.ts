import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentsService } from '../../services/students.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students$!: Observable<Student[]>;

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.students$ = this.studentsService.getStudents();
  }

  navigationRoute(route: string) {
    this.router.navigate([route]);
  }

  delete(id: string) {
    this.studentsService.deleteStudent(id).subscribe((student) => {
      alert(`${student.id} - ${student.studentName} ${student.studentLastName} eliminado satisfactoriamente.`);
      this.ngOnInit();
    });
  }

  openDialog(student: Student) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: student
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        alert(`${student.id} - ${student.studentName} ${student.studentLastName} fue editado satisfactoriamente.`);
        this.ngOnInit();
      }
    });
  }
}
