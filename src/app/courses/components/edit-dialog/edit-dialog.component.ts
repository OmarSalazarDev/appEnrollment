import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesService } from 'src/app/courses/services/courses.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  fb: FormGroup;

  constructor(
    private courseService: CoursesService,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private course: Course
  ) {
    this.fb = new FormGroup({
      nameCourses: new FormControl(course.nameCourses),
      startDate: new FormControl(course.startDate),
      endDate: new FormControl(course.endDate),
      teacher: new FormControl(course.teacher),
    })
  }

  ngOnInit(): void {
  }

}
