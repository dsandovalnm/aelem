import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-plataforma',
  templateUrl: './login-plataforma.component.html',
  styleUrls: ['./login-plataforma.component.css']
})
export class LoginPlataformaComponent implements OnInit {

  loginForm: FormGroup;
  auth: boolean = false;

  constructor(  private _FormBuilder: FormBuilder) {
    this.loginForm = this._FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    
  }

}
