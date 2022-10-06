import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';
// Verificado
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionSubject!: BehaviorSubject<Session>

  constructor() {
    const session: Session = {
      activeSession: false
    }
    this.sessionSubject = new BehaviorSubject(session);
  }

  logIn(user: User) {
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
