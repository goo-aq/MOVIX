import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  loggedinUser = new BehaviorSubject(null);
  currentUser() {
    let token = JSON.stringify(localStorage.getItem('mToken'));
    let decode: any = jwtDecode(token);
    this.loggedinUser.next(decode);
  }
  register(user: any): Observable<any> {
    return this._HttpClient.post(
      'https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup',
      user
    );
  }
  login(user: any): Observable<any> {
    return this._HttpClient.post(
      'https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin',
      user
    );
  }
}
