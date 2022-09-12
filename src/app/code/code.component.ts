// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Authservice, IUser } from '../service/auth-service.service';
// @Component({
//   selector: 'app-code',
//   templateUrl: './code.component.html',
//   styleUrls: ['./code.component.css'],
// })
// export class CodeComponent implements OnInit {
//   confirmSignUp!: FormGroup;
//   user: IUser;
//   constructor(private authService: Authservice, private router: Router) {
//     this.user = {} as IUser;
//   }

//   ngOnInit(): void {
//     this.confirmSignUp = new FormGroup({
//       code: new FormControl(null),
//     });
//   }
//   onConfirm() {
//     this.user.code = this.confirmSignUp.get('code')?.value;
//     this.user.email = this.confirmSignUp.get('email')?.value;
//     console.log(this.user.code);
//     console.log(this.user.email);
//     this.authService
//       .confirmSignUp(this.user)
//       .then(() => {
//         this.router.navigate(['/login']);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }
