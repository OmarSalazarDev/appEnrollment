import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/courses/services/courses.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {
  fb: FormGroup;

  constructor(
    private courseService: CoursesService,
    private router: Router
  ) {
    this.fb = new FormGroup({
      nameCourses: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      teacher: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  addCourse() {
    const c: Course = {
      id: '',
      nameCourses: this.fb.value.nameCourses,
      startDate: this.fb.value.startDate,
      endDate: this.fb.value.endDate,
      teacher: this.fb.value.teacher
    }
    this.courseService.newCourse(c).subscribe((course: Course) => {
      alert(`${course.id} - ${course.nameCourses} agregado correctamente.`);
      this.router.navigate(['courses/list']);
    });
  }

}
