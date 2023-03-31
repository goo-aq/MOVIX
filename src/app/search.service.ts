import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _HttpClient: HttpClient) {}

  searchMovies(term: string | null): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/search/movie?api_key=4865d731248750d8288668b428f04784&language=en-US&query=${term}&page=1&include_adult=false`
    );
  }
  searchShows(term: string | null): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/search/tv?api_key=4865d731248750d8288668b428f04784&language=en-US&query=${term}&page=1&include_adult=false`
    );
  }
}
