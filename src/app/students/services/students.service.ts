import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentsModule } from '../students.module';
import { Student } from '../../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.api}/student`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

  newStudent(student: Student) {
    return this.http.post<Student>(`${this.api}/student`, student);
  }

  editStudent(student: Student) {
    return this.http.put<Student>(`${this.api}/student/${student.id}`, student);
  }

  deleteStudent(id: string) {
    return this.http.delete<Student>(`${this.api}/student/${id}`);
  }
}
