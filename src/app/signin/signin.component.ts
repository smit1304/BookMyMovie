import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';
  environmentVERSION = '0.0.9';
  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private app: AppComponent
  ) {}

  ngOnInit(): void {}
  loginClicked() {
    this.app.signInUser({
      email: this.email,
      name: this.email.slice(0, this.email.indexOf('@')),
    });
    // this.router.navigate(['/home']);
  }
  isLoginInValid() {
    let ans = false;

    if (
      this.email == null ||
      this.email.length < 5 ||
      this.password == null ||
      this.password.length < 8
    ) {
      ans = true;
    }
    return ans;
  }
}
