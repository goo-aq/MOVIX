import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  constructor(private _HttpClient: HttpClient) {}
  getTrendingDay(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/tv/day?api_key=4865d731248750d8288668b428f04784'
    );
  }
  getTrendingWeek(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/tv/week?api_key=4865d731248750d8288668b428f04784'
    );
  }
  getShowDetails(id: string | null): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=4865d731248750d8288668b428f04784&language=en-US`
    );
  }
  getRecommendations(id: string | null): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=4865d731248750d8288668b428f04784&language=en-US&page=1`
    );
  }
  getPopular(): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=4865d731248750d8288668b428f04784&language=en-US&page=1`
    );
  }
  getTopRated(): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=4865d731248750d8288668b428f04784&language=en-US&page=1`
    );
  }
}
