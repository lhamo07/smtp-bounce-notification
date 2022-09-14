import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice, IUser } from '../service/auth-service.service';
import { ToastNotificationService } from '../service/toast-notification.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  isConfirm: boolean = false;
  loading: boolean = false;
  user: IUser;

  constructor(
    private router: Router,
    private authService: Authservice,
    private notify: ToastNotificationService
  ) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      code: new FormControl(null),
    });
  }
  onSubmit() {
    console.log('sign up works');
    this.user.email = this.registerForm.get('email')?.value;
    this.user.password = this.registerForm.get('password')?.value;

    this.authService
      .signUp(this.user)
      .then(() => {
        this.isConfirm = true;
        this.notify.showSuccess('Register successfully');
        // this.router.navigate(['/code']);
      })
      .catch((error) => {
        console.log('error', error);
      });
    // console.log('user', this.user.email);
  }

  public confirmSignUp() {
    this.user.email = this.registerForm.get('email')?.value;
    console.log(this.registerForm.get('email')?.value);
    this.user.code = this.registerForm.get('code')?.value;
    console.log(this.registerForm.get('code')?.value);
    this.authService
      .confirmSignUp(this.user)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(() => {
        this.loading = false;
      });
  }
}
