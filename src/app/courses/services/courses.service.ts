import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.api}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

  newCourse(course: Course) {
    return this.http.post<Course>(`${this.api}/courses`, course);
  }

  editCourse(course: Course) {
    return this.http.put<Course>(`${this.api}/courses/${course.id}`, course);
  }

  deleteCourse(id: string) {
    return this.http.delete<Course>(`${this.api}/courses/${id}`);
  }
}
