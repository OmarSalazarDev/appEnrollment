import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionSubject!: BehaviorSubject<Session>
  private api: string = environment.api;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const session: Session = {
      activeSession: false
    }
    this.sessionSubject = new BehaviorSubject(session);
  }

  logIn(user: User) {
    this.http.get<User[]>(`${this.api}/user`).pipe(
      map((users: User[]) => {
        return users.filter((u: User) => u.username === user.username && u.psw === user.psw)[0];
      })
    ).subscribe((user: User) => {
      if(user) {
        const session: Session = {
          activeSession: true,
          user: {
            id: user.id,
            username: user.username,
            psw: user.psw,
            admin: user.admin
          }
        }
        this.sessionSubject.next(session);
        this.router.navigate(['dashboard']);
      }else {
        alert('Usuario no encontrado.');
      }
    });


  }

  SignOff() {
    const session: Session = {
      activeSession: false
    }
    this.sessionSubject.next(session);
  }

  getSession() {
    return this.sessionSubject.asObservable();
  }
}
