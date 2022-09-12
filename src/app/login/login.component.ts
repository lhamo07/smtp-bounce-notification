import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, Authservice } from '../service/auth-service.service';
import { ToastNotificationService } from '../service/toast-notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  user: IUser;
  constructor(
    private authService: Authservice,
    private router: Router,
    private notify: ToastNotificationService
  ) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }
  onSignin() {
    this.user.email = this.signInForm.get('email')?.value;
    this.user.password = this.signInForm.get('password')?.value;
    this.authService
      .signIn(this.user)
      .then(() => {
        this.notify.showSuccess('Login successful!');
        this.router.navigate(['/dashboard']);
      })
      .catch(() => {
        this.notify.showError('Incorrect email or password');
      });
  }
}
