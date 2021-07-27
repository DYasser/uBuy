import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor( 
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  question = "";

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required)
  })

  reset(){
    this.authService.pswdReset(this.form.value).subscribe(data =>
      {
        if(data.value === true)
        {
          this.question = "true"
          this.router.navigate(['login']);
          console.log("give new password");
        } 
        else{
          console.log("no match");
        }
      });
  }

}
