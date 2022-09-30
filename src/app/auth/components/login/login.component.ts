import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup(
    {
      usuario: new FormControl('omar', [Validators.required]),
      contrasena: new FormControl('1234', [Validators.required])
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  login(){

  }

}
