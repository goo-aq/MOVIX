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
  movies: any[] = [];
  ngOnInit() {
    this._MoviesService.getTrendingDay().subscribe({
      next: (data) => (this.movies = data.results),
    });
  }
}
