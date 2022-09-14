import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'smtp-bounce-notification';
  constructor() {}
  // signOut() {
  //   this.authService.signOut().then(() => {
  //     console.log('signout successfully');
  //     this.router.navigate(['/signup']);
  //   });
  // }

  ngOnInit(): void {}
}
