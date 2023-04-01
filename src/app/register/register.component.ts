import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router:Router) {}
  sucsses: boolean = false;
  error: boolean = false;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    cPassword: new FormControl(null),
  });
  done: boolean = false;
  emailExist: string = '';
  errList: string[] = [];
  submitForm(data: FormGroup) {
    this._AuthService.register(data.value).subscribe({
      next: (res) => {
        this.emailExist='';
        this.errList=[];
        if (res.message == 'success') {
          this.done = true;
          this._Router.navigate(['/login']);
        } else {
          this.errList = res.err['0'].map((err: any) => {
            return err.message;
          });
        }
      },
      error: (err) => {
        if (err.status == 409) {
          this.emailExist = 'Email already used';
        }
      },
    });
  }
}
