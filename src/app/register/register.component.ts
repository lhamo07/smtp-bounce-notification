import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService, IUser } from '../service/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // isConfirm: boolean;
  // user: IUser;

  // constructor(private router: Router,
  //             private cognitoService: CognitoService) {
  //   this.loading = false;
  //   this.isConfirm = false;
  //   this.user = {} as IUser;
  // }

  // public signUp(): void {
  //   this.loading = true;
  //   this.cognitoService.signUp(this.user)
  //   .then(() => {
  //     this.loading = false;
  //     this.isConfirm = true;
  //   }).catch(() => {
  //     this.loading = false;
  //   });
  // }

  registerForm!: FormGroup;
  isConfirm: boolean = false;
  loading: boolean = false;
  user: IUser;
  router: any;
 


  constructor(private authService: CognitoService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    console.log('authservice', this.authService);
  }
  onSubmit() {
    console.log('sign up works');
    console.log(this.registerForm.value);
    console.log(this.registerForm.get("email")?.value)
    this.user.email = this.registerForm.get("email")?.value
    this.user.password = this.registerForm.get("password")?.value

    this.authService
      .signUp(this.user)
      .then(() => {
        console.log(this.user.email);
      })
      .catch((error) => {
        console.log('error', error);
      });
    console.log('user', this.user.email);
  }


  public confirmSignUp(){
    this.authService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/login']);
    }).catch(() => {
      this.loading = false;
    });
  }
}

 
// }


