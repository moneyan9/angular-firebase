import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit() {
  }

  // ログアウト
  async logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['login']);
  }
  
}
