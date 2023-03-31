import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

register(user:any):Observable<any>{
  return this._HttpClient.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",user)
}}