import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  registerForm = this.formBuilder.group({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: ""
  });

  handleSubmit() : void {
    (this.registerForm.getRawValue().password == this.registerForm.getRawValue().confirmPassword) ? 
      console.log(this.registerForm.value) :
      console.log("Password Does not match...");
  }

}
