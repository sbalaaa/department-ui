import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import Login from 'src/app/models/Login';

import { LoginService } from 'src/app/services/LoginService';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder : FormBuilder, private backendService : LoginService) {}
  ngOnInit(): void {}

  loginForm = this.formBuilder.group<Login>({
    userName: "",
    password: ""
  });

  handleSubmit() : void {
    var response = "";
    console.log("HI");
    console.log(this.loginForm.value);
    this.backendService.login(this.loginForm.value)
      .subscribe(data => {
        console.log(data)
        response = data;
      });
    console.log(response);

    this.router.navigateByUrl("/home")
  }

  

}
