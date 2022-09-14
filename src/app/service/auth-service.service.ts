import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';

import { environment } from 'src/environments/environment';

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
  code: any;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: IUser): Promise<any> {
    //console.log("hello");
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    console.log(Auth.confirmSignUp);
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password).then(() => {
      this.authenticationSubject.next(true);
    });
  }
  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }
  loggedInCheck() {
    return !!localStorage.getItem(
      'CognitoIdentityServiceProvider.2situb5qd72946epu259r37fuk.89c72d25-07c7-48ff-9d33-db93edad0877.idToken'
    );
  }
}
