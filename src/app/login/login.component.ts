import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });
  emailVerify: string = '';
  err: boolean = false;
  submitForm(data: FormGroup) {
    this._AuthService.login(data.value).subscribe({
      next: (res) => {
        this.emailVerify='';
        this.err=false;
        console.log(res);
        if(res.message=='success'){
        if (res.token) {
          localStorage.setItem('mToken', res.token);
          this._AuthService.currentUser();
          this._Router.navigate(['/home']);
        }} else {
          this.err = true;
        }
      },
      error: (err) => {
        this.err=false;
        if (err.status == 403) {
          this.emailVerify = 'Please verify your email';
        }
      },
    });
  }
}
