import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit() {
    if (this.angularFireAuth.auth.currentUser){
      this.router.navigate(['features']);
    }
  }

  // 成功時のコールバック
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    this.router.navigate(['features']);
  }

  // 失敗時のコールバック
  async errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }
}