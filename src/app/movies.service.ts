import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}

  getTrendingDay(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=4865d731248750d8288668b428f04784");
  }
  getTrendingWeek(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=4865d731248750d8288668b428f04784");
  }
  
}