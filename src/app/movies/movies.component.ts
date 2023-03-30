import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private _MoviesService: MoviesService) {}
  trendMoviesDay: any[] = [];
  trendMoviesWeek: any[] = [];
  popMovies: any[] = [];
  topRatedMovies: any[] = [];

  ngOnInit() {
    this._MoviesService.getTrendingDay().subscribe({
      next: (data) => (this.trendMoviesDay = data.results),
    });
    this._MoviesService.getTrendingWeek().subscribe({
      next: (data) => (this.trendMoviesWeek = data.results),
    });
    this._MoviesService.getPopular().subscribe({
      next: (data) => (this.popMovies = data.results),
    });
    this._MoviesService.getPopular().subscribe({
      next: (data) => (this.topRatedMovies = data.results),
    });
  }
}
