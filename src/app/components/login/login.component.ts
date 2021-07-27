import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formVar: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formVar = this.fb.group({
      username: '',
      password: ''
    });
  }

  login() {
    this.authService.login(this.formVar.value).subscribe( data =>
    {
      if(data === true){
        console.log("connected")
      }
      else{
        console.log("no matched account")
      }
    });
  }
}
