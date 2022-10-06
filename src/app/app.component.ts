import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { Session } from './models/session';
// verific
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  session$!: Observable<Session>;

  constructor(
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {
    this.session$ = this.auth.getSession();
    console.log(this.session$);
  }
}
