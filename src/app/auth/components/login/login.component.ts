import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frmLogin!: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.frmLogin = fb.group({
      user: new FormControl('', [Validators.required]),
      psw: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login(){
    const user: User = {
      id: '1',
      username: this.frmLogin.value.user,
      psw: this.frmLogin.value.psw,
      admin: this.frmLogin.value.admin

    }
    this.auth.logIn(user);
    this.router.navigate(['dashboard']);
  }

}
