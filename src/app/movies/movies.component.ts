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
  isLoadingTD: boolean = false;
  isLoadingTW: boolean = false;
  isLoadingP: boolean = false;
  isLoadingR: boolean = false;
  ngOnInit() {
    this.isLoadingTD = true;
    this.isLoadingTW = true;
    this.isLoadingP = true;
    this.isLoadingR = true;
    this._MoviesService.getTrendingDay().subscribe({
      next: (data) => {
        this.isLoadingTD = false;
        this.trendMoviesDay = data.results;
      },
    });
    this._MoviesService.getTrendingWeek().subscribe({
      next: (data) => {
        this.isLoadingTW = false;
        this.trendMoviesWeek = data.results;
      },
    });
    this._MoviesService.getPopular().subscribe({
      next: (data) => {
        this.isLoadingP = false;
        this.popMovies = data.results;
      },
    });
    this._MoviesService.getTopRated().subscribe({
      next: (data) => {
        this.isLoadingR = false;
        this.topRatedMovies = data.results;
      },
    });
  }
}
