import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() public alerts: Array<string> = [];

  selectedQuestion: string;

  questions = [
    { name: "Favorite color?", value: 1 },
    { name: "Pet name?", value: 2 },
    { name: "University name?", value: 3 },
    { name: "Most precious item?", value: 4 },
    { name: "Mother's name?", value: 5 }
  ]


  constructor(
    alertConfig: NgbAlertConfig,
    private router: Router,
    private authService: AuthService
    ) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
  })

  gender: String= "";

  //variables input
  username = "";
  email = "";
  password = "";
  sex = false;  //false for male, true for female
  answer = "";
  question = "";

  refresh(): void {
    window.location.reload();
  }

  male(){
    this.gender = "(Male)";
    this.sex = false;
  }

  female(){
    this.gender = "(Female)";
    this.sex = true;
  }

  ngOnInit(): void {
  }

  register(){
    
    if(this.username !== "" || this.email !== "" || this.password !== "" || this.question !== "" || this.answer !== ""){
      console.log("registered successfully!");
      this.authService.register(this.form.value);
      this.router.navigate(['login']);
    }
    else{
      console.log("need to fill all the fields")
    }
  }
}