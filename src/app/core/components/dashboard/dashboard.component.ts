import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.getSession().subscribe(session => {
      if(!session.activeSession) {
        this.router.navigate(['auth/login']);
      }
    })
  }

  navigationRoute(route: string) {
    this.router.navigate([route]);
  }

}
